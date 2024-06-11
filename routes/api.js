var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');

router.get('/time', function(req, res, next) {
    const currentTime = new Date().toLocaleTimeString();
    res.json({ time: currentTime });
});

router.get('/hello', function(req, res, next) {
    const { key } = req.query;
    if (!key) {
        res.status(500).json({ message: 'key query parameter is required' });
    } else {
        res.json({ message: `Hello ${key}` });
    }
});


router.get('/countries', function(req, res, next) {
    fs.readFile(path.join(__dirname, '../data/countries.json'), 'utf8', (err, data) => {
        if (err) {
            res.status(500).json({ message: 'Error reading countries data' });
            return;
        }
        res.json(JSON.parse(data));
    });
});

module.exports = router;
