const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model{
  static init(sequelize){
    return super.init({
      userId:{
        type:Sequelize.STRING(20),
        allowNull:false,
        unique:false,
      },
      userPw:{
        type:Sequelize.STRING(60),
        allowNull:false,
      },
      userName:{
        type:Sequelize.STRING(10),
        allowNull:false,
      },
      userAge:{
        type:Sequelize.INTEGER,
        allowNull:false,
      },
      userGender:{
        type:Sequelize.STRING(4),
        allowNull:false,
      },
      userAddress:{
        type:Sequelize.STRING(255),
        allowNull:false,
      },
      userTel:{
        type:Sequelize.STRING(14),
        allowNull:true,
      },
      userPhone:{
        type:Sequelize.STRING(14),
        allowNull:false,
      },
      userEmail:{
        type:Sequelize.STRING(30),
        allowNull:true,
      },
      userLevel:{
        type:Sequelize.DATEONLY,
        allowNull:false,
        defaultValue:Sequelize.NOW,
      }      
    },{
      sequelize,
      timestamps:false,
      underscored:false,
      paranoid:false,
      modelName:'User',
      tableName:'users',
      charset:'utf8',
      collate:'utf8_general_ci'
    })
  }
}