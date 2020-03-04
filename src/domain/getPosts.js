const handler = async (event, { logger, postsService, api }) => {
  logger.info('Hi from the handler getPosts');
  const { req, res } = api;
  const data = await postsService.getPosts();
  
  return res({ data }, 200);
};
module.exports = handler;