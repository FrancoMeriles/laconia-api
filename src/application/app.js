const laconia = require('@laconia/core');
// Lambda
const getPosts = require('../domain/getPosts');
const getPost = require('../domain/getPost');
// Dependency
const postsService = require('../infrastructure/dependencies/postsService');
const apiGateway = require('../infrastructure/dependencies/apiGateway');
const logger = require('../infrastructure/dependencies/loggy');

module.exports = {
  getPost: laconia(getPost).register(logger).register(postsService).register(apiGateway),
  getPosts: laconia(getPosts).register(logger).register(postsService).register(apiGateway),
}