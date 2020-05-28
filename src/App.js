import React,{useState,useEffect} from 'react';
import CreateTodo from './components/CreateTodo';
import TodoList from './components/TodoList';
import SearchBar from './components/SearchBar';
import './App.css';

const App = () => {
  //custom hook to save the objects in local state
  const useCustomLocalStateHook = (key,initialState) => {
    const [value,setValue] = useState(JSON.parse(localStorage.getItem(key))||initialState);

    useEffect(() => {
      localStorage.setItem(key,JSON.stringify(value));
    },[key,value]);
    
    return [value,setValue];
  }

  const [searchTerm, setNewSearch] = useState('');
  const [tasks,setTasks] = useCustomLocalStateHook('savedTask',[]);

  //this function is used to swap 2 elements in an array
  const swap = function(arr,idx1,idx2) {
    [arr[idx1],arr[idx2]] = [arr[idx2],arr[idx1]];
    return arr;
  }

  const searchedTask = tasks.filter(task => 
    task.title.toLowerCase().includes(searchTerm.toLowerCase())  
  );

  const handleNewtaskSubmit = (newInput) => {
    const randomNum = Math.floor(Math.random()*1000*7).toString();
    let newTask = {
      title: newInput,
      complete: false,
      taskID: randomNum.concat('-',Date.now())
    };
    const newTaskList = [...tasks, newTask];
    setTasks(newTaskList);
  };
  const removeTask = item => {
    let newTaskList = tasks.filter(task => task.taskID !== item.taskID);
    setTasks(newTaskList);
  };
  //to change task status
  const toggleStatus = item => {
    item.complete = !item.complete;
    let newTaskList = tasks.map((task) => {
      return task.taskID === item.taskID ? item : task;
    });
    setTasks(newTaskList);
  };
  //change task title
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
    <section className="container mt-5">
      <div className="row justify-content-center">
        <div className="card shadow col-md-6">
          <div className="card-body">
            <h2 className="card-title text-uppercase">To Do List</h2>
            <SearchBar
              searchValue = {searchTerm}
              searchChange = {(e) => setNewSearch(e.target.value)}
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
              submitNewTask={handleNewtaskSubmit}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;
