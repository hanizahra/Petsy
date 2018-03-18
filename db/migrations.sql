DROP TABLE IF EXISTS animals;
DROP TABLE IF EXISTS owners;


CREATE TABLE owners (
	id SERIAL PRIMARY KEY,
	name VARCHAR NOT NULL,
	address VARCHAR NOT NULL,
	city VARCHAR NOT NULL,
	state VARCHAR NOT NULL,
	email VARCHAR NOT NULL,
	date_created TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE animals (
  	id SERIAL PRIMARY KEY,
  	name VARCHAR NOT NULL,
  	animal VARCHAR NOT NULL,
  	sex VARCHAR NOT NULL,
  	size VARCHAR NOT NULL,
  	age VARCHAR NOT NULL,
  	breed VARCHAR NOT NULL,
  	mixed BOOLEAN,
  	special_needs BOOLEAN,
  	vaccines VARCHAR NOT NULL,
  	kid_friendly BOOLEAN,
  	description VARCHAR NOT NULL,
  	shelter_pet_id INTEGER NOT NULL,
  	shelter_id INTEGER NOT NULL,
  	owner_id INTEGER REFERENCES owners,
  	comments TEXT NULL,
  	date_created TIMESTAMP NOT NULL DEFAULT NOW()
);
