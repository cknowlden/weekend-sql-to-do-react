import React from 'react';
import { deleteTask } from '../../components/TaskAPI/Task.api';
import { updateTaskCompletedStatus } from '../../components/TaskAPI/Task.api';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { grey } from '@mui/material/colors';
import './ToDoItem.module.css';

function ToDoItem({ taskData, taskRefreshCallback }) {
  // console.log('taskData', taskData);

  const handleClickToggleCompleted = (id, completed) => {
    const booleanStatus = !completed;
    console.log('booleanStat', booleanStatus);
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
      <Grid item xs={8} md={7} lg={6}>
        <Box
          borderRadius={2}
          border={
            taskData.completed
              ? '3px solid rgb(113, 232, 48)'
              : `3px solid ${grey[900]}`
          }
          sx={{
            bgcolor: 'primary.light',
            margin: '10px',
            padding: '10px',
            display: 'flex',
            justifyContent: 'space-between',
            // align: 'center',
          }}
          onClick={() =>
            handleClickToggleCompleted(taskData.id, taskData.completed)
          }
        >
          <Checkbox />
          {taskData.name}
          <Button
            // className=".task-text"
            variant="outlined"
            color="primary"
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
