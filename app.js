
  $('.classroom_image').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    arrows: true,
    cssEase: 'linear'
  });

  var splide = new Splide('.splide', {
    type      : 'loop',
    padding   : '5rem',
    arrows    : false,
    pagination: false,
    breakpoints: {
      787: {
        pagination: false,   // Enable pagination on smaller screens
        // perPage   : 1,      // Display only 1 item per page on smaller screens
         padding   : '0',
      },
    },
  });
  
  splide.mount();
  
  






//   $(window).scroll(function(){
//     $(window).on('scroll', function() {
//       var sectionOffset = $('#section-content').offset().top;
//       var sectionHeight = $('#section-content').outerHeight();
//       var scrollPosition = $(window).scrollTop() + $(window).height();

//       if (scrollPosition > sectionOffset && scrollPosition < sectionOffset + sectionHeight) {
//           $('#section-content .highlight, #section-content .highlight-pink').addClass('animate');
          
          
//       } else {
//           $('#section-content .highlight').removeClass('animate');
//       }
//   });
// });


$(document).ready(function() {
  if ($(window).width() >= 768) {
  $(window).on('scroll', function() {
      $('#section-content,.section-classroom,.section-classroom-intro').each(function() {
          var sectionOffset = $(this).offset().top;
          var sectionHeight = $(this).outerHeight();
          var scrollPosition = $(window).scrollTop() + $(window).height();

          if (scrollPosition > sectionOffset && scrollPosition < sectionOffset + sectionHeight) {
              $(this).find('.highlight, .highlight-line').addClass('animate');
          } else {
              $(this).find('.highlight, .highlight-line').removeClass('animate');
          }
      });
  });
}});


if ($(window).width() >= 768) {
    $(window).scroll(function(){
      $(window).on('scroll', function() {
        var sectionOffset = $('#section-productivity').offset().top;
        var sectionHeight = $('#section-productivity').outerHeight();
        var scrollPosition = $(window).scrollTop() + $(window).height();

        if (scrollPosition > sectionOffset && scrollPosition < sectionOffset + sectionHeight) {
            $('#section-productivity .animatable-image ').addClass('zoom-out');          
        }
    });
  });

  $(window).scroll(function(){
    $(window).on('scroll', function() {
      var sectionOffset = $('#section-productivity-second').offset().top;
      var sectionHeight = $('#section-productivity-second').outerHeight();
      var scrollPosition = $(window).scrollTop() + $(window).height();

      if (scrollPosition > sectionOffset && scrollPosition < sectionOffset + sectionHeight) {
          $('#section-productivity-second .animatable-image ').addClass('zoom-out');          
      }
  });
  });
}


if ($(window).width() <= 768) {
  $('#section-productivity .animatable-image ').addClass('zoom-out');
  $('#section-productivity-second .animatable-image ').addClass('zoom-out');
}

$(document).ready(function() {
  function isInViewport(element) {
      var rect = element[0].getBoundingClientRect();
      return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= ($(window).height() || document.documentElement.clientHeight) &&
          rect.right <= ($(window).width() || document.documentElement.clientWidth)
      );
  }

  $(window).on('scroll', function() {
      var $section = $('.section-classroom-intro');
      if (isInViewport($section)) {
          $section.addClass('animate');
      }
  });
});






document.addEventListener('DOMContentLoaded', function() {
  const section = document.querySelector('.section-classroom-intro');
  const leftContainer = document.querySelector('.left-hardware-container');
  const rightContainer = document.querySelector('.right-hardware-container');
  const sectionHeight = section.offsetHeight;

  window.addEventListener('scroll', function() {
      const scrollTop = window.scrollY; 
      const sectionTop = section.offsetTop; 

      const progress = Math.min(1, Math.max(0, (scrollTop - sectionTop) / sectionHeight));

      const xOffset = progress * 600; 
      const yOffset = progress * 20; 

      leftContainer.style.transform = `matrix(1, 0, 0, 1, ${-xOffset}, ${yOffset})`;
      rightContainer.style.transform = `matrix(1, 0, 0, 1, ${xOffset}, ${yOffset})`;
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const section = document.querySelector('.section-classroom-intro');
  const topText = document.querySelector('.section-hardware-text.top');
  const bottomText = document.querySelector('.section-hardware-text.bottom');
  const sectionHeight = section.offsetHeight;
  const triggerHeight = sectionHeight / 1.2; // 200vh based on section height

  console.log('Section height:', sectionHeight);
    console.log('Trigger height (200vh):', triggerHeight);

  window.addEventListener('scroll', function() {
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      const scrollPosition = window.scrollY + window.innerHeight;

      if (scrollPosition >= sectionTop + triggerHeight) {
          topText.classList.remove('show');
          bottomText.classList.add('show');
      } else {
          topText.classList.add('show');
          bottomText.classList.remove('show');
      }
  });
});



$('#product-subscribe-submit').click(function () {
  console.log('okkkk');
  var customerName = $("#customerName").val();
  var phoneNumber = $("#phoneNumber").val();
  var email = $("#email").val();
  var customerCompany = $("#customerCompany").val();
  var job = $("#job").val();
  var product = $("#product").val();
  // var dateJoin = document.getElementsByName("fav_language")[0].value;
  // var fileUrl = $("#link").val();
  // var deviceUrl = $("#linkDevice").val();
  var productId = 3257;
  // if (document.getElementsByName("fav_language")[1].checked) {
  //     dateJoin = document.getElementsByName("fav_language")[1].value;
  // }

  $.ajax({
      cache: false,
      type: "POST",
      // url: "@(Url.Action("ProductSubscribeCreate", "ProductSubscribe"))",
      url: "https://shopdunk.com/ProductSubscribe/ProductSubscribeCreate",

      data: {
          ProductId: productId,
          CustomerName: customerName + ', ' + job + ', ' + customerCompany + ', ' + product,
          PhoneNumber: phoneNumber,
          Email: email,
          // DateJoin: dateJoin,
          // FileUrl: fileUrl,
          // DeviceUrl: deviceUrl,
          TypeId: 10
      },
          success: function (response) {
          if (response.Result === true) {
              $("#popup-subscribe-success").attr("hidden", false);
              $("#popup-care-booking").attr("hidden", false);

              $("#customerName").val("");
              $("#phoneNumber").val("");
              $("#email").val("");
              $("#link").val("");
              $("#linkDevice").val("");
              $("#customerCompany").val("");
              $("#job").val("");
              $("#product").val("");
              return;
          } else {
               var lstMess = response.Message;
              for (let mess of lstMess) {
                  $('#popup-notification-error').html(mess);
              }
          }
      }
  });
  return;
});

$(".check_close").on('click', () => {
  $("#popup-subscribe-success").attr("hidden", false);
  $("#popup-care-booking").attr("hidden", true);
})



$("#btn_link_one").click(function() {
  $('html, body').animate({
      scrollTop: $("#section-one").offset().top - 122
  }, 1000);
});

$("#btn_link_two").click(function() {
  $('html, body').animate({
      scrollTop: $("#section-two").offset().top - 122
  }, 1000);
});

$("#btn_link_three").click(function() {
  $('html, body').animate({
      scrollTop: $("#section-three").offset().top - 122
  }, 1000);
});

$("#btn_link_contact").click(function() {
  $('html, body').animate({
      scrollTop: $("#form-dang-ky").offset().top - 122
  }, 1000);
});



$('.popup-slick').slick(
  {
    arrows: true,
    infinite: false,
    variableWidth: true,
    // centerMode: true,
  }
);

$(document).ready(function() {
  $("#openPopup").click(function() {
      $("body").addClass("no-scroll");
      $(".popup-showmore").css('display', 'block').animate({
          right: '0'
      }, 1000); 
  });

  $(".close, .popup-showmore").click(function(event) {
      if (event.target == this) {
          $(".popup-showmore").animate({
              right: '-2000px' 
          }, 1000, function() {
              $(this).css('display', 'none');
          });
          $("body").removeClass("no-scroll");
      }
  });
});

$(document).ready(function() {
  $("#btn_menu").click(function() {
      
      $(".popup-menu").css('display', 'block').animate({
          left: '0'
      }, 500); 
      $("body").addClass("no-scroll");
  });

  $(".close, .popup-menu").click(function(event) {
      if (event.target == this) {
          $(".popup-menu").animate({
            left: '-500px' 
          }, 500, function() {
              $(this).css('display', 'none');
          });
          $("body").removeClass("no-scroll");
      }
  });
});




$(document).ready(function(){
  $(window).scroll(function() {
      if ($(this).scrollTop() > 100) { 
          $('#scrollToTop').fadeIn();
      } else {
          $('#scrollToTop').fadeOut();
      }
  });

  $('#scrollToTop').click(function() {
      $('html, body').animate({
          scrollTop: 0
      }, 1000);
  });
});












