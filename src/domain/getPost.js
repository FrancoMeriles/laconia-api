const handler = async (event, { logger, postsService, api }) => {
  logger.info("Hi from the handler getPost");
  const { req, res } = api;
  const request = req(event);

  const data = await postsService.getPost(request.params.id);

  return res({ data }, 200);
};
module.exports = handler;
