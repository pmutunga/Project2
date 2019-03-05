module.exports = function(sequelize, DataTypes) {
  var vehicle = sequelize.define("vehicle", {
    model: DataTypes.STRING,
    make: DataTypes.STRING,
    color: DataTypes.STRING,
    plateNumber: DataTypes.STRING,
    year: DataTypes.INTEGER,
    cleaned: DataTypes.BOOLEAN,
    fullTank: DataTypes.BOOLEAN,
    picUrl: DataTypes.STRING

  });

  var customer = sequelize.define("customer", {
    customerName: DataTypes.STRING,
    DOB: DataTypes.DATE,
    preferredVeh: DataTypes.STRING,
    rentalPeriod: DataTypes.INTEGER,
    renting: DataTypes.BOOLEAN
        // add drivers license number
  });

  
  return vehicle, customer;
};
