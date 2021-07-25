var assert = require('assert');

$http.post('http://httpbin.org/post',
  // Post data
  {
    json: {
      widgetType: 'gear',
      widgetCount: 10
    }
  },
  // Callback
  function (err, response, body) {
    assert.equal(response.statusCode, 200, 'Expected a 200 OK response');

    console.log('Response:', body.json);
    assert.equal(body.json.widgetType, 'gear', 'Expected a gear widget type');
    assert.equal(body.json.widgetCount, 10, 'Expected 10 widgets');
  }
);
