import React,{useState,useEffect} from 'react';
import CreateTodo from './components/CreateTodo';
import TodoList from './components/TodoList';
import SearchBar from './components/SearchBar';
import './App.css';

const swap = function(arr,idx1,idx2) {
  [arr[idx1],arr[idx2]] = [arr[idx2],arr[idx1]];
  return arr;
}
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
const useCustomLocalState = (key,initialState) => {
  const [value,setValue] = useState(JSON.parse(localStorage.getItem(key))||initialState);

  useEffect(() => {
    localStorage.setItem(key,JSON.stringify(value));
  },[key,value]);
  
  return [value,setValue];
}

const App = () => {
  const [newInput, setNewInput] = useState('');
  const [searchTerm, setNewSearch] = useState('');
  const [tasks,setTasks] = useCustomLocalState('savedTask',TaskList);
  const handleSearchChange = event => {
    setNewSearch(event.target.value);
  }
  const searchedTask = tasks.filter(task => 
    task.title.toLowerCase().includes(searchTerm.toLowerCase())  
  );

  const handleInputChange = event => {
    setNewInput(event.target.value);
  };
  const handleNewtaskSubmit = event => {
    let newTask = new Task(newInput);
    setTasks([...tasks,newTask]);
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
  };
  const changeTaskTitle = (event,item) => {
     item.title = event.target.value;
     let newTaskList = tasks.map((task) => {
      return task.taskID === item.taskID ? item : task;
    });
    setTasks(newTaskList);
  }
  const moveUp = item => {
    let itemIndex = tasks.indexOf(item);
    if(itemIndex > 0) {
      let newTaskList = swap([...tasks],itemIndex, itemIndex-1);
      setTasks(newTaskList);
    }
  };
  const moveDown = item => {
    let itemIndex = tasks.indexOf(item);
    if(itemIndex < tasks.length - 1) {
      let newTaskList = swap([...tasks],itemIndex, itemIndex+1);
      setTasks(newTaskList);
    }
  };
  const moveTop = item => {
    let itemIndex = tasks.indexOf(item);
    if(itemIndex > 0) {
      let newTaskList = swap([...tasks],itemIndex, 0);
      setTasks(newTaskList);
    }
  }
  const moveBottom = item => {
    let itemIndex = tasks.indexOf(item);
    if(itemIndex < tasks.length - 1) {
      let newTaskList = swap([...tasks],itemIndex, tasks.length - 1);
      setTasks(newTaskList);
    }
  }

  return (
    <section className="container row justify-content-center ">
      <div className="col-sm-10">
        <div className="card shadow">
          <div className="card-body">
            <h2 className="card-title text-uppercase">To Do List</h2>
            <SearchBar
              searchValue = {searchTerm}
              searchChange = {handleSearchChange}
            />
            <TodoList 
              list={searchedTask}
              removeTask={removeTask} 
              changeStatus={toggleStatus}
              changeTaskTitle ={changeTaskTitle}
              moveUp={moveUp}
              moveDown={moveDown}
              moveTop = {moveTop}
              moveBottom = {moveBottom}
            />
            <CreateTodo 
              inputValue={newInput} 
              inputChange={handleInputChange} 
              submitNewTask={handleNewtaskSubmit}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;
