var $ = require('jquery');
var models = require('./models');
var views = require('./views');

$(function(){
  var view = new views.PostView();

  $(document).on('posts:fetched', function(event, posts){
    view.showPosts(posts);
  });

  $('#post-form').on('submit', function(event){
    event.preventDefault();
    $(document).trigger('create:post', [{title: 'Cool', body: 'Cool'}]);
  })

  models.Post.fetch();
});
