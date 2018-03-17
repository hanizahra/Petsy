const petFinderDB = require('../models/petFinderDB')

module.exports = {

	index(req,res, next) {
		petFinderDB.findAll()
		.then((petsList)=> {
			res.locals.petsList = petsList
			next()
		})
		.catch(err=>{next(err)})
	}

}