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

router.get('/vms', function(req, res, next) {
    const filePath = path.join(__dirname, '../data/vms.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            res.status(500).json({ message: 'Error reading VMs data' });
        } else {
            try {
                const jsonData = JSON.parse(data);
                res.json(jsonData);
            } catch (parseError) {
                res.status(500).json({ message: 'Error parsing VMs data' });
            }
        }
    });
});


module.exports = router;
