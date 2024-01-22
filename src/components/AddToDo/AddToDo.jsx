import React from 'react';
import { useState } from 'react';
import { postTask } from '../../components/TaskAPI/Task.api';
import Button from '@mui/material/Button';
import { createTheme } from '@mui/material/styles';

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
        <header>
            <h2>Add a To Do</h2>
        </header>

        <form onSubmit={handleSubmitTask}>
            <label>
              <span>Task:</span>
              <input
                id="name"
                onChange={(event) => setNameValue(event.target.value)}
                value={nameValue}
              />
            </label>
            <Button type="submit" variant="contained" size="small">ADD</Button>
        </form>
    </>    
    );
}

export default AddToDo;