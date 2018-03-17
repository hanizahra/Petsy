INSERT INTO owners (name, address, city, state, email) VALUES 
('Julius', '123 45th street', 'new york', 'NY', 'pet1@test.com'),
('Hani', '223 46th street', 'new york', 'NY', 'pet2@test.com'),
('Brian', '323 47th street', 'new york', 'NY', 'pet3@test.com'),
('Scott', '423 48th street', 'new york', 'NY', 'pet4@test.com');

INSERT INTO animals (name, animal, sex, size, age, breed, mixed, special_needs,
 vaccines, kid_friendly, description, shelter_pet_id, shelter_id, owner_id ) VALUES 

('sharky', 'dog', 'M', 'small', '2', 'lab', true, false,
 'yes', 'yes', 'very cute', '123', '123', 1),
('spidey', 'cat', 'F', 'small', '1', 'idk', true, false,
 'yes', 'yes', 'super cute', '223', '223', 2),
('mousy', 'dog', 'M', 'large', '2', 'pit', true, false,
 'yes', 'yes', 'gigantic', '323', '323', 3),
('sharky', 'dog', 'M', 'small', '2', 'lab', true, false,
 'yes', 'yes', 'very cute', '123', '123', 4);

