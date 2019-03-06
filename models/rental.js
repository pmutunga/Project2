module.exports = function(sequelize, DataTypes) {
  var customer = sequelize.define("customer", {
    customerName: DataTypes.STRING
    // DOB: DataTypes.DATE,
    // preferredVeh: DataTypes.STRING,
    // rentalPeriod: DataTypes.INTEGER,
    // renting: DataTypes.BOOLEAN

    // add drivers license number
  });

  return customer;
};
