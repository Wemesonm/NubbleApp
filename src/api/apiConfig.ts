import axios from 'axios';

const token = 'MQ.uh-hlTT7BqLAxBH_xyDVxxwiGqTAyJAKmTbboZkafnwNyJO8koVYmSueW67V';

export const api = axios.create({
  baseURL: 'http:127.0.0.1:3333/',
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
