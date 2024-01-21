import { useEffect, useState } from 'react';
import React from 'react';
import Header from '../Header/Header';
import AddToDo from '../AddToDo/AddToDo';
import ToDoList from '../ToDoList/ToDoList';
import { fetchList } from '../../components/TaskAPI/Task.api';
// import { deleteTask } from '../../components/TaskAPI/Task.api';
// import {updateTaskCompletedStatus} from '../../components/TaskAPI/Task.api';
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
    // body of effect
    // console.log('Hi Hi');
    // api call
    refreshTasks();
  }, []);

  // const handleClickDelete = (id) => {
  //   // ID item
  //   console.log('DELETE - taskId:', id);
  //   // MAKE Axios Call
  //   deleteTask(id)
  //     .then((response) => {
  //       refreshTasks();
  //     })
  //     .catch((err) => {
  //       console.error('ERROR:', err);
  //     });
  // };

  // const handleClickToggleCompleted = (id) => {
  //   console.log('Updating complete status - taskId:', id);
  //   updateTaskCompletedStatus(id)
  //     .then((response) => {
  //       refreshTasks();
  //     })
  //     .catch((err) => {
  //       console.error('ERROR:', err);
  //     });
  // };

  return (
      <div className='dashboard'>
          <Header />
          <AddToDo taskRefreshCallback={refreshTasks} />
          <ToDoList 
            taskList={taskList} 
            taskRefreshCallback={refreshTasks}
          />
      </div>
  );
}


export default App
