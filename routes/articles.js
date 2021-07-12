const router = require('express').Router();
const articlesRepo = require('../repositories/articles');

/* GET articles listing. */


router.get('/all', async function(req, res, next) {
  res.send(await articlesRepo.getAllArticles())
});

router.get('/:id', async function(req, res, next) {
  res.send(await articlesRepo.getArticle(req.params.id))
});

router.get('/', async function(req, res, next) {
  
  res.send(await articlesRepo.getArticles())
});


// router.get('/', async function(req, res, next) {
//   const limit=req.query.offset || 5;

//   const articles= await Article.find(limit);

//   res.send(articles,limit);
// });
module.exports = router;