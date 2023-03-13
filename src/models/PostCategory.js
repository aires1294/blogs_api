module.exports = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define(
        'PostCategory',
        {
         postId: {
            type: DataTypes.INTEGER,  
            foreignKey: true,  
        },
         categoryId: {
            type: DataTypes.INTEGER,
            foreignKey: true,
         }
        },
        {
        tableName: 'posts_categories',
        timestamps: false,
        underscored: true,
        },
    );
    PostCategory.associate = (models) => {

        models.Category.belongsToMany(models.BlogPost, {
            as: 'posts',
            through: PostCategory,
            foreignKey: 'post_id',
            otherKey: 'category_id',
        });
        
        models.BlogPost.belongsToMany(models.Category, {
            as: 'categories',
            through: PostCategory,
            foreignKey: 'category_id',
            otherKey: 'post_id',
        });
    };
    
    return PostCategory;
}