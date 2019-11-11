import React, { useState } from "react";
import "./App.css";

// 1. Mettre en page
// 2. Créer des états
// 3. Créer des interactions

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTaskInput, setNewTaskInput] = useState("");

  // const tab = useState();
  // const tasks = tab[0];
  // const setTasks = tab[1];

  return (
    <div className="App">
      <h1>To-Do list</h1>
      <ul>
        {tasks.map((task, index) => {
          // Cette fonction sera exécutée autant de fois qu'il y a d'élément dans le tableau tasks
          return (
            <li>
              <span
                className={task.isDone === true ? "done" : ""}
                onClick={() => {
                  const newTasks = [...tasks];
                  newTasks[index].isDone = !newTasks[index].isDone; // est égal à l'inverse de newTasks[index].isDone
                  // if (newTasks[index].isDone === true) {
                  //   newTasks[index].isDone = false;
                  // } else {
                  //   newTasks[index].isDone = true;
                  // }

                  setTasks(newTasks);
                }}
              >
                {task.name}
              </span>
              -
              <span
                onClick={() => {
                  const newTasks = [...tasks];
                  newTasks.splice(index, 1);
                  setTasks(newTasks);
                }}
              >
                Supprimer
              </span>
            </li>
          );
        })}
      </ul>

      <form
        onSubmit={event => {
          // Pour empecher le navigateur de rafraichir la page lorsque le formulaire sera soumis. Nous devons utiliser event.preventDefault()
          event.preventDefault();
          // Il est interdit de modifier les états directement
          // Au lieu de faire :
          // counter++;
          // Nous devons faire :
          // setCounter(counter + 1);
          // Au lieu de push directement le tableau tasks, nous allons créer une copie et ensuite ajouter un nouvel element dans la copie
          // Procédure pour modifier un état de type tableau
          // 1. Créer une copie du tableau tasks (est aussi possible pour les objets)
          const newTasks = [...tasks]; // SPREAD OPERATOR
          // const newTasks = tasks; // newTasks est en fait un raccourci (alias) vers tasks
          // 2. Ajouter un element dans la copie
          newTasks.push({
            name: newTaskInput,
            isDone: false
          });
          // 3. Definir que l'état tasks est égal à la copie
          setTasks(newTasks);

          // Vider le input du formulaire
          setNewTaskInput("");
        }}
      >
        <input
          type="text"
          value={newTaskInput}
          onChange={event => {
            setNewTaskInput(event.target.value);
          }}
        />
        <br />
        <input type="submit" value="Ajouter une tâche" />
      </form>
    </div>
  );
}

export default App;
