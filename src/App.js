import React,{useState} from 'react';
import CreateTodo from './components/CreateTodo';
import TodoList from './components/TodoList';
import './App.css';

const App = () => {
  const Task = function(title) {
    let randomNum = Math.floor(Math.random()*1000*7).toString();
  
    this.title = title;
    this.status = 0;
    this.taskID = randomNum.concat('-',Date.now());
  }
  const TaskList = [
    {
      title: 'cook',
      status: 1,
      taskID: 1,
    },
    {
      title: 'clean house',
      status: 0,
      taskID: 0,
    },
  ];

  const [newInput, setNewInput] = useState('');
  const [tasks,setTasks] = useState(TaskList);
  const handleInputChange = event => {
    setNewInput(event.target.value);
  };
  const handleNewtaskSubmit = event => {
    let newTask = new Task(newInput);
    setTasks([...TaskList,newTask]);
    event.preventDefault();
  }


  return (
    <div className="container">
      <TodoList list={tasks}/>
      <CreateTodo 
        inputValue={newInput} 
        inputChange={handleInputChange} 
        submitNewTask={handleNewtaskSubmit}
      />
    </div>
  );
};

export default App;
