import "./App.css";
import React, { useState } from "react";
import NavBar from "./components/NavBar";
import TaskList from "./components/TaskList";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./css/style.css";

let idAcc = 0;
const generateId = () => {
  idAcc += 1;
  return idAcc;
};

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title, state) => {
    const newtask = {
      id: generateId(),
      title,
      state,
    };
    setTasks((existingTasks) => {
      return [...existingTasks, newtask];
    });
  };

  const updateTask = (id, title, state) => {
    console.log("Setando tasks");
    setTasks((existingTasks) => {
      return existingTasks.map((task) => {
        if (task.id === id) return { ...task, title, state };
        else return task;
      });
    });
  };

  return (
    <>
      <div className="App">
        <NavBar />
        <div className="container">
          <div className="row">
            <TaskList
              title="Pendente"
              onAddTask={addTask}
              tasks={tasks}
              onTaskUpdate={updateTask}
            />
            {/* <TaskList title="Em progresso" />
            <TaskList title="Completo" /> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
