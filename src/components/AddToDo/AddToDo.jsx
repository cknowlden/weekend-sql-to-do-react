import React from 'react';
import { useState } from 'react';
import { postTask } from '../../components/TaskAPI/Task.api';
import Button from '@mui/material/Button';
import styles from '../AddToDo/AddToDo.module.css';
import Box from '@mui/material/Box';

function AddToDo(props) {
  const [nameValue, setNameValue] = useState('');

  const handleSubmitTask = (event) => {
    event.preventDefault();
    console.log('Values for SUBMIT:', {
      name: nameValue,
      // completed: completedValue,
    });

    // post data
    postTask({
      name: nameValue,
      // completed: completedValue,
    })
      .then((response) => {
        // on success fetchData
        props.taskRefreshCallback();

        setNameValue('');
        //   setOriginValue('');
      })
      .catch((err) => {
        console.error('ERROR:', err);
      });
  };
  return (
    <>
      <Box
        borderRadius={2}
        border={'primary.dark'}
        // spacing={'spacing'}
        sx={{
          bgcolor: 'secondary.light',
          margin: '10px',
          padding: '8px',
          display: 'flex',
          justifyContent: 'space-between',
          margin: 5,
        }}
      >
        <header className={styles.header}>
          <h2>Add a To Do</h2>
        </header>

        <form className={styles.input} onSubmit={handleSubmitTask}>
          <label className="input">
            <input
              id="name"
              onChange={(event) => setNameValue(event.target.value)}
              value={nameValue}
            />
          </label>
          <Button type="submit" variant="contained" size="small">
            ADD
          </Button>
        </form>
      </Box>
    </>
  );
}

export default AddToDo;
