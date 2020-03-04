const api = require('./keys')
const request = require('../request')

class Post {
  constructor() {
    this.posts = 'posts',
    this.request = request
  }
  getPosts() {
    const url = `${api.baseURL}/${this.posts}`;
    return this.request(url);
  }

  getPost(id) {
    const url = `${api.baseURL}/${this.posts}/${id}`;
    return this.request(url);
  }
}
module.exports = Post;