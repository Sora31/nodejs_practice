module.exports = (sequelize, Datatypes) => {
    return sequelize.define('user', {
        name: {
            type: Datatypes.STRING(20),
            allowNull: false,
            unique: true,
        },
        age: {
            type: Datatypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        married: {
            type: Datatypes.BOOLEAN,
            allowNull: false,
        },
        comment: {
            type: Datatypes.TEXT,
            allowNull: true,
        },
        created_at: {
            type: Datatypes.DATE,
            allowNull: false,
            defaultValue: Datatypes.NOW,
        },
    }, {
        timestamps: false,
    });
};