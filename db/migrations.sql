DROP TABLE IF EXISTS comments;
DROP TABLE IF EXISTS animals;

CREATE TABLE animals (
  	id SERIAL PRIMARY KEY,
  	name VARCHAR NOT NULL,
  	animal VARCHAR NOT NULL,
  	sex VARCHAR NOT NULL,
  	size VARCHAR NOT NULL,
  	age VARCHAR NOT NULL,
  	breed VARCHAR NOT NULL,
  	mixed VARCHAR NOT NULL,
  	special_needs VARCHAR NOT NULL,
  	vaccines VARCHAR NOT NULL,
  	kid_friendly VARCHAR NOT NULL,
  	description VARCHAR NOT NULL,
  	shelter_pet_id INTEGER NOT NULL,
  	shelter_id INTEGER NOT NULL,
  	owner_name VARCHAR NOT NULL,
  	owner_phone TEXT NOT NULL,
	owner_address VARCHAR NOT NULL,
	owner_city VARCHAR NOT NULL,
	owner_state VARCHAR NOT NULL,
	owner_email VARCHAR NOT NULL,
  	date_created TIMESTAMP NOT NULL DEFAULT NOW()
);


CREATE TABLE comments (
	id SERIAL PRIMARY KEY,
	comment TEXT NOT NULL,
	pet_id INTEGER REFERENCES animals,
	date_created TIMESTAMP NOT NULL DEFAULT NOW()
);