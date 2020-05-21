import React from 'react';
import CreateTodo from './components/CreateTodo';
import TodoList from './components/TodoList';
import './App.css';

const tasks = [
  {
    title: 'cook',
    detail: 'use knife to cut stuff',
    status: 1,
    taskID: 1,
  },
  {
    title: 'clean house',
    detail: 'use gasoline',
    status: 0,
    taskID: 0,
  },
];

const[newTask,setNewTask] = React.useState('');
const handleNewTaskChange = event => {
  setNewTask(event.target.value);
};


function App() {
  return (
    <div className="container">
      <TodoList list={tasks}/>
      <CreateTodo inputChange={handleNewTaskChange}/>
    </div>
  );
};

export default App;
