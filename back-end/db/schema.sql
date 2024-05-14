DROP DATABASE IF EXISTS pets_dev;
CREATE DATABASE pets_dev;

\c pets_dev;

DROP TABLE IF EXISTS pets;

CREATE TABLE pets (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NULL,
  age INTEGER NULL,
  type VARCHAR(255) NULL,
  house_trained BOOLEAN NULL,
  shots_current BOOLEAN NULL,
  sprayed_neutered BOOLEAN NULL,
  special_needs BOOLEAN NULL,
  primary_breed VARCHAR(255) NULL,
  mixed BOOLEAN NULL,
  contact_email VARCHAR(255) NULL,
  contact_phone VARCHAR(20) NULL,
  address1 VARCHAR(255) NULL,
  city VARCHAR(255) NULL,
  postcode VARCHAR(20) NULL,
  size VARCHAR(255) NULL,
  gender VARCHAR(255) NULL,
  description TEXT NULL
);

