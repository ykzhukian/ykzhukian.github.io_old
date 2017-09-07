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

if ($("#note-title").length != 0) {
  var item = $("#note-title");
  var item_height = item.outerHeight();
  var item_pos = item.position().top;
  var item_margin_top = item.next().css("margin-top");
  console.log(item_margin_top);
  var item2 = $("#note-title-2");
  var item2_height = item2.outerHeight();
  var item2_pos = item2.position().top;
  var item2_margin_top = item2.next().css("margin-top");
  var item2_pos_border = parseInt(item2.css("margin-top")) + parseInt(item2.css("padding-top"));
  console.log(item2_pos_border);
  // Scroll
  $(window).on("scroll", function(){
    
    var windowTop = $(window).scrollTop();
    console.log("item position " + item_pos);
    console.log("window scroll " + windowTop);
    console.log("item 2 position" + item2_pos);

    if (item_pos <= windowTop) {
      item.css({
        "position":"fixed",
        "top":"0",
      });
      item.next().css("margin-top", item_height + "px");
    } else {
      item.css({
        "position":"static",
      });
      item.next().css("margin-top", item_margin_top);
    }


    if (item2_pos - item2_height - item2_pos_border <= windowTop) {
      item.css({
        "position":"fixed",
        "top":item2_pos - item2_height - item2_pos_border - windowTop,
      });
    }

    if (item2_pos <= windowTop + item2_pos_border + 5) {
      item2.css({
        "position":"fixed",
        "top":"0",
      });
      item2.next().css("margin-top", item2_height + parseInt(item2_margin_top) + "px");
    } else {
      item2.css({
        "position":"static",
      });
      item2.next().css("margin-top", item2_margin_top);
    }
  })

  $( "#language .english_btn" ).on("click", function(){
    language_en = true;
    $(".english").css("display", "block");
    $(".chinese").css("display", "none");
    $("#language").css("display", "block");
  })

  $( "#language .chinese_btn" ).on("click", function(){
    language_en = false;
    $(".english").css("display", "none");
    $(".chinese").css("display", "block");
  })


}

