/**
 * This will pipe infinity activity phrases to stdout
 * You may want to `node example.js | more`
 * The system will beep whenever phrasing occurs
 */
var through = require('through2');

// infinity activities
require('stream-cycle')(require('activity-mocks').toArray())
  // phrase em
  .pipe(through.obj(function (chunk, enc, next) {
    // beep so you know when work goes down
    process.stderr.write("\x07");
    next(null, require('activity-phraser').phrase(chunk));
  }))
  // join with newlines
  .pipe(through.obj(function (chunk, enc, next) {
    next(null, chunk + '\n');
  }))
  // stdout
  .pipe(process.stdout)
  .on('error', function () {
    process.exit();
  });
