module.exports = (sequelize, DataTypes) => (
    sequelize.define('domain', {
        host: {
            type: DataTypes.STRING(80),
            allowNull: false,
        },
        type: {
            type: DataTypes.STRING(10),
            allowNull: false,
        },
        clientSecret: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
        },
    }, {
        validate: {
            unknownType() {
                console.log(this.type, this.type !== 'free', this.type !== 'premium');
                if (this.type !== 'free' && this.type !== 'premium') {
                    throw new error('type 컬럼은 free or premium 이어야 합니다.');
                }
            },
        },
        timestamps: true,
        paranoid: true,
    })
);