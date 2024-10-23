import axios from 'axios';

export const api = axios.create({
  baseURL: 'http:127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer MQ.3vFRDe95xgjPXI5fqu6SLwyodN8Y-i_54FybKi51CvkvrqbNnNDRBGrYyGYd',
  },
});
