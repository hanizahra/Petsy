const db = require('../config/config');

module.exports = {

	findAll() {
    return db.many(`
        SELECT 
        comment, 
        name, 
        animal, 
        pet_id,
        FROM comments JOIN animals ON animals.id=comments.pet_id
        ORDER BY recipes.recipe_name`);
  },
	create(comment) {
  	return db.one(`
      	INSERT INTO comments
      	(comment,
        pet_id)
      	VALUES 
      	($/comment/,
        $/pet_id/)
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