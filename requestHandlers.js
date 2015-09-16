function start() {
  console.log("Request handler 'START' was called");
  return "Hello Start";
}
function upload() {
  console.log("Request handler 'UPLOAD' was called");
  return "Hello Upload";
}

exports.start = start;
exports.upload = upload;
