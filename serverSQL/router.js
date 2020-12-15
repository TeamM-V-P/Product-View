const router = require('express').Router();
const controller = require('./controller.js');

router
  .route('/items')
  .post(controller.post)


router
  .route('/items:id')
  .get(controller.get)
  .delete(controller.delete)
  .put(controller.put)


module.exports = router;