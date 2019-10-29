const router = require('express').Router();

const { getUsers, getUser } = require('../services/users.service');

router.get('/', getUsers);
router.get('/:id', getUser);

module.exports = router;
