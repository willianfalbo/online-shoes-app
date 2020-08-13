export const NODE_ENV = checkConfig(process.env.NODE_ENV);

function checkConfig(value) {
  if (!value) {
    throw Error('Make sure you have all keys set in your .env file');
  }
  return value;
}
