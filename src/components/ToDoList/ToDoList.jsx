import React from 'react';
import { fetchList } from '../../components/TaskAPI/Task.api';
import { postTask } from '../../components/TaskAPI/Task.api';
import { deleteTask } from '../../components/TaskAPI/Task.api';
import {updateTaskCompletedStatus} from '../../components/TaskAPI/Task.api';


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

        <div>
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
        </div>
    </>
    );
}

export default ToDoList;