import axios from 'axios';

export const api = axios.create({
  baseURL: 'http:127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer Mw.X-eww7PD6xmLhsc3D52w006r4uDXHTL0SqI0Jlyf0vwx9EtR1nhSRqQXOp5z',
  },
});
