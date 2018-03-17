module.exports = {

	indexPets(req,res) {
		res.json({
			message: 'ok',
			listofpets: res.locals.petsList
		})
	}
}