DROP DATABASE IF EXISTS rental_db;
CREATE DATABASE rental_db;
USE rental_db;

-- MySql hardcoded tables in case of sequalize issues
CREATE TABLE vehicles (
    id INIT NOT NULL AUTO_INCREMENT,
    model VARCHAR(255) NOT NULL,
    make VARCHAR(255) NOT NULL,
    color VARCHAR(255) NOT NULL,
    plate_number VARCHAR(255) NOT NULL,
    vehicle_year INT,
    cleaned BOOLEAN DEFAULT FALSE,
    full_tank BOOLEAN DEFAULT FALSE,
    pic_url VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE customers (
    customer_name VARCHAR(255) NOT NULL,
    DOB DATE, --date of birth
    preferred_veh VARCHAR(255), --model only
    rental_period INT, --in days
    renting BOOLEAN DEFAULT FALSE
)

INSERT INTO vehicles (model, make, color, plate_number, vehicle_year, cleaned, full_tank, pic_url) 
VAULES ("", "", "", "", , FALSE, FALSE, "");