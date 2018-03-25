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
				res.locals.commentUpdated = comment
				res.json({
					message: 'ok boss comment updated fr comment controller'
				})
			})
			.catch(err => {
				next(err)
			})
		console.log('req.body of your form that you updated',req.body)
	},
	deleteComment(req,res,next) {
		commentsDB.destroy(req.params.id)
			.then(()=> { 
				res.json({
					message: 'ok comment deleted boss'
				})
			})
			.catch(err => {
				next(err)
			})
	}

};