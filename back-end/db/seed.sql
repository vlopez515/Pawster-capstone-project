\c pets_dev

INSERT INTO users (name, income, age, sex, household_size, residence_type, free_time, preferences, pet_type, address, proof_of_residence, photo_id, proof_pets_allowed, phone_number, email ) 
VALUES
('Chad', 30000, 25, 'male', 5, 'apartment', '1-2', 'low', 'cat', '234 Oaks Drive, Apt. 1W, New York, NY 11308', 'lease1', 'https://visualpharm.com/assets/387/Person-595b40b75ba036ed117da139.svg', 'https://legaltemplates.net/wp-content/uploads/documents/pet-addendum/Sample-Pet-Addendum.png', '1234569877', 'emailSample@gmail.com'),
('Maddy', 100000 , 22, 'female', 1, 'house', '5-10', null, null , '123 Cedar street, New York, NY 10271', 'lease2','https://cdn.icon-icons.com/icons2/3150/PNG/512/user_profile_female_icon_192701.png', 'https://legaltemplates.net/wp-content/uploads/documents/pet-addendum/Sample-Pet-Addendum.png', '1234569877', 'emailSample22@gmail.com');

INSERT INTO shelters (name, address, business_hours, phone_number, email) VALUES 
('Tuff Tails Animal Rescue', 'P.O. Box 117, Levittown, NY 11756', null, null,'info@tufftails.org'),
('P.A.N.T.', 'P.O. Box 143, Salt Point, NY 12578','845-486-7075 ext.1',null, 'adoption@PANT.org'),
('Husky Savers, Inc.', 'Honeoye Falls, NY 14472', null,'585-576-1724', 'hskysavr1@gmail.com'),
('P.L.U.T.O. (Pet Lovers United Together as One)','PO Box 140889, Staten Island, NY 10314',null,null,'plutorescue@aol.com'),
('Estherville Animal Shelter','100 Russell Road, Greenfield Center, NY 12833', null, '518-893-7451', 'Esthervilleanimalshelter54@gmail.com'),
('A Purr-fect Fit Animal Rescue and Adoption Center', '2231 Wehrle Drive, Williamsville, NY 14221', 'M-F 12pm-6pm, Sat 12pm-4pm, Sun CLOSED (Visits by Appt Only)', '716-633-6600', 'apurrfectfit@gmail.com');

INSERT INTO pets (name, type, breed, size, gender, age, color, maintenance_level, spayed_neutered, house_trained, declawed,special_needs, shots_current, description, status, shelter_id ) VALUES
('Cedar', 'Cat', 'Domestic Short Hair', 'Small', 'Male', 'Baby', 'Gray / Blue / Silver', 'Low', true, false, false, false, true, null, 'adoptable', 1),
('ChiChi', 'Dog', 'Mixed Breed', 'Small', 'Female', 'Adult', 'Brown / Chocolate', 'Mid',true, false, null, false, true, 'At first glance, I might appear to have a ruff, set in my ways exterior but once you give me...', 'adoptable', 1),
('Pixie', 'Dog','Miniature Poodle', 'Small', 'Female', 'Young', 'White / Cream','High', true, false, true, true, true, "Say hello to Pixie, the adorable 1 year old poodle mix. Pixie came to us from a partner rescue and she can't wait to find a home.", 'adoptable',2 ),
('Ash', 'Dog', 'German Shepherd Dog','Large', 'Male' , 'Baby','Bicolor', 'Low', true, false, false, false, true, 'Ash is 6- 8 months old.  Ash is playful, hight energy.', 'adoptable', 2 ),
('Thumper', 'Dog', 'Larbador Retriever', 'Large', 'Female','Baby', 'Yellow / Tan / Blond / Fawn', 'Low', true, false, null, false, true,'Hi I am Thumper! I am a large mix puppy and I weigh almost 19 pounds! Puppies are a great companion to have.', 'adoptable', 1  ),
('August', 'Cat', 'Domestic Short Hair', 'Medium', 'Male', 'Baby','Orange / Red', 'Low', true, true, false, false, false, 'My name is August and I am waiting for my forver home.', 'adoptable', 1),
('Uno', 'Cat', 'Domestic Short Hair', 'Medium', 'Male', 'Baby','Orange & White','Low', true, true, false, false, false, 'My name is Uno because I want to be your number one.',  'adoptable', 3),
('Mariana', 'Cat','Domestic Short Hair', 'Medium', 'Female', 'Baby','Black','Medium', true, true, false, false, false, null, 'adoptable', 4),
('Spice', 'Cat','Domestic Short Hair', 'Small', 'Female', 'Baby','Gray & White','Medium', true, true, false, false, true, null, 'adoptable', 4)
('Chanel', 'Dog', 'American Pitbull', 'Large', 'Female','Baby', 'Black', 'Low', true, false, null, false, true,'Hi I am Chanel! I am a large mix puppy and I weigh almost 19 pounds! Puppies are a great companion to have.', 'adoptable', 5 )
INSERT INTO users_pets (user_id, pet_id) VALUES
(1,1),
(1,2),
(2,1),
(2,2);
