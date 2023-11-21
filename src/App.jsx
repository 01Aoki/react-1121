import "./App.css";
import { Routes, Route, Link, NavLink } from "react-router-dom";

import Home from "./routers/Home";
import About from "./routers/About";
import Weather from "./routers/Weather";
import Date from "./routers/Date";
import { useState } from "react";

function App() {
  const [task, setTask] = useState([]); //タスクのリストを管理するステート
  const [newTask, setNewTask] = useState(""); //新しいタスクを追加するときのステート

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };
  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTask((prevTask) => [...prevTask, newTask]);
      setNewTask("");
    }
  };
  const handleResetTask = () => setTask([]);
  return (
    <>
      <h1>todoリスト</h1>
      <ul>
        {task.map((list, index) => (
          <li key={index}>{list}</li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="新しいタスクを入力してください"
        value={newTask}
        onChange={handleChange}
      />
      <button onClick={handleAddTask}>追加</button>
      <button onClick={handleResetTask}>リセット</button>
    </>
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Navigation />}>
    //       <Route index element={<Home />} />
    //       <Route path="weather" element={<Weather />} />
    //       <Route path="dashboard" element={<Dashboard />} />
    //       <Route path="*" element={<NoMatch />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>

    /* <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/weather">Weather</Link>
        </li>
        <li>
          <Link to="/date">Date</Link> */
    /* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/date" element={<Date />} />
      </Routes> */
  );
}

export default App;
