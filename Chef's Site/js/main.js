const header = document.querySelector('header');

function handleScroll() {
    if (window.scrollY > 0) {
        header.classList.add('scrolled'); 
    } 
    else {
        header.classList.remove('scrolled');
    }
}

window.addEventListener('scroll', handleScroll);


                // for slider




$('.slider__bottom').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    dots:false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows:false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots:false,
          arrows:false
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots:false,
          arrows:false
        }
      },
      {
        breakpoint: 280,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots:false,
          arrows:false
        }
      }
    ]
});


                            // for team



$('.team__bottom').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows:false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots:false,
          arrows:false
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots:false,
          arrows:false
        }
      },
      {
        breakpoint: 280,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots:false,
          arrows:false
        }
      }
    ]
});



let language = document.querySelector('.lang')
let flag = document.querySelector('.flags')

language.addEventListener('click',function(e){
  e.preventDefault();
  flag.classList.toggle('active1_flag');
})




let menu = document.querySelector('.menu')
let sidebar = document.querySelector(".sidebar")
let close = document.querySelector('.close')

menu.onclick = function() {
  sidebar.classList.add("active_menu")
}

close.onclick = function() {
  sidebar.classList.remove("active_menu")
}





let scroll = document.querySelector('a i');
let footer = document.querySelector('footer')

window.addEventListener('scroll', () => {
  if(window.pageYOffset > 100) {
    scroll.classList.add('active_scroll');
  }
  else{
    scroll.classList.remove('active_scroll');
  }
})




function scrollToTop() {
  // Scroll to the top of the document smoothly
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
}

scrollButton.addEventListener('click', scrollToTop);










