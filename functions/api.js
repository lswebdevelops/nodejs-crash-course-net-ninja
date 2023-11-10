const app = require('../server'); // Adjust the path as needed

exports.handler = async (event, context) => {
  const { path, httpMethod, queryStringParameters, body } = event;

  const request = {
    method: httpMethod,
    url: path,
    query: queryStringParameters,
    body: JSON.parse(body),
  };

  const response = await new Promise((resolve) => {
    const fakeResponse = {
      status: (statusCode) => ({
        json: (data) => resolve({ statusCode, body: JSON.stringify(data) }),
      }),
      render: (view, data) => resolve({ statusCode: 200, body: JSON.stringify(data) }),
    };

    app(request, fakeResponse);
  });

  return {
    statusCode: response.statusCode,
    body: response.body,
  };
};
