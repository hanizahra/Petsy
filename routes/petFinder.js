const router = require('express').Router();

petsController = require('../controllers/petsController');
commentsController = require('../controllers/commentsController');

router.get('/', petsController.index)
router.get('/comments/:id', commentsController.getAllCommentsForThisPet)

router.post('/', petsController.create);
router.post('/addComment', commentsController.createComment);

router.get('/:id', petsController.showOne);

router.put('/comment/:id', commentsController.updateComment);

router.delete('/:id', petsController.delete);
router.delete('/comment/:id', commentsController.deleteComment);


module.exports = router;