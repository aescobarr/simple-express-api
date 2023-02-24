var express = require('express');
var router = express.Router();
var debug = require('debug')('express-app:server');
var util = require('../helpers/functions');
const { body, validationResult } = require('express-validator');

/* GET home page. */
router.post('/', 
  body('a').isInt(),
  body('b').isInt(),
  function(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }  
    var result = util.sum(req.body.a, req.body.b);
    res.json({'result':result});
});

module.exports = router;
