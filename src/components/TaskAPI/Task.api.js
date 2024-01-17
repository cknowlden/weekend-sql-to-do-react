import axios from 'axios';

export const fetchList = () => {
  // axios GET call
    return axios.get('/api/todo');
};

export const postTask = (taskData) => {
    return axios.post('/api/todo', taskData);
};

// export const updateTask = (taskData) => {
//     return axios.put('/api/todo/:id', taskData);
// };

// export const deleteTask = (taskData) => {
//     return axios.put('/api/todo/:id', taskData);
// };