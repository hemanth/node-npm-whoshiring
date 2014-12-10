'use strict';
var request = require('request'),
JOBURL = 'https://partners.npmjs.com/hiring',
toShow = [];
module.exports = function(cb) {
    request(JOBURL, function(err, resp, jobs) {
        if (!err && resp.statusCode === 200) {
            cb(null, JSON.parse(jobs));
        } else {
            cb(err, null);
        }
    });
};