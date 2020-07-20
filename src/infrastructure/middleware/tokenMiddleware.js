const tokenMiddleware = (next) => (event, LaconiaContext) => {
  const { logger } = LaconiaContext;

  const token = LaconiaContext.event.headers.Authorization;

  const err = {
    name: "token_missing",
    message: "Token Missing",
  };

  if (!token) throw err;

  logger.info("Here is the Authorization", { token });

  return next(event, LaconiaContext);
};

module.exports = tokenMiddleware;
