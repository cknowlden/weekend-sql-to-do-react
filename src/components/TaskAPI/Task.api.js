import axios from 'axios';

export const fetchList = () => {
  // axios GET call
  return axios.get('/api/task');
};

export const postTask = (taskData) => {
  return axios.post('/api/task', taskData);
};