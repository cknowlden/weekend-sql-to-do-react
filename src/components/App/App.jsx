import {useState, useEffect} from 'react';
import React from 'react';
import Header from '../Header/Header';
import AddToDo from '../AddToDo/AddToDo';
import ToDoList from '../ToDoList/ToDoList';
import { fetchList} from '../../components/TaskAPI/Task.api';
import './App.css';
import { createTheme } from '@mui/material/styles';

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
    console.log('Hi Hi');
    // api call
    refreshTasks();
  }, []);
  return (
      <div className='dashboard'>
          <Header />
          <AddToDo taskRefreshCallback={refreshTasks} />
          <ToDoList />
          {taskList.map((taskData, dataIndex) => {
        return (
          <div key={dataIndex}>
            {/* key prop needs to be a unique value */}
            <h3>{taskData.name}</h3>
            <p>{taskData.completed}</p>
          </div>
        );
      })}
      </div>
  );
}

// const theme = createTheme({
//   palette: {
//     ochre: {
//       main: '#E3D026',
//       light: '#E9DB5D',
//       dark: '#A29415',
//       contrastText: '#242105',
//     },
//   },
// });

export default App
