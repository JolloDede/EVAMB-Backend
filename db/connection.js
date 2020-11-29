const monk = require('monk');
const db = monk('localhost/EVAMB');

module.exports = db;