module.exports = function(sequelize, DataTypes) {
  var vehicle = sequelize.define("vehicle", {
    model: DataTypes.STRING,
    make: DataTypes.STRING,
    color: DataTypes.STRING,
    plate_number: DataTypes.STRING,
    year: DataTypes.INTEGER,
    cleaned: DataTypes.BOOLEAN,
    full_tank: DataTypes.BOOLEAN,
    pic_url: DataTypes.STRING
  });

  var customer = sequelize.define("customer", {
    customer_name: DataTypes.STRING,
    DOB: DataTypes.DATE,
    preferred_veh: DataTypes.STRING,
    rental_period: DataTypes.INTEGER,
    renting: DataTypes.BOOLEAN
  });

  
  return vehicle, customer;
};
