function start() {
  console.log("Request handler 'START' was called");

  function sleep(milliSeconds) {
    // simulate a slow blocking process like grabbing an API etc
    var startTime = new Date().getTime();
    while (new Date().getTime() < startTime + milliSeconds);
  }
  sleep(5000);
  // this actually blocks up the upload page as well if it is called
  // at the same time
  return "Hello Start";

}
function upload() {
  console.log("Request handler 'UPLOAD' was called");
  return "Hello Upload";
}

exports.start = start;
exports.upload = upload;
