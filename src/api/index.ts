import http from './service';

const api = {
  login: ''
};

export const login = (params: any) => {
  return http({
    url: api.login,
    method: 'GET',
    params
  });
};