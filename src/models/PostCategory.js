module.exports = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define(
        'PostCategory',
        {
         postId: DataTypes.INTEGER,
         categoryId: DataTypes.INTEGER,
        },
        {
        tableName: 'posts_categories',
        timestamps: false,
        underscored: true,
        },
    );
    PostCategory.associate = (models) => {
        PostCategory.belongsTo(models.BlogPost, {
            foreignKey: 'postId',
            as: 'posts',
        });
    };
    return PostCategory;
}