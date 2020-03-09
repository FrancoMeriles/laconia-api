const fetch = require('node-fetch');
const request = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then(data => data)
    .catch(err => err);
}
module.exports = request