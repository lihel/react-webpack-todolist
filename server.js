/**
 * Created by lmy on 17-8-10.
 */
var express = require('express');
var app = express();

app.use(express.static('./'));

app.listen(8080, function () {
    console.log('Example app listening on port 8080!');
});
