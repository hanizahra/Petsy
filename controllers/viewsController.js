module.exports = {

	testIndex(req,res) {
		res.json({
			message: 'ok here\'s your json data from the DB throu res.locals -julius',
			listofpets: res.locals.petsList,
			selectedPetById: res.locals.animalShowOne
		})
	},

	testAdd(req,res) {
		res.render('testAdd')
	},

	handleTestAdd(req,res) {
		res.json({
			message: 'ok here\'s the new pet you just added - julius',
			justAdded: res.locals.justAdded
		})
	}
}