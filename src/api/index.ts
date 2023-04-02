import http from './service';

const api = {
  login: ''
};

export const login = (params: string) => {
  return http({
    url: api.login,
    method: 'GET',
    params
  });
};