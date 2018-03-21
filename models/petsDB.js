const db = require('../config/config');

module.exports = {

	findAll() {
    return db.many(`
      	SELECT 
      	*
        FROM animals 
        `);
	},

	showOne(id) {
    return db.one(`
      	SELECT *
      	FROM animals
      	WHERE id = $1`, id);
	},
  	
  	create(animal) {
  	return db.one(`
    	INSERT INTO animals
    	(
    	name,
    	animal, 
    	sex,
    	size,
    	age,
    	breed,
    	mixed,
    	description,
    	shelter_pet_id,
    	shelter_id,
    	owner_phone,
    	owner_address,
    	owner_city,
    	owner_state,
    	owner_email
    	)
      	VALUES 
      	(
      	$/name/,
      	$/animal/, 
      	$/sex/, 
      	$/size/,
      	$/age/,
      	$/breed/,
      	$/mixed/,
      	$/description/,
      	$/shelter_pet_id/,
      	$/shelter_id/,
      	$/owner_phone/,
      	$/owner_address/,
      	$/owner_city/,
      	$/owner_state/,
      	$/owner_email/
      	)
      	RETURNING *`, 
      	animal
      	);  	
	},
	destroy(id) {
    return db.none(`
    	DELETE
        FROM animals
       	WHERE id = $1`, id);
    }
};


