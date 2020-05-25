import axios from 'axios';

const instace = axios.create({
  baseURL: 'http://anibook-backend.herokuapp.com',
});

export default instace;
