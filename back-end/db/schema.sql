DROP DATABASE IF EXISTS pets_dev;
CREATE DATABASE pets_dev;

\c pets_dev;

DROP TABLE IF EXISTS test;

CREATE TABLE user(
    id SERIAL, 
    name TEXT,
    income INT,
    age INT,
    gender TEXT,
    household_size INT,
    residence_type TEXT, 
    free_time INT, 
    preferences TEXT, 
    pet_type TEXT, 
    address TEXT,
    proof_of_residence TEXT, 
    photo_id TEXT, 
    proof_pets_allowed TEXT, 
    phone_number INT, 
    email TEXT, 
    PRIMARY KEY(id)
);

CREATE TABLE shelter(
    id SERIAL , 
    name TEXT, 
    address TEXT, 
    business_hours TEXT,
    phone_number INT, 
    email TEXT, 
    total_pets INT
    PRIMARY KEY(id)
);

CREATE TABLE pet_dog{
    id SERIAL , 
    name TEXT, 
    breed TEXT, 
    weight INT, 
    gender TEXT,
    age INT,
    color TEXT, 
    hair_length TEXT, 
    size TEXT, 
    personality TEXT, 
    maintenance_level TEXT, 
    neutered TEXT, 
    special_needs TEXT, 
    description TEXT, 
    shelter_id INT REFERENCES shelter(id) ON DELETE CASCADE
    PRIMARY KEY(id)
}

-- CREATE TABLE pet_cat{
--     id SERIAL , 
--     name TEXT, 
--     breeds TEXT, 
--     weight INT, 
--     gender TEXT,
--     age INT,
--     colors TEXT, 
--     hair_length TEXT, 
--     size TEXT, 
--     personality TEXT, 
--     maintenance_level TEXT, 
--     neutered TEXT, 
--     special_needs TEXT, 
--     description TEXT, 
--     shelter_id INT REFERENCES shelter(id) ON DELETE CASCADE
--     PRIMARY KEY(id)
-- }




