function handler(event) {
  var req = event.request;

  // 1. Canonical host: 301 www -> apex.
  if (req.headers.host && req.headers.host.value === 'www.sextosello.com') {
    return {
      statusCode: 301,
      statusDescription: 'Moved Permanently',
      headers: { location: { value: 'https://sextosello.com' + req.uri } }
    };
  }

  // 2. Pretty URL -> exported flat file.
  var uri = req.uri;
  if (uri.endsWith('/')) {
    req.uri += 'index.html';
  } else {
    var last = uri.substring(uri.lastIndexOf('/') + 1);
    if (last.indexOf('.') === -1) { req.uri += '.html'; }
  }
  return req;
}
