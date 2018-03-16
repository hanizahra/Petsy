const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('Wassup this is the back end of petFinder /petFinder route! switch to client server for testing!');
});

module.exports = router;