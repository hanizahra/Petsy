const db = require('../config/config');

module.exports = {

	findAll() {
    return db.many(`
      	SELECT 
      	*
        FROM comments
        `);
	},
	create(comment) {
  	return db.one(`
      	INSERT INTO comments
      	(comment)
      	VALUES 
      	($/comment/)
      	RETURNING *`, 
      	comment
      	);  	
    },
    update(recipe) {
  	return db.one(`
  		UPDATE comments
  		SET comment = $/comment/,
      	pet_id = $/pet_id/
  		WHERE id = $/id/
  		RETURNING *`,
      	comment
      	);
  	},
  	destroy(id) {
    return db.none(`
    	DELETE
        FROM comments
       	WHERE id = $1`, id);
  	}
};