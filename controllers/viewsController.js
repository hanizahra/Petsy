module.exports = {

	testIndex(req,res) {
		res.json({
			message: 'ok here\'s your json data from the DB throu res.locals -julius',
			listofpets: res.locals.petsList,
			selectedPetById: res.locals.animalShowOne,
			allComments: res.locals.allComments

		})
	},	
	testAdd(req,res) {
		res.render('testAdd')
	},

	testAddComment(req,res) {
		res.render('testAddComment')
	},

	testDelete(req,res) {
		res.render('testDelete')
	},

	handleTestAdd(req,res) {
		res.json({
			message: 'ok here\'s the new pet you just added - julius',
			justAdded: res.locals.justAdded
		})
	}
}