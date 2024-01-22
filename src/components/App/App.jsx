import { useEffect, useState } from 'react';
import React from 'react';
import Header from '../Header/Header';
import AddToDo from '../AddToDo/AddToDo';
import ToDoList from '../ToDoList/ToDoList';
import ToDoItem from '../ToDoItem/ToDoItem';
import { fetchList } from '../../components/TaskAPI/Task.api';
import './App.css';



function App () {
  const [taskList, setTaskList] = useState([]);

  const refreshTasks = () => {
    const taskPromise = fetchList();
    taskPromise
      // success
      .then((response) => {
        console.log('SERVER DATA:', response);
        setTaskList(response.data);
      })
      // failure
      .catch((err) => {
        console.error('ERROR:', err);
      });
  };

  // initial load of component
  useEffect(() => {
    // api call
    refreshTasks();
  }, []);

  return (
      <div className='dashboard'>
          <Header />
          <AddToDo taskRefreshCallback={refreshTasks} />
          <ToDoList 
            taskList={taskList} 
            taskRefreshCallback={refreshTasks}
          />
          {/* <ToDoItem 
            taskList={taskList} 
            taskRefreshCallback={refreshTasks}
          /> */}
      </div>
  );
}


export default App
