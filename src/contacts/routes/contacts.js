var express = require('express');
var router = express.Router();

/* GET contacts */
router.get('/:id', function(req, res, next) {
});

router.post('/', function(req, res, next) {
  console.log(req.body);
});

router.put('/:id', function(req, res, next) {
  console.log(req.body);

});

module.exports = router;
