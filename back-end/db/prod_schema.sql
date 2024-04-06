DROP TABLE IF EXISTS users ;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL
);

DROP TABLE IF EXISTS pets ;

CREATE TABLE pets (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  age INTEGER NOT NULL,
  type VARCHAR(255) NOT NULL,
  house_trained BOOLEAN DEFAULT FALSE,
  shots_current BOOLEAN DEFAULT FALSE,
  sprayed_neutered BOOLEAN DEFAULT FALSE,
  special_needs BOOLEAN DEFAULT FALSE,
  primary_breed VARCHAR(255),
  mixed BOOLEAN DEFAULT FALSE,
  contact_email VARCHAR(255),
  contact_phone VARCHAR(20),
  address1 VARCHAR(255),
  city VARCHAR(255),
  postcode VARCHAR(20),
  size VARCHAR(255),
  gender VARCHAR(255),
  description TEXT,
  owner_id INTEGER REFERENCES users(id)
);

CREATE TABLE users_pets (
  user_id INTEGER REFERENCES users(id),
  pet_id INTEGER REFERENCES pets(id),
  PRIMARY KEY (user_id, pet_id)
);