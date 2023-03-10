module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define(
        'Category',
        {
            id: { 
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: DataTypes.STRING,            
        },
        {
            tableName: 'categorys',
            timestamps: false,
            underscored: true,
        },
    );
    return Category;
}