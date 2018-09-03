var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/whoami', function(req, res, next) {
    header = req.headers;
    ip = req.ip;
    ip = ip.split(':');
    response = {
        "ipaddress": ip[3],
        "language": header['accept-language'],
        "software": header['user-agent']
    };
    res.send(response);
});

module.exports = router;
