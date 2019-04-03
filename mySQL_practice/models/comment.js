module.exports = (sequelize, Datatypes) => {
    return sequelize.define('comment', {
        comment: {
            type: Datatypes.STRING(100),
            allowNull: false,
        },
        created_at: {
            type: Datatypes.DATE,
            allowNull: true,
            defaultValue: Datatypes.NOW,
        }
    }, {
        timestamps: false,
    });
};