\c pets_dev

INSERT INTO users (name, income, age, sex, household_size, residence_type, free_time, preferences, pet_type, address, proof_of_residence, photo_id, proof_pets_allowed, phone_number, email ) 
VALUES
('Chad', 30000, 25, 'male', 5, 'apartment', 2, 'low', 'cat', '234 Oaks Drive, Apt. 1W, New York, NY 11308', 'lease1', 'https://visualpharm.com/assets/387/Person-595b40b75ba036ed117da139.svg', 'https://legaltemplates.net/wp-content/uploads/documents/pet-addendum/Sample-Pet-Addendum.png', 1234569877, 'emailSample@gmail.com'),
('Maddy', 100000 , 22, 'female', 1, 'house', 5, null, null , '123 Cedar street, New York, NY 10271', 'lease2','https://cdn.icon-icons.com/icons2/3150/PNG/512/user_profile_female_icon_192701.png', 'https://legaltemplates.net/wp-content/uploads/documents/pet-addendum/Sample-Pet-Addendum.png', 1234569877, 'emailSample22@gmail.com');

INSERT INTO shelters (name, address, business_hours, phone_number, email) VALUES 
('Tuff Tails Animal Rescue', 'P.O. Box 117, Levittown, NY 11756', null, null,'info@tufftails.org'),
('P.A.N.T.', 'P.O. Box 143, Salt Point, NY 12578','845-486-7075 ext.1',null, 'adoption@PANT.org'),
('Husky Savers, Inc.', 'Honeoye Falls, NY 14472', null,'585-576-1724', 'hskysavr1@gmail.com'),
('P.L.U.T.O. (Pet Lovers United Together as One)','PO Box 140889, Staten Island, NY 10314',null,null,'plutorescue@aol.com'),
('Estherville Animal Shelter','100 Russell Road, Greenfield Center, NY 12833', null, '518-893-7451', 'Esthervilleanimalshelter54@gmail.com'),
('A Purr-fect Fit Animal Rescue and Adoption Center', '2231 Wehrle Drive, Williamsville, NY 14221', 'M-F 12pm-6pm, Sat 12pm-4pm, Sun CLOSED (Visits by Appt Only)', '716-633-6600', 'apurrfectfit@gmail.com');

INSERT INTO pets (name, type, breed, size, gender, age, color, spayed_neutered, house_trained, declawed,special_needs, shots_current, description, status, shelter_id ) VALUES
('Cedar', 'Cat', 'Domestic Short Hair', 'Small', 'Male', 'Baby', 'Gray / Blue / Silver', true, false, false, false, true, null, 'adoptable', 1),
('ChiChi', 'Dog', 'Mixed Breed', 'Small', 'Female', 'Adult', 'Brown / Chocolate', true, false, null, false, true, 'At first glance, I might appear to have a ruff, set in my ways exterior but once you give me...', 'adoptable', 1);

