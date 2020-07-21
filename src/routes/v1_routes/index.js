'use strict';
const router = require('express').Router();
const list = require('../../app/controller/list');

// add route
router.get('/lists', list.getLists);
router.put('/lists', list.updateLists);

module.exports = router
