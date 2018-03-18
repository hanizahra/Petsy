const router = require('express').Router();

petFinderController = require('../controllers/petFinderController');
viewsController = require('../controllers/viewsController');

router.get('/', petFinderController.index, viewsController.indexPets);

router.post('/', petFinderController.create);

router.get('/:id', petFinderController.showOne, viewsController.indexPets);
/*
router.put('/:id', petFinderController.update);
router.delete('/:id', petFinderController.destroy);
*/

module.exports = router;