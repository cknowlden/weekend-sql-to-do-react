import Grid from '@mui/material/Grid';
import React from 'react';

import ToDoItem from '../ToDoItem/ToDoItem';

function ToDoList({ taskList, taskRefreshCallback }) {
    return (
    <Grid container spacing={2}>
        {taskList.map((taskData) => {
        return (
            <ToDoItem
            key={taskData.id}
            taskData={taskData}
            taskRefreshCallback={taskRefreshCallback}
            />
        );
        })}
    </Grid>
    );
}

export default ToDoList;