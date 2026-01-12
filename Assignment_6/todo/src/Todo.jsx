import { useState } from "react";

export default function TodoApp() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return; // prevent empty tasks

    const updatedTodos = [...todos, task.trim()].sort((a, b) =>
      a.localeCompare(b)
    );

    setTodos(updatedTodos);
    setTask(""); // clear input after adding
  };

  const deleteTask = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh"
  };

  const boxStyle = {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "20px",
    minWidth: "300px",
    textAlign: "center"
  };

  return (
    <div style={containerStyle}>
      <div style={boxStyle}>
        <h2>Todo List</h2>

        <input
          type="text"
          value={task}
          placeholder="Enter a task"
          onChange={(e) => setTask(e.target.value)}
        />

        <button onClick={addTask} style={{ marginLeft: "5px" }}>
          Add
        </button>

        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              {todo} <button onClick={() => deleteTask(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
