const Post = require('../httpServices/postService/Post');
const postInstance = ({ logger }) => {
  logger.info('Hi from postService');
  const postsService = new Post();
  return { postsService }
};
module.exports = postInstance;