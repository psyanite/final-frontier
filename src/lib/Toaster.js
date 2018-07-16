import graphqlify from 'graphqlify';
import config from '../config/index.js';

const HOST = `${config.toasterUrl}/graphql`;

export default class Toaster {

  static get = async (query) => {
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      dataType: 'json',
    };

    const options = {
      method: 'POST',
      headers,
      body: JSON.stringify({
        query: graphqlify(query),
      }),
    };

    const response = await fetch(`${HOST}`, options);
    if (response.ok) {
      const { data } = await response.json();
      return data;
    }
    console.log(response);
    console.log(response._bodyText);
    throw new Error(response.status);
  }

}
