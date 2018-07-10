import pako from 'pako';

if (typeof atob === 'undefined') {
  global.atob = function(b64Encoded) {
    return new Buffer(b64Encoded, 'base64').toString('binary');
  };
}

function parseDescription(description) {
  let encodedData = description.match(
    /\[\]\(Planyway_Data-DO_NOT_DELETE\)\[\]\((.*)\)$/
  )[1];
  let data = pako.inflate(atob(encodedData), {
    to: 'string'
  });

  return JSON.parse(data);
}

module.exports = parseDescription;
