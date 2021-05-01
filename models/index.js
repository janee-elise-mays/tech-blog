// import models
const Post = require('./Post');
const Comment = require('./Comment');
const User = require('./User');

// Comments belongsTo User
Comment.belongsTo(User, {
    foreignKey:'category_id'
  });


// Users have many Posts
User.hasMany(Post, {
    foreignKey:'category_id'
});

// Users belongToMany Comments (through ProductTag)
User.belongsToMany(Comment, {
  through: {
    model: ProductTag,
    unique: false,
  },
  as: 'products_tag'
});

module.exports = {
  Comment,
  Post,
  User,
};
