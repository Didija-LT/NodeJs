var express = require('express');
const router = require('express').Router();
const usersRepo = require('../repositories/users')
/* GET users listing. */
router.get('/', async function(req, res, next) {
  res.send(await usersRepo.getAllUsers());
});

router.get('/:id', async function(req, res, next) {
  res.send(await usersRepo.getUser(req.params.id))
});

module.exports = router;
