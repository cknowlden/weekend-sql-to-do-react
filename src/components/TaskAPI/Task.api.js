import axios from 'axios';

export const fetchList = () => {
  // axios GET call
    return axios.get('/api/task');
};

export const postTask = (taskData) => {
    return axios.post('/api/task', taskData);
};

// export const updateTask = (taskData) => {
//     return axios.put('/api/task/:id', taskData);
// };

// export const deleteTask = (taskData) => {
//     return axios.put('/api/task/:id', taskData);
// };