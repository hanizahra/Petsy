DROP TABLE IF EXISTS comments;
DROP TABLE IF EXISTS animals;


CREATE TABLE animals (
  	id SERIAL PRIMARY KEY,
  	name TEXT,
  	animal TEXT,
  	sex TEXT,
  	size TEXT,
  	age TEXT,
  	breed TEXT,
  	mixed TEXT,
    photos TEXT,
    description TEXT,
    shelter_pet_id TEXT,
    shelter_id TEXT,
  	owner_phone TEXT,
	  owner_address TEXT,
	  owner_city TEXT,
	  owner_state TEXT,
	  owner_email TEXT,
  	date_created TIMESTAMP NOT NULL DEFAULT NOW()
);


CREATE TABLE comments (
	id SERIAL PRIMARY KEY,
	comment TEXT,
	pet_id INTEGER REFERENCES animals ON DELETE CASCADE ON UPDATE CASCADE,
	date_created TIMESTAMP NOT NULL DEFAULT NOW()
);