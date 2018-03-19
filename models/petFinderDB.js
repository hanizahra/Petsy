const db = require('../config/config');

module.exports = {

	findAll() {
    return db.many(`
      	SELECT 
      	animals.id AS pet_id,
        animals.name AS Pet_name, 
        animal, 
        sex,
        age,
        breed,
        mixed,
        special_needs,
        vaccines,
        kid_friendly,
        description,
        shelter_pet_id,
        shelter_id,
        comments,
        owners.name AS owner,
        owners.address AS address,
        owners.city AS city,
        owners.state AS state,
        owners.email AS email
        FROM animals JOIN owners ON animals.owner_id=owners.id
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
    	special_needs,
    	vaccines,
    	kid_friendly,
    	description,
    	shelter_pet_id,
    	shelter_id,
    	owner_id,
    	comments
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
      	$/special_needs/,
      	$/vaccines/,
      	$/kid_friendly/,
      	$/description/,
      	$/shelter_pet_id/,
      	$/shelter_id/,
      	$/owner_id/,
      	$/comments/
      	)
      	RETURNING *`, 
      	animal
      	);  	
	}
};


