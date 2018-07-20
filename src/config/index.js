import { Constants } from 'expo';

const ENV = {
  dev: {
    toasterUrl: 'http://192.168.1.10:3000'
  },
  stage: {
    toasterUrl: 'https://staging.burntoast.com'
  },
  prod: {
    toasterUrl: 'https://burntoast.com'
  }
};

function getEnvVars(env = '') {
  if (env === null || env === undefined || env === '') return ENV.dev;
  if (env.indexOf('dev') !== -1) return ENV.dev;
  if (env.indexOf('stage:') !== -1) return ENV.stage;
  if (env.indexOf('prod') !== -1) return ENV.prod;
}

export default getEnvVars(Constants.manifest.extra.env);
