const router = require('express').Router();

petsController = require('../controllers/petsController');
commentsController = require('../controllers/commentsController');
viewsController = require('../controllers/viewsController');

router.get('/', petsController.index); //commentsController.getAllComments

router.post('/add', petsController.create);
router.post('/comments/add', commentsController.createComment);

router.get('/:id', petsController.showOne, commentsController.getAllComments);

router.put('/:id', commentsController.updateComment);

router.delete('/:id', petsController.delete);
router.delete('/comments/:id', commentsController.deleteComment);


module.exports = router;