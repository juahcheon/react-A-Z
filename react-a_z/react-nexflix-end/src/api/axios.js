import axios from 'axios';

const instance = axios.create({
  baseURL: 'hrrps://api.themoviedb.org/3',
  params:{
    api_key: '6251dbccb2e6f679fc419fb4857fccea',
    language: 'ko-KR'
  },
});

export default instance;