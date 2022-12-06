"use strict";

const hbjs = require('handbrake-js');
hbjs.spawn({
  input: 'movie.mkv',
  output: 'movie.mp4'
}).on('error', err => {
  console.log(err);
}).on('progress', progress => {
  console.log('Percent complete: %s, ETA: %s', progress.percentComplete, progress.eta);
});