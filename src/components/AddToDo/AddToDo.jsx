import React from 'react';
import { useState } from 'react';

import { postTask } from '../../components/TaskAPI/Task.api';

function AddToDo(props) {
    const [nameValue, setNameValue] = useState('');
    const [completedValue, setCompletedValue] = useState('');
  
    // const handleChangeOfOrigin = (event) => {
    //   setOriginValue(event.target.value);
    // };
  
    const handleSubmitTask = (event) => {
      event.preventDefault();
      console.log('Values for SUBMIT:', {
        name: nameValue,
        completed: completedValue,
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
            {/* <p>{nameValue}</p> */}
            {/* <label>
              <span>Origin:</span>
              <input
                id="origin"
                onChange={handleChangeOfOrigin}
                value={originValue}
              />
            </label> */}
            <button type="submit">Add</button>
        </form>
    </>    
    );
}

export default AddToDo;