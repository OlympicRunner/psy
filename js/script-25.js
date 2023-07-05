function swiper () {
    let eventsSlider = new Swiper(".massages-swiper", {
        slidesPerView: 1,
        slidesPerGroup: 1,
        // navigation: true,
        grid: {
          rows: 1
        },
        spaceBetween: 30,
        loop: true,
        navigation: {
          nextEl: ".events__next",
          prevEl: ".events__prev"
        },
        pagination: {
          el: '.events-swiper__pagination',
          type: 'bullets',
          clickable: true,
          // dynamicBullets: 3
          dynamicMainBullets: 1
        },
      
        breakpoints: {
          120: {
            slidesPerView: 3,
            grid: {
              rows: 1
            },
            spaceBetween: 0,
            slidesPerGroup: 1
      
          },
          620: {
            slidesPerView: 3,
            grid: {
              rows: 1
            },
            spaceBetween: 30,
            slidesPerGroup: 2
          },
      
          800: {
            slidesPerView: 5,
            grid: {
              rows: 1
            },
            spaceBetween: 30,
            // slidesPerGroup: 2
          },
          1200: {
            slidesPerView: 5,
            grid: {
              rows: 1
            },
            spaceBetween: 50,
          }
        },
      
        a11y: {
          prevSlideMessage: 'Предыдущие слайды',
          nextSlideMessage: 'Следующие слайды',
          firstSlideMessage: 'Предыдущие слайды',
          lastSlideMessage: 'Следующие слайды',
        }
      });
}

swiper ()

var details = document.querySelectorAll("details");
for(i=0;i<details.length;i++) {
	details[i].addEventListener("toggle", accordion);
}
function accordion(event) {
  if (!event.target.open) return;
	var details = event.target.parentNode.children;
	for(i=0;i<details.length;i++) {
		if (details[i].tagName != "DETAILS" || !details[i].hasAttribute('open') || event.target == details[i]) continue;
		// details[i].removeAttribute("open");
	}
}


// ----------------------------------Вращение текста

let menuBurger = document.querySelector('.berger')

menuBurger.addEventListener('click', () => {
  let menu = document.createElement('menu')
  menu.classList.add('burger_menu')
  let menuBurger = document.querySelector('.berger')
  menuBurger.style.visibility = 'hidden'
  let main = document.querySelector('main')
  main.append(menu)
  
  function addLi (text, link) {
    let menuLi = document.createElement('a')
    menuLi.classList.add('burger_a')
    menuLi.textContent = text
    menuLi.setAttribute('href', link)
    menu.append(menuLi)
  }

  function X () {

    let X = document.createElement('button')
    X.textContent = 'x'
    X.classList.add('x')
    main.append(X)

    X.addEventListener('click', () => {
      
      let menu = document.querySelector('.burger_menu')
      menu.remove()
      menuBurger.style.visibility = 'visible'

      X.remove()

    })
  }

  X ()
  addLi('ПРО МЕНЕ', '#about')
  // addLi('НАПРЯМКИ', '#')
  addLi('ПОСЛУГИ', '#help')
  addLi('ВЫДГУКИ', '#messeges')
  addLi('FAQ', '#questions')
  addLi('КОНТАКТИ', '#contacts')
})

// $(document).ready(function(){
//   $("#header_ul").on("click","a", function (event) {
//       event.preventDefault();
//       var id  = $(this).attr('href'),
//           top = $(id).offset().top;
//       $('body,html').animate({scrollTop: top}, 1000);
//   });
// });


function addVis (per1, per2, display) {
  let btnMyEduc = document.querySelector(per1)
  btnMyEduc.addEventListener('click', () => {
    let educ = document.querySelector(per2)
    educ.style.display = display
  })
}

function offVis (per1, per2, display) {
  let btnX = document.querySelector(per1)
  btnX.addEventListener('click', () => {
    let educ = document.querySelector(per2)
    educ.style.display = display
  })
}

addVis ('.about_btn', '.about_box', 'block')
offVis ('.about_x', '.about_box', 'none')
let aboutBtn = document.querySelector('.about_btn')
aboutBtn.addEventListener('click', () => {
  window.location.href= '#about_box'
}) 

addVis ('.general_play', '.general_video', 'flex')
offVis ('.general_X', '.general_video', 'none')

// let iframe = document.querySelector()

function controlVideo(vidFunc) {
  var iframe = document.getElementsByTagName("iframe")[0].contentWindow;
  iframe.postMessage(
    '{"event":"command","func":"' + vidFunc + '","args":""}',
    "*"
  )}

  function stop() {
    let video = document.getElementById("videoId")
    video.contentWindow.postMessage( '{"event":"command", "func":"stopVideo", "args":""}', '*');
}

let shadow = document.querySelector('.shadow')
let generalPlay = document.querySelector('.general_play')
let body = document.querySelector('body')

generalPlay.addEventListener('click', () => {
  window.location.href= '#general'
  shadow.style.position = "absolute"
  body.style.overflow = 'hidden'
})

let x = document.querySelector('.general_X')
x.addEventListener('click', () => {
  shadow.style.position = 'relative'
  body.style.overflow = 'visible'
})

let aboutInfo = document.querySelector('.about_btn')
let aboutX = document.querySelector('.about_x')

aboutInfo.addEventListener('click', () => {
  // window.location.href= '#general'
  shadow.style.position = "absolute"
  body.style.overflow = 'hidden'
})

aboutX.addEventListener('click', () => {
  shadow.style.position = 'relative'
  body.style.overflow = 'visible'
})




    let viber = document.querySelector('.social_viber')
viber.addEventListener('click', () => {
      if (window.innerWidth > 540) {
        alert('Обращайтесь в вайбер по номеру 380937957864')
      }
    
    })


let aboutSlider = new Swiper(".about_box", {
  slidesPerView: 1,
  slidesPerGroup: 1,
  // navigation: true,
  grid: {
    rows: 1
  },
  
  spaceBetween: 30,
  loop: false,
  navigation: {
    nextEl: ".about-btn-right",
    prevEl: ".about-btn-left"
  },

  pagination: {
    el: '.events-swiper__pagination',
    type: 'bullets',
    clickable: true,
    // dynamicBullets: 3
    dynamicMainBullets: 1
  },

  breakpoints: {
    120: {
      slidesPerView: 1,
      grid: {
        rows: 1
      },
      spaceBetween: 40,
      slidesPerGroup: 1

    },
    750: {
      slidesPerView: 2,
      grid: {
        rows: 1
      },
      spaceBetween: 20,
      slidesPerGroup: 1
    },

    800: {
      slidesPerView: 2,
      grid: {
        rows: 1
      },
      spaceBetween: 30,
      // slidesPerGroup: 2
    },
    1200: {
      slidesPerView: 3,
      grid: {
        rows: 1
      },
      spaceBetween: 50,
    }
  },

  a11y: {
    prevSlideMessage: 'Предыдущие слайды',
    nextSlideMessage: 'Следующие слайды',
    firstSlideMessage: 'Предыдущие слайды',
    lastSlideMessage: 'Следующие слайды',
  }
});

var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("380 (99)-999-99-99");

im.mask(selector);

new JustValidate('#myForm', {
    rules: {
        name: {
            required: true,
            minLength: 2,
            maxLength: 10
        },
        tel: {
            required: true,
            function: (name, value) => {
                const phone = selector.inputmask.unmaskedvalue()
                return Number(phone) && phone.length === 10
            }
        },
        mail: {
            required: true,
            email: true
        }
    }

})


// let btn_new_consultation = document.querySelector('.general_btn')


