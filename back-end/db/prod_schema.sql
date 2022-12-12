DROP TABLE IF EXISTS users ;

CREATE TABLE users (
    id SERIAL, 
    name TEXT,
    income INT,
    age INT,
    sex TEXT,
    household_size INT,
    residence_type TEXT, 
    free_time TEXT, 
    preferences TEXT, 
    pet_type TEXT, 
    address TEXT,
    proof_of_residence TEXT, 
    photo_id TEXT, 
    proof_pets_allowed TEXT, 
    phone_number TEXT, 
    email TEXT, 
    PRIMARY KEY(id)
);

DROP TABLE IF EXISTS shelters;

CREATE TABLE shelters (
    id SERIAL , 
    name TEXT, 
    address TEXT, 
    business_hours TEXT,
    phone_number VARCHAR(40), 
    email TEXT, 
    PRIMARY KEY(id)
);

DROP TABLE IF EXISTS pets;

CREATE TABLE pets (
   id SERIAL PRIMARY KEY, 
    name TEXT, 
    type TEXT,
    breed TEXT,
    size TEXT, 
    gender TEXT,
    age TEXT,
    color TEXT, 
    maintenance_level TEXT,
    spayed_neutered BOOLEAN, 
    house_trained BOOLEAN,
    declawed BOOLEAN, 
    special_needs BOOLEAN, 
    shots_current BOOLEAN,
    description TEXT, 
    status TEXT,
    shelter_id INT REFERENCES shelters(id) ON DELETE CASCADE,
    userLiked BOOLEAN,
    image_url TEXT,
     phone_number VARCHAR(40)
);

CREATE TABLE users_pets (
    pet_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL,
    liked TIMESTAMP DEFAULT NOW()
);