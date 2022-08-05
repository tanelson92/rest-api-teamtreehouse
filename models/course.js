const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    class Course extends Model {}
    Course.init({
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: '"Title" cannot be empty.'
                }
            }
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: '"Description" cannot be empty.'
                }
            }
        },
        estimatedTime: {
            type: DataTypes.STRING
        },
        materialsNeeded: {
            type: DataTypes.STRING
        },
    }, { sequelize });

    // Course.associate = (models) => {
    //     Course.belongsTo(models.User, {
    //         as: "userId",
    //         foreignKey: {
    //             fieldName: "id",
    //             allowNull: false,
    //         },
    //     });  
    // }

    return Course;
}