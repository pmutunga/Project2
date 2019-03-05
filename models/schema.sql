DROP DATABASE IF EXISTS rental_db;
CREATE DATABASE rental_db;
USE rental_db;

-- MySql hardcoded tables in case of sequalize issues
CREATE TABLE vehicles (
    id INIT NOT NULL AUTO_INCREMENT,
    model VARCHAR(255) NOT NULL,
    make VARCHAR(255) NOT NULL,
    color VARCHAR(255) NOT NULL,
    plateNumber VARCHAR(255) NOT NULL,
    vehicleYear INT,
    cleaned BOOLEAN DEFAULT FALSE,
    fullTank BOOLEAN DEFAULT FALSE,
    picUrl VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE customers (
    customerName VARCHAR(255) NOT NULL,
    DOB DATE, --date of birth
    preferred_veh VARCHAR(255), --model only
    rentalPeriod INT, --in days
    renting BOOLEAN DEFAULT FALSE
    -- add drivers license number
)

INSERT INTO vehicles (model, make, color, plateNumber, vehicleYear, cleaned, fullTank, picUrl) 
VAULES ("", "", "", "", , FALSE, FALSE, "");