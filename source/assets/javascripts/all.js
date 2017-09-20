//= require jquery-3.1.1.min.js


// This is where it all goes :)
// var loadButton = document.getElementById('load-more');
// var feed = new Instafeed({
//   get: 'user',
//   tagName: 'VSCO',
//   userId: '411688063',
//   accessToken: '411688063.1677ed0.b3558c060d6a494bb28ff21b4dc7cbd5',
//   resolution: 'low_resolution'

// });
// feed.run();

var language_en = true;

$( "#trigger" ).on("click", function() {
  $( "#cross" ).toggleClass( 'active' )
  $( "#mobile-nav-wrapper" ).toggleClass( 'show' )
});

$( "#cross" ).on("click", function() {
  $( "#cross" ).toggleClass( 'active' )
  $( "#mobile-nav-wrapper" ).toggleClass( 'show' )
});

$("#nav-link-intro").on("mouseover", function(){
  $(this).find("img").attr('src', '../assets/images/soda.svg');
})

$("#nav-link-intro").on("mouseleave", function(){
  $(this).find("img").attr('src', '../assets/images/soda_grey.svg');
})

$("#nav-link-code").on("mouseover", function(){
  $(this).find("img").attr('src', '../assets/images/keyboard.svg');
})

$("#nav-link-code").on("mouseleave", function(){
  $(this).find("img").attr('src', '../assets/images/keyboard_grey.svg');
})

$("#nav-link-pin").on("mouseover", function(){
  $(this).find("img").attr('src', '../assets/images/pin.svg');
})

$("#nav-link-pin").on("mouseleave", function(){
  $(this).find("img").attr('src', '../assets/images/pin_grey.svg');
})

$("#nav-link-mail").on("mouseover", function(){
  $(this).find("img").attr('src', '../assets/images/mail.svg');
})

$("#nav-link-mail").on("mouseleave", function(){
  $(this).find("img").attr('src', '../assets/images/mail_grey.svg');
})

$(window).scroll(function() {
  if ($(window).scrollTop() > 100) {
    $("#sider-container").addClass("active")
  } else {
    $("#sider-container").removeClass("active")
  }
});
