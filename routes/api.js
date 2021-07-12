var express = require('express');
var router = express.Router();

/* GET api page. */
router.get('/', async function(req, res, next) {
    res.json({ message: "Hello from server!" });
  });

  

module.exports = router;