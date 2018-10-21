'use strict';
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const commentSchema = mongoose.Schema({ content: 'string' });

const ListSchema = mongoose.Schema({ 
  title: 'string',
  ingredients: [],
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  comments: [commentSchema]
});

ListSchema.methods.serialize = function() {
  return {
    title: this.title,
    ingredients: this.ingredients,
    comments: this.comments
  }
}

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  firstName: {type: String, default: ''},
  lastName: {type: String, default: ''},
  lists: [ListSchema]
});


UserSchema.methods.serialize = function() {
  return {
    username: this.username || '',
    firstName: this.firstName || '',
    lastName: this.lastName || ''
  };
};

UserSchema.methods.validatePassword = function(password) {
  return bcrypt.compare(password, this.password);
};

UserSchema.statics.hashPassword = function(password) {
  return bcrypt.hash(password, 10);
};

const List = mongoose.model('List', ListSchema);
const User = mongoose.model('User', UserSchema);

module.exports = {User, List};
