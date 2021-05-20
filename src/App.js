import React, { useState } from 'react';
import Input from "./components/Input";
import Task from "./components/Task";
import logo from './logo.svg';
import './App.css';


function App() {
  const [list, setList] = useState([]);

  return (
    <div className="App" style = {{ width: "800px" }}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      {list.map((task, i) => (
        <Task task = {task} setList = {setList}  index = {i} list = {list} />
      ))}
      <Task />
      <Input list = {list} setList = {setList} />
    </div>
  );
};

export default App;
