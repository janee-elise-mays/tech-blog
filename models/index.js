// import models
const Post = require('./Post');
const Comment = require('./Comment');
const User = require('./User');

// Comments belongsTo User
Comment.belongsTo(User, {
    foreignKey:'user_id'
  });


// Users have many Posts
User.hasMany(Post, {
    foreignKey:'user_id'
});

// Users belongToMany Comments (through ProductTag)
User.belongsToMany(Comment, {
  through: {
    model: Comment,
    unique: false,
  },
  as: 'user_id'
});

module.exports = {
  Comment,
  Post,
  User,
};
