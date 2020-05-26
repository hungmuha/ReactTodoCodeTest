import React,{useState} from 'react';
import CreateTodo from './components/CreateTodo';
import TodoList from './components/TodoList';
import './App.css';

const Task = function(title) {
  let randomNum = Math.floor(Math.random()*1000*7).toString();

  this.title = title;
  this.complete = false;
  this.taskID = randomNum.concat('-',Date.now());
}
const TaskList = [
  {
    title: 'cook',
    complete: true,
    taskID: 1,
  },
  {
    title: 'clean house',
    complete: false,
    taskID: 0,
  },
];

const App = () => {
  
  const [newInput, setNewInput] = useState('');
  const [tasks,setTasks] = useState(TaskList);
  const handleInputChange = event => {
    setNewInput(event.target.value);
  };
  const handleNewtaskSubmit = event => {
    let newTask = new Task(newInput);
    setTasks([...TaskList,newTask]);
    setNewInput('');
    event.preventDefault();
  };
  const removeTask = item => {
    let newTaskList = tasks.filter(task => task.taskID !== item.taskID);
    setTasks(newTaskList);
  };
  const toggleStatus = item => {
    item.complete = !item.complete;
    let newTaskList = tasks.map((task) => {
      return task.taskID === item.taskID ? item : task;
    });
    setTasks(newTaskList);
  }

  return (
    <section className="container">
      <TodoList list={tasks} removeTask={removeTask} changeStatus={toggleStatus}/>
      <CreateTodo 
        inputValue={newInput} 
        inputChange={handleInputChange} 
        submitNewTask={handleNewtaskSubmit}
      />
    </section>
  );
};

export default App;
