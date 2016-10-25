var $ = require('jquery');
var template = require('../templates/application.hbs');

function PostView(){
  $('.app').append('<ul class="posts">');
  $('.app').append(template());
}

PostView.prototype.showPosts = function(posts){
  posts.forEach(function(post){
    $('.posts').append('<li><h1>' + post.title + '</h1><p>' + post.body + '</p></li>');
  });
}

module.exports = {
  'PostView': PostView
};
