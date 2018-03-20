const petsDB = require('../models/petsDB')

module.exports = {

	index(req,res, next) {
		petsDB.findAll()
		.then((petsList)=> {
			res.locals.petsList = petsList
			res.json({
					message: 'ok heres your pets list from the julius\' kick ass server',
					petsData: res.locals
				})
		})
		.catch(err=>{next(err)})
	},

	showOne(req,res,next) {
		petsDB.showOne(req.params.id)
			.then((animal) => {
				res.locals.animalShowOne = animal
				next()
			})
			.catch(err => next(err))
	},

	create(req,res,next) {
		petsDB.create(req.body)
			.then((animal) => {
				res.locals.justAdded = animal
				next()
			})
			.catch(err => {
				next(err)
			})
		console.log('req.body of your form that you added',req.body)
	},

	delete(req,res,next) {
		petsDB.destroy(req.params.id)
			.then(()=> { 
				next()
			})
			.catch(err => {
				next(err)
			})
	}

}