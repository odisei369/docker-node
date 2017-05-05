var express = require('express')
var app = express()

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URL);

app.get('/', function (req, res) {
    res.send('Hello World!')
})

app.listen(1337, function () {
    console.log('Example app listening on port 1337!')
})


var Cat = mongoose.model('Cat', { name: String });

var kitty = new Cat({ name: 'Zildjian second' });
kitty.save(function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('meow');
    }
});