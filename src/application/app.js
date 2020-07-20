const laconia = require("@laconia/core");

// Lambda
const getPosts = require("../domain/getPosts");
const getPost = require("../domain/getPost");

// Dependency
const postsService = require("../infrastructure/dependencies/postsService");
const apiGatewayEventParser = require("../infrastructure/dependencies/apiGateway");
const logger = require("../infrastructure/dependencies/loggy");

// Adapter
const adapter = require("../infrastructure/adapter/adapterApi");

// Token Middleware
const tokenMiddleware = require("../infrastructure/middleware/tokenMiddleware");

module.exports = {
  getPost: laconia(getPost)
    .register(logger)
    .register(postsService)
    .register(apiGatewayEventParser),
  getPosts: laconia(adapter(tokenMiddleware(getPosts)))
    .register(logger)
    .register(postsService)
    .register(apiGatewayEventParser),
};
