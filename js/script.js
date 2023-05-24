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
            slidesPerView: 1,
            grid: {
              rows: 1
            },
            spaceBetween: 0,
            slidesPerGroup: 1
      
          },
          600: {
            slidesPerView: 2,
            grid: {
              rows: 1
            },
            spaceBetween: 30,
            slidesPerGroup: 2
          },
      
          800: {
            slidesPerView: 3,
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
		details[i].removeAttribute("open");
	}
}


// ----------------------------------Вращение текста

let kolo = document.querySelector('.kolo_o')

// console.log('+')

// ----- временно

function block (clas) {
    let per = document.querySelector(clas)
    per.style.display = 'none'
    console.log(per)
}
// block('.header')
// block('.general')
// block('.about')
// block('.help')
// block('.section_format')
// block('.consultation')
// block('.life')
// block('.messages')
// block('.questions')
// block('.footer')