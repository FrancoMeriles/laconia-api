const api = require('@laconia/event').apigateway;

const apiGateway = async () => {
  return { api };
};

module.exports = apiGateway;