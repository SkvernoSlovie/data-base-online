import { Method } from 'types';

const queryCreator = (method: Method, url: string, payload?: Record<string, unknown>) => ({
  method,
  url,
  headers: {
    authorization: `Bearer ${localStorage.getItem('token')}`,
  },
  payload,
});

export default queryCreator;
