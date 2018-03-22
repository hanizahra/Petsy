const router = require('express').Router();

petsController = require('../controllers/petsController');
commentsController = require('../controllers/commentsController');
viewsController = require('../controllers/viewsController');

router.get('/', petsController.index)
router.get('/comments/:id', commentsController.getAllComments)

router.post('/', petsController.create);
router.post('/addComment', commentsController.createComment);

router.get('/:id', petsController.showOne, commentsController.getAllComments);

router.put('/:id', commentsController.updateComment);

router.delete('/:id', petsController.delete);
router.delete('/comments/:id', commentsController.deleteComment);


module.exports = router;