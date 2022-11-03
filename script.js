$(document).ready(function() {
  
  $.getJSON('https://raw.githubusercontent.com/sc00l8oy/DI/main/posts.json').then(function (response) {
    
    $('.container').html('')

    
    for (var i = 0; i < response.length; i++) {
      $('.container').prepend('<div class="post">'+ 
      '<div class="avatar_container">'+
        '<img class="avatar" src="'+response[i].avatar+'">'+ 
      '</div>'+
      '<div class="post_container">'+response[i].first_name+'<a href="#">@'+response[i].username+'</a>'+
        '<p class="post_description">'+response[i].description+'</p>'+
        '<div class="buttons">'+
        '<button>like ('+response[i].like_count+')</button>'+
        '<button>share ('+response[i].share_count+')</button>'+
        '<button>comment ('+response[i].comment_count+')</button>'+
        '</div>'+
      '</div>'+
    '</div>')


    }

  })

})
