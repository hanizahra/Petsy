const db = require('../config/config');

module.exports = {

	findAll() {
    return db.many(`
      	SELECT animals.id AS pet_id,
        animals.name AS Pet_name, 
        animals.animal, 
        age,
        breed,
        mixed,
        special_needs,
        description,
        owners.name AS owner
        FROM animals JOIN owners ON animals.owner_id=owners.id
        `);
	}
  	
};


