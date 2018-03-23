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

	getAllCommentsForThisPet(req,res,next) {
  	commentsDB.getAllCommentsForThisPet(req.params.id)
  		.then((comments) => {
  			res.locals.comments = comments
  				res.json({
  					message: 'ok these are your comments for this pet from comments controller getAllCommentsForThisPet',
  					commentsData: res.locals
  				})
  			})
  			.catch(err => next(err));
  	},

	createComment(req,res,next) {
		commentsDB.create(req.body)
			.then((comment) => {
				res.locals.commentAdded = comment
				res.json({
  					message: 'ok these are your comments you just added',
  					commentsData: res.locals
  				})
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