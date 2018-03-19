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
	owner_name, 
	owner_phone, 
	owner_address, 
	owner_city, 
	owner_state,
	owner_email
 ) 
VALUES 
('sharky','dog','M','L','2','Lab','yes','no','sample vaccine','yes','very cute',123,123,
'Hani','123-456-7890','223 46th street','new york','NY','pet2@test.com'),

('spidey','tarantula','M','L','2','Lab','yes','no','sample vaccine','yes','very cute',223,223,
'Julius','123-456-7890','123 46th street','new york','NY','pet@test.com'),

('mousy','cat','M','L','2','Lab','yes','no','sample vaccine','yes','very cute',323,323,
'Brian','323-456-7890','323 46th street','new york','NY','pet1@test.com'),

('petty','dog','M','L','2','Lab','yes','no','sample vaccine','yes','very cute',423, 423,
'Scott', '423-456-7890','423 46th street','new york','NY','pet3@test.com');

INSERT INTO comments (comment, pet_id) VALUES 
('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt, sapien eget scelerisque iaculis, risus sapien scelerisque nulla, eget consequat enim odio ut nulla. Nulla a faucibus erat, quis condimentum arcu. Vestibulum suscipit massa in tortor mattis fermentum. Duis mattis diam at venenatis dapibus. In congue elementum tincidunt.', 1),
('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt, sapien eget scelerisque iaculis, risus sapien scelerisque nulla, eget consequat enim odio ut nulla. Nulla a faucibus erat, quis condimentum arcu. Vestibulum suscipit massa in tortor mattis fermentum. Duis mattis diam at venenatis dapibus. In congue elementum tincidunt.', 1),
('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt, sapien eget scelerisque iaculis, risus sapien scelerisque nulla, eget consequat enim odio ut nulla. Nulla a faucibus erat, quis condimentum arcu. Vestibulum suscipit massa in tortor mattis fermentum. Duis mattis diam at venenatis dapibus. In congue elementum tincidunt.', 1),
('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt, sapien eget scelerisque iaculis, risus sapien scelerisque nulla, eget consequat enim odio ut nulla. Nulla a faucibus erat, quis condimentum arcu. Vestibulum suscipit massa in tortor mattis fermentum. Duis mattis diam at venenatis dapibus. In congue elementum tincidunt.', 1);
