import axios from 'axios';

export const fetchList = () => {
  // axios GET call
    return axios.get('/api/todo');
};

export const postTask = (taskData) => {
    return axios.post('/api/todo', taskData);
};

export const updateTaskCompletedStatus = (taskId) => {
    return axios.put(`/api/todo/${taskId}`);
};

export const deleteTask = (taskId) => {
  return axios.delete(`/api/todo/${taskId}`);
};