import React from 'react';
import { deleteTask } from '../../components/TaskAPI/Task.api';
import {updateTaskCompletedStatus} from '../../components/TaskAPI/Task.api';
import {MuiCheckbox} from '../Checkbox/MuiCheckbox'
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { purple } from '@mui/material/colors';

function ToDoItem({taskData, taskRefreshCallback}) {
    // console.log('taskData', taskData);

    const handleClickToggleCompleted = (id, completed) => {
        const booleanStatus = !completed
        console.log('booleanStat', booleanStatus)
        console.log('Updating complete status - taskId:', id);
        updateTaskCompletedStatus(id, completed)
            .then((response) => {
            taskRefreshCallback();
            })
            .catch((err) => {
            console.error('ERROR:', err);
            });
    };

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
    
    return (
    <>  
        {/* <Grid
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
        </Grid> */}

        <Grid
        item
        xs={8}
        md={6}
        lg={3}
        onClick={() => handleClickToggleCompleted(taskData.id, taskData.completed)} 
        >
        <Box
            borderRadius={9}
            border={
            taskData.completed
                ? '3px solid rgb(113, 232, 48)'
                : `3px solid ${purple[500]}`
            }
            sx={{
            margin: '10px',
            padding: '10px',
            }}
        >
            <MuiCheckbox />
            {/* {taskData.completed && <i>completed</i>} */}
            
            {taskData.name}
            <Button
            variant="contained"
            color="secondary"
            size="small"
            onClick={(event) => {
                event.preventDefault();
                handleClickDelete(taskData.id);
            }}
            >
            Delete
            </Button>
        </Box>
        </Grid>
    </>
    );
}

export default ToDoItem;