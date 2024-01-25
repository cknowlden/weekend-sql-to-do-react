// import Grid from '@mui/material/Grid';
import './ToDoList.module.css';
import React from 'react';
import Box from '@mui/material/Box';

import ToDoItem from '../ToDoItem/ToDoItem';

function ToDoList({ taskList, taskRefreshCallback }) {
  return (
    <>
      <Box
        borderRadius={2}
        border={'primary.main'}
        sx={{
          bgcolor: 'secondary.light',
          margin: '10px',
          padding: '14px',
        }}
      >
        {/* <Grid container spacing={2}> */}
        {taskList.map((taskData) => {
          return (
            <ToDoItem
              // <ToDoItem className={style['color-item']}
              key={taskData.id}
              taskData={taskData}
              taskRefreshCallback={taskRefreshCallback}
            />
          );
        })}
        {/* </Grid> */}
      </Box>
    </>
  );
}

export default ToDoList;
