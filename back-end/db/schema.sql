DROP DATABASE IF EXISTS pets_dev;
CREATE DATABASE pets_dev;

\c pets_dev;

DROP TABLE IF EXISTS test;

CREATE TABLE user(
    id SERIAL, 
    name TEXT,
    income INT,
    age INT,
<<<<<<< HEAD
    gender TEXT,
=======
    sex TEXT,
>>>>>>> 56fb162c5d34af7580ce6ba1692d9446386ca0e5
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
<<<<<<< HEAD

=======
>>>>>>> 56fb162c5d34af7580ce6ba1692d9446386ca0e5
CREATE TABLE shelter(
    id SERIAL , 
    name TEXT, 
    address TEXT, 
    business_hours TEXT,
    phone_number INT, 
    email TEXT, 
<<<<<<< HEAD
    total_pets INT
    PRIMARY KEY(id)
);

=======
    total_pet INT
    PRIMARY KEY(id)
);
>>>>>>> 56fb162c5d34af7580ce6ba1692d9446386ca0e5
CREATE TABLE pet_dog{
    id SERIAL , 
    name TEXT, 
    breed TEXT, 
    weight INT, 
<<<<<<< HEAD
    gender TEXT,
=======
    sex TEXT,
>>>>>>> 56fb162c5d34af7580ce6ba1692d9446386ca0e5
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
<<<<<<< HEAD
}

-- CREATE TABLE pet_cat{
--     id SERIAL , 
--     name TEXT, 
--     breeds TEXT, 
--     weight INT, 
--     gender TEXT,
--     age INT,
--     colors TEXT, 
=======



}

CREATE TABLE pet_cat{
    id SERIAL , 
    name TEXT, 
    breed TEXT, 
    weight INT, 
    sex TEXT,
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


-- DROP DATABASE IF EXISTS pets_dev;
-- CREATE DATABASE pets_dev;

-- \c pets_dev;

-- DROP TABLE IF EXISTS test;

-- CREATE TABLE User(
--     id SERIAL PRIMARY KEY, 
--     name TEXT,
--     income INT,
--     age INT,
--     sex TEXT,
--     household_size INT,
--     residence_type TEXT, 
--     free_time INT, 
--     preferences TEXT, 
--     pet_type TEXT, 
--     address TEXT,
--     proof_of_residence TEXT, 
--     photo_id TEXT, 
--     proof_pets_allowed TEXT, 
--     phone_number INT, 
--     email TEXT, 
--     CONSTRAINT PK_User PRIMARY KEY(ID)
-- );
-- CREATE TABLE Shelter(
--     id SERIAL PRIMARY KEY, 
--     name TEXT, 
--     address TEXT, 
--     business_hours TEXT,
--     phone_number INT, 
--     email TEXT, 
--     total_pet INT
--     CONSTRAINT PK_Shelter PRIMARY KEY(ID)
-- );
-- CREATE TABLE Pet_dog{
--     id SERIAL PRIMARY KEY, 
--     name TEXT, 
--     breed TEXT, 
--     weight INT, 
--     sex TEXT,
--     age INT,
--     color TEXT, 
>>>>>>> 56fb162c5d34af7580ce6ba1692d9446386ca0e5
--     hair_length TEXT, 
--     size TEXT, 
--     personality TEXT, 
--     maintenance_level TEXT, 
--     neutered TEXT, 
--     special_needs TEXT, 
--     description TEXT, 
<<<<<<< HEAD
--     shelter_id INT REFERENCES shelter(id) ON DELETE CASCADE
--     PRIMARY KEY(id)
-- }



=======
--     CONSTRAINT PK_Dog PRIMARY KEY(ID)


-- }

-- CREATE TABLE Pet_cat{
--     id SERIAL PRIMARY KEY, 
--     name TEXT, 
--     breed TEXT, 
--     weight INT, 
--     sex TEXT,
--     age INT,
--     color TEXT, 
--     hair_length TEXT, 
--     size TEXT, 
--     personality TEXT, 
--     maintenance_level TEXT, 
--     neutered TEXT, 
--     special_needs TEXT, 
--     description TEXT, 
--     CONSTRAINT PK_Cat PRIMARY KEY(ID)


-- }
>>>>>>> 56fb162c5d34af7580ce6ba1692d9446386ca0e5

