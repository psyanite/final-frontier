import config from '../config';
import { AsyncStorage } from 'react-native';

const HOST = `${config.toasterUrl}/auth`;

// export const get = async (uri, params) => await meow(uri, 'GET', params);

export const post = async (uri, params) => await meow(uri, 'POST', params);

export const authenticateFacebookLogin = async (accessToken, profile) => {
  const uri = `${HOST}/authenticateFacebookLogin`;
  console.log(uri);
  const params = { accessToken, profile };
  return await post(uri, params);
};

const meow = async (uri, method, params) => {
  const options = {
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      dataType: 'json',
    },
    body: JSON.stringify(params),
  };
  const response = await fetch(uri, options);
  if (response.ok) {
    return await response.json();
  }
  console.log(response);
  console.log(response._bodyText);
  throw new Error(response.status);
};

export const isExpiryExpired = (expiry) => new Date(expiry * 1000) < new Date();
