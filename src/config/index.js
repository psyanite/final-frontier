import { Constants } from 'expo';

const ENV = {
  development: {
    toasterUrl: 'http://192.168.1.10:3000'
  },
  stage: {
    toasterUrl: 'https://burntoast.herokuapp.com'
  },
  production: {
    toasterUrl: 'https://burntoast.herokuapp.com'
  }
};

function getEnvVars(env = '') {
  if (env === null || env === undefined || env === '') return ENV.dev;
  if (env.indexOf('development') !== -1) return ENV.development;
  if (env.indexOf('stage') !== -1) return ENV.stage;
  if (env.indexOf('production') !== -1) return ENV.production;
}

export default getEnvVars(Constants.manifest.extra.env);
