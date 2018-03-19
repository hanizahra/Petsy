const router = require('express').Router();

petFinderController = require('../controllers/petFinderController');
viewsController = require('../controllers/viewsController');

router.get('/', petFinderController.index, viewsController.testIndex);

router.get('/add', viewsController.testAdd);

router.post('/add', petFinderController.create, viewsController.handleTestAdd);

router.get('/:id', petFinderController.showOne, viewsController.testIndex);
/*
router.put('/:id', petFinderController.update);
router.delete('/:id', petFinderController.destroy);
*/

module.exports = router;