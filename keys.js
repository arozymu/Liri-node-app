// console.log('this is loaded);
var keys = require("./keys.js");

exports.spotify = {
    id: ProcessingInstruction.env.SPOTIFY_ID,
    secret: ProcessingInstruction.env.SPOTIFY_SECRET
};