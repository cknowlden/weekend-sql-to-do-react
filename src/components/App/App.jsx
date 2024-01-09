import {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';

function App () {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    //function getTasks() {
      axios.get('/api/todo').then((response) => {
        console.log(response);
        setTasks(response.data);
      }).catch((error) => {
        console.log('error in GET', error);
      });
    //}

    //getTasks();
  }, []);

  return (
  <>
    <div>
      <h1>TO DO APP</h1>
          <p>{tasks.name}</p>
          <p>{tasks.completed}</p>
    </div>
    

  </>
  );
};


  // <h3>Add New To Do</h3>
  // {/* <form onSubmit="handleSubmit(event)"> */}
  //   <label>To Do:</label><input type="text" name="" value="" id="to_do" size="50">
  //   <br />
  //   <label>Completed:</label><input type="text" name="" value="" id="completed" size="50">
  //   <br />
  //   <button>Submit</button>
  // {/* </form> */}

export default App
