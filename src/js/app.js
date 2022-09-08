let init = false;

let swiperMode = () => {
   let mobile = window.matchMedia('(min-width: 0px) and (max-width: 767px)');

    if(mobile.matches) {
         if (!init) {
             init = true;
             swiper = new Swiper('.swiper', {
                slidesPerView: "auto",
                spaceBetween: 16,
                loop: false,
                pagination: {
                    el: '.swiper-pagination',
                    clickable:true,
                    type: 'bullets',
                  },
             });
         }
     }
     else if (!mobile.matches && init)  {
         swiper.destroy(true,true);
       init = false;
     }
  }

window.onload = function() {
    swiperMode();
}

window.onresize = function() {
    swiperMode();
}

let buttonOpenFullList = document.querySelector(".repair-menu__show-all"); // кнопка
let list = document.querySelector(".repair-menu__list"); // список

  buttonOpenFullList.addEventListener("click", function () {
    buttonOpenFullList.classList.toggle("repair-menu__show-all--active");
  list.classList.toggle("repair-menu__list--visible-item"); //разворачиваю список

  if (buttonOpenFullList.classList.contains("repair-menu__show-all")) {
    buttonOpenFullList.textContent = 'Показать все';
  }

  if (buttonOpenFullList.classList.contains("repair-menu__show-all--active")) {
    buttonOpenFullList.textContent = 'Скрыть';
  }
})

