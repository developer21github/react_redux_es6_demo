import axios from 'axios';

export function makeAPIRequest({ path, method = 'GET', body = {}, headers = {} }) {

  const APIUrl = 'http://localhost:8080/api';
  return axios({
    url: `${APIUrl}/${path}`,
    data: body,
    headers,
    method
  })
  .then(function (response) {
    return response.data;
  })
  .catch(function (error) {
    return Promise.reject(error);
  });
}
