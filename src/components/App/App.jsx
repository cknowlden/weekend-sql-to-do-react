import { useEffect, useState } from 'react';
import React from 'react';
import Header from '../Header/Header';
import AddToDo from '../AddToDo/AddToDo';
import ToDoList from '../ToDoList/ToDoList';
import { fetchList } from '../../components/TaskAPI/Task.api';
import './App.css';
import Grid from '@mui/material/Grid';
import image from '../../../public/images/gray_leaves.jpg';

function App() {
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
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        width: '100vw',
        height: '100vh',
      }}
    >
      <div className="dashboard">
        <Header />
        <AddToDo taskRefreshCallback={refreshTasks} />
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <ToDoList taskList={taskList} taskRefreshCallback={refreshTasks} />
        </div>
      </div>
    </div>
  );
}

export default App;
