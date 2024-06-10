var express = require('express');
var router = express.Router();


router.get('/time', function(req, res, next) {
    const currentTime = new Date().toLocaleTimeString();
    res.json({ time: currentTime });
});

// Create a new route GET /hello?key=World
// that returns a JSON {"message": "Hello World"} when the query parameter key is present
// and return HTTP 501 code with message "key query parameter is required"
// when the query parameter key is not present
router.get('/hello', function(req, res, next) {
    const { key } = req.query;
    if (!key) {
        res.status(500).json({ message: 'key query parameter is required' });
    } else {
        res.json({ message: `Hello ${key}` });
    }
});

module.exports = router;
