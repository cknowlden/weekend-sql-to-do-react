import React from 'react';
import { deleteTask } from '../../components/TaskAPI/Task.api';
import {updateTaskCompletedStatus} from '../../components/TaskAPI/Task.api';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

function ToDoList({taskList, taskRefreshCallback}) {

    const handleClickDelete = (id) => {
        // ID item
        console.log('DELETE - taskId:', id);
        // MAKE Axios Call
        deleteTask(id)
          .then((response) => {
            taskRefreshCallback();
          })
          .catch((err) => {
            console.error('ERROR:', err);
          });
      };
    
      const handleClickToggleCompleted = (id) => {
        console.log('Updating complete status - taskId:', id);
        updateTaskCompletedStatus(id)
          .then((response) => {
            taskRefreshCallback();
          })
          .catch((err) => {
            console.error('ERROR:', err);
          });
      };

    return (
      <>  
        <header>
            <h1>To Do List</h1>
        </header>

        <Grid
        item
        xs={8}
        md={6}
        lg={3}
        >
        {taskList.map((task, dataIndex) => {
        return (
            <div 
            key={dataIndex} 
            onClick={() => handleClickToggleCompleted(task.id)}             
            className={`task ${
            task.completed ? "FALSE" : "TRUE"
            }`}
        >
                {task.completed} 
                {task.completed && <i>completed</i>}
                {task.name}
                <button onClick={(event) => handleClickDelete(task.id)}>
                    Delete
                </button>
            </div>
        );
        })}
        </Grid>
    </>
    );
}

export default ToDoList;