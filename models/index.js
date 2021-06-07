// import models
const Post = require('./Post');
const Comment = require('./Comment');
const User = require('./User');

// Comments belongsTo User
Comment.belongsTo(User, {
    foreignKey:'userid',
    onDelete: 'CASCADE'
  });


// Users have many Posts
Post.hasMany(Comment, {
    foreignKey:'postid',
    onDelete: 'CASCADE'
});


module.exports = {
  Comment,
  Post,
  User,
};
