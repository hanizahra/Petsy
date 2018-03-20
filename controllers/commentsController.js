const commentsDB = require('../models/commentsDB')

module.exports = {
	
	getAllComments(req,res,next) {
		commentsDB.findAll()
			.then((comments)=> {
				res.locals.allComments = comments
				res.json({
					message: 'ok',
					commentsData: res.locals
				})
			})
			.catch(err => {
				next(err)
			})
	},

	createComment(req,res,next) {
		commentsDB.create(req.body)
			.then((comment) => {
				res.locals.commentAdded = comment
				next()
			})
			.catch(err => {
				next(err)
			})
		console.log('yyoooooooo',req.body)
	},

	updateComment(req,res,next) {
		commentsDB.update(req.body)
			.then((comment) => {
				res.locals.recipesUpdated = comment
				next()
			})
			.catch(err => {
				next(err)
			})
	},

	deleteComment(req,res,next) {
		commentDB.destroy(req.params.id)
			.then(()=> { 
				next()
			})
			.catch(err => {
				next(err)
			})
	}

};