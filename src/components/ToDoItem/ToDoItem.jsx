import React from 'react';
import { deleteTask } from '../../components/TaskAPI/Task.api';
import { updateTaskCompletedStatus } from '../../components/TaskAPI/Task.api';
import { MuiCheckbox } from '../Checkbox/MuiCheckbox';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { grey } from '@mui/material/colors';
// import { theme } from '../CreateTheme/CreateTheme';
// import { createTheme, ThemeProvider } from '@mui/material/styles';

// const theme = createTheme({
//   palette: {
//     primary: {
//       light: '#F2E4DC',
//       main: '#A6806A',
//       dark: '#A6806A',
//       contrastText: '#fff',
//     },
//     secondary: {
//       light: '#D9C1B4',
//       main: '#f44336',
//       dark: '#0D0D0D',
//       contrastText: '#000',
//     },
//   },
// });

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
      {/* <ThemeProvider theme={theme}> */}
      <Grid item xs={8} md={7} lg={6}>
        <Box
          borderRadius={9}
          border={
            taskData.completed
              ? '3px solid rgb(113, 232, 48)'
              : `3px solid ${grey[900]}`
          }
          sx={{
            bgcolor: 'primary.light',
            margin: '10px',
            padding: '10px',
          }}
          onClick={() =>
            handleClickToggleCompleted(taskData.id, taskData.completed)
          }
        >
          <MuiCheckbox />
          {taskData.name}
          <Button
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
      {/* </ThemeProvider> */}
    </>
  );
}

export default ToDoItem;
