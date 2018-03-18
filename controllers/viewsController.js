module.exports = {

	indexPets(req,res) {
		res.json({
			message: 'ok here\'s your json data from the DB throu res.locals -julius',
			listofpets: res.locals.petsList,
			selectedPetById: res.locals.animalShowOne
		})
	}
}