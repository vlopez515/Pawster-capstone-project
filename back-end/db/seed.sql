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

INSERT INTO pets (name, type, breed, size, gender, age, color, maintenance_level, spayed_neutered, house_trained, declawed, special_needs, shots_current, description, status, shelter_id, userLiked, image_url ) VALUES
('Costa Rica', 'Cat', 'Domestic Short Hair', 'Small', 'Female', 'Baby', 'Gray / Black', 'Low', true, false, false, false, false, null, 'adoptable', 1, false, 'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59102704/1/?bust=1670567279'),
('ChiChi', 'Dog', 'Mixed Breed', 'Small', 'Female', 'Adult', 'Brown / Chocolate', 'Mid', true, false, null, false, true, 'At first glance, I might appear to have a ruff, set in my ways exterior but once you give me...', 'adoptable', 2, false, 'https://images.unsplash.com/photo-1558947530-cbcf6e9aeeae?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8cGV0c3x8fHx8fDE2NzA1NTM1NjA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500'), 
('Rubble', 'Cat', 'Domestic Short Hair', 'Small', 'Male', 'Baby', 'Brown', 'Mid', false, false, false, false, true, null, 'adoptable', 2, false, 'https://images.unsplash.com/photo-1606214174585-fe31582dc6ee?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8cGV0c3x8fHx8fDE2NzA1Njg5MjU&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500'),
('Tarzan', 'Cat', 'Domestic Short Hair', 'Small', 'Male', 'Baby', 'Orange / Red', 'Mid',false, false, false, false, true, null, 'adoptable', 2, false, 'https://images.unsplash.com/photo-1548366086-7f1b76106622?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8cGV0c3x8fHx8fDE2NzA1NjkwMTA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500'),
('Togo', 'Dog', 'Mixed Breed', 'Large', 'Male', 'Young', 'Brown', 'Mid',true, false, null, false, true, 'At first glance, I might appear to have a ruff, set in my ways exterior but once you give me...', 'adoptable', 2, false, 'https://images.unsplash.com/photo-1585908286456-991b5d0e53f4?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8ZG9nfHx8fHx8MTY3MDU2OTA1OA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500'),
('Bishop', 'Cat', 'Domestic Short Hair', 'Medium', 'Male', 'Adult', 'Orange', 'Mid', false, false, false, false, false, null, 'adoptable', 2, false, 'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59102195/1/?bust=1670563217'),
('Rookie', 'Cat', 'Domestic Short Hair', 'Medium', 'Male', 'Young', 'Gray', 'Mid',true, false, null, false, true, null, 'adoptable', 2, false, 'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59102194/1/?bust=1670563214'),
('SIREN', 'Cat', 'Bengal', 'Medium', 'Female', 'Baby', 'Torbie', 'Mid',true, true, false, false, true, 'SIREN is unbelievably pretty!!  She is very sweet and attentive. She is also gentle and playful!  Wont you let her...', 'adoptable', 2, true, 'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59102823/1/?bust=1670568492'),
('KIWI', 'Dog', 'Pit Bull Terrier', 'Large', 'Male', 'Adult', 'Brown', 'Mid',true, true, null, false, true, 'MEET KIWI! KIWI is an approximately 3 year old, 70lb', 'adoptable', 2, false, 'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59102821/1/?bust=1670569073'),
('LAYLA', 'Dog', 'Rottweiler', 'Large', 'Female', 'Adult', 'Brown / Black', 'Mid',true, true, null, false, true, 'LAYLA is an approximately 3 year old, 80lb', 'adoptable', 1, false, 'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59102820/1/?bust=1670569018'),
('SNOOKUMS', 'Cat', 'Siberian', 'Large', 'Male', 'Baby', 'Black & White / Tuxedo', 'Mid',true, true, false, false, true, 'SNOOKUMS - Beautiful, Fluffy, Soft, Snuggly, Smart, Playful, 10-Week-Old, Siberian Tuxedo Boy!', 'adoptable', 1, false, 'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59102808/2/?bust=1670568245' ),
('SCHWEETZ', 'Cat', 'Calico', 'Medium', 'Female', 'Baby', 'Calico', 'Mid',true, true, false, false, true, 'SCHWEETZ- Beautiful, Loving, Soft, Gentle, Playful, Fun, Active, 12-Week-Old, Calico Girl!', 'adoptable', 1, false, 'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59102786/4/?bust=1670568099' );




INSERT INTO messages (petId, userId, senderRole, date, message  ) VALUES
('8','1','pet','2022-12-10T19:25:31.763Z','Thank you for expressing interest in Togo! We will be reviewing your application and reaching out for the next steps'),
('11','1','pet','2022-12-10T19:25:31.763Z','Thank you for expressing interest in Costa Rica! We will be reviewing your application and reaching out for the next steps'),
('11','1','user','2022-12-11T19:25:31.763Z','Please let me know if you need any further information from me, I''d be happy to provide any other documents.'),
('6', '1', 'pet', '2022-12-11T19:39:40.892Z', 'Thank you for swiping right on Rookie! We will be in touch after reviewing your file!'),
('5', '1', 'pet', '2022-12-11T19:39:40.892Z', 'ChiChi is super excited to meet you! We will be reviewing your application before reaching out to set a date for you two to meet.');