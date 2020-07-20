const handler = async (event, { logger, postsService, api }) => {
  logger.info("Hi from the handler getPosts");
  const { req, res } = api;
  const response = await postsService.getPosts();
  return res(response, 200);
};
module.exports = handler;
