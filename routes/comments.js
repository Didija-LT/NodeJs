const router = require('express').Router();
const commentsRepo = require('../repositories/comments')


/* GET users listing */
router.get('/all', async function(req, res, next) {
  res.send(await commentsRepo.getAllComments());
});

router.get('/:id', async function(req, res, next) {
  res.send(await commentsRepo.getComment(req.params.id))
});

router.get('/', async function(req, res, next) {
  res.send(await commentsRepo.getComments(req.params.offset,req.params.limit));
});


module.exports = router;