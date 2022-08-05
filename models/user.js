const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    class User extends Model {}
    User.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        firstName: {
            type: DataTypes.STRING,
            // allowNull: false,
            // validate: {
            //     notEmpty: {
            //         msg: '"First Name" cannot be empty.'
            //     }
            // }
        },
        lastName: {
            type: DataTypes.STRING,
            // allowNull: false,
            // validate: {
            //     notEmpty: {
            //         msg: '"Last Name" cannot be empty.'
            //     }
            // }
        },
        emailAddress: {
            type: DataTypes.STRING,
            // allowNull: false,
            // validate: {
            //     notEmpty: {
            //         msg: '"Email Address cannot be empty."'
            //     }
            // }
        },
        password: {
            type: DataTypes.STRING,
            // allowNull: false,
            // validate: {
            //     notEmpty: {
            //         msg: '"Password must be provided."'
            //     }
            // }
        },
    }, { sequelize });

    // User.associate = (models) => {
    //     User.hasMany(models.Course, {
    //         as: "userId",
    //         foreignKey: {
    //             fieldName: "id",
    //             allowNull: false,
    //         }
    //     });
    // }

    return User;
}