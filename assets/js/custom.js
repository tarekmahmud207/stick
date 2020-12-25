// welcome slider
var swiper = new Swiper('.swiper-container.one', {
    speed: 600,
    parallax: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

// gallery filtering
  $(document).ready(function(){
    $('.list').click(function(){
      const value = $(this).attr('data-filter');
      if (value == 'all'){
        $('.itemBox').show('1000');
      }
      else {
        $('.itemBox').not('.'+value).hide('1000');
        $('.itemBox').filter('.'+value).show('1000');
      }
    })
  })



// testimonial slider
  var swiper = new Swiper('.swiper-container.two', {
    slidesPerView: 2,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });