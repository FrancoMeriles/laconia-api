const laconia = require('@laconia/core');
// Lambda
const getPosts = require('../domain/getPosts');
const getPost = require('../domain/getPost');
// Dependency
const postsService = require('../infraestructure/dependencies/postsService');
const apiGateway = require('../infraestructure/dependencies/apiGateway');
const logger = require('../infraestructure/dependencies/loggy');

module.exports = {
  getPost: laconia(getPost).register(logger).register(postsService).register(apiGateway),
  getPosts: laconia(getPosts).register(logger).register(postsService).register(apiGateway),
}