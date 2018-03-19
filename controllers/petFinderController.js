const petFinderDB = require('../models/petFinderDB')

module.exports = {

	index(req,res, next) {
		petFinderDB.findAll()
		.then((petsList)=> {
			res.locals.petsList = petsList
			next()
		})
		.catch(err=>{next(err)})
	},

	showOne(req,res,next) {
		petFinderDB.showOne(req.params.id)
			.then((animal) => {
				res.locals.animalShowOne = animal
				next()
			})
			.catch(err => next(err))
	},

	create(req,res,next) {
		 petFinderDB.create(req.body)
			.then((animal) => {
				res.locals.justAdded = animal
				next()
			})
			.catch(err => {
				next(err)
			})
		console.log('yyoooooooo',req.body)
	},

}