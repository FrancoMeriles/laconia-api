const apigateway = require("@laconia/adapter-api").apigateway;

const adapter = apigateway({
  inputType: "params",
  errorMappings: new Map([
    [
      ".*bad_request",
      (error) => ({ statusCode: 400, body: { msg: error.message } }),
    ],
    [
      ".*not_found",
      (error) => ({ statusCode: 404, body: { msg: error.message } }),
    ],
    [
      ".*token_missing",
      (error) => ({ statusCode: 403, body: { msg: error.message } }),
    ],
  ]),
});

module.exports = adapter;
