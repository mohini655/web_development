console.log("hello world");
var slugify = require('slugify')

let a = slugify('mohini lodhi') // some-string
console.log(a);
// if you prefer something other than '-' as separator
let b = slugify('some string', '&')  // some_string
console.log(b);