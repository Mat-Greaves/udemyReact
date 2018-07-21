import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-builder-18d10.firebaseio.com/'
});

export default instance;
