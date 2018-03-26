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

  getAllCommentsForThisPet(id) {
    return db.any(`
      SELECT 
      comments.id,
      comment,
      pet_id 
      FROM 
      comments
      JOIN 
      animals
      ON 
      comments.pet_id=animals.id
      WHERE 
      comments.pet_id=$1`,
      id)
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
    update(comment) {
  	return db.one(`
  		UPDATE comments
  		SET comment = $/comment/
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