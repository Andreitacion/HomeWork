const select1 = document.querySelector('.select1');

// const tabsBtn = document.querySelectorAll(".tabs__nav-btn");
// const tabsItams = document.querySelectorAll(".tabs__item");

// tabsBtn.forEach(onTabClick);

// function onTabClick(item) {
//     item.addEventListener("click", function(){
//         let currentBtn = item;
//         let tabId = currentBtn.getAttribute("data-tab");
//         let currentTab = document.querySelector(tabId);

//         if( ! currentBtn.classList.contains('active')) {
//             tabsBtn.forEach(function(item){
//                 item.classList.remove('active');
//             });
//             tabsItams.forEach(function(item){
//                 item.classList.remove('active');
//             });
            
//             currentBtn.classList.add('active');
//             currentBtn.classList.add('active');
//         }
//     });
// }

// document.querySelector('.tabs__nav-btn').click();


let tabContent = document.querySelectorAll('.tabs__item');
let tabBtnWrapper = document.querySelector('.tabs__nav');
let tabBtn = document.querySelectorAll('.tabs__nav-btn');

function hideTabContent(){
    tabContent.forEach(tab=>{
        tab.style.display='none';
    })
    tabBtn.forEach(tab=>{
        tab.classList.remove('.tabs__nav-btn_active')
    })
}

function showTabContent(i = 0) {
    tabContent[i].style.display = 'block';
    tabBtn[i].classList.add('tabs__nav-btn_active');
}

tabBtnWrapper.addEventListener("click", function (e) {
    const target = e.target;
    if (target && target.classList.contains('tabs__nav-btn')) {

        tabBtn.forEach((item, i) => {
            if (item == target) {
                hideTabContent();
                showTabContent(i);
            }
        });

    }
});

hideTabContent();
showTabContent();

$(function () {

    $('.testimonials__slider').slick({
      arrows: false,
      appendDots: $('.testimonials__dots'),
      waitForAnimate: false,
    })
    $('.testimonials__prev').on('click', function (e) {
      e.preventDefault()
      $('.testimonials__slider').slick('slickPrev')
    })
    $('.testimonials__next').on('click', function (e) {
      e.preventDefault()
      $('.testimonials__slider').slick('slickNext')
    })
  
    $('.program__acc-link').on('click', function (e) {
      e.preventDefault()
      if ($(this).hasClass('program__acc-link--active')) {
        $(this).removeClass('program__acc-link--active')
        $(this).children('.program__acc-text').slideUp()
      } else {
        $('.program__acc-link').removeClass('program__acc-link--active')
        $('.program__acc-text').slideUp()
        $(this).addClass('program__acc-link--active')
        $(this).children('.program__acc-text').slideDown()
      }
    })
  
  
    setInterval(() => {
      if ($(window).scrollTop() > 0 && $('.header__top').hasClass('header__top--open') === false) {
        $('.burger').addClass('burger--follow')
      } else {
        $('.burger').removeClass('burger--follow')
      }
    }, 0)
    $('.burger, .overlay, .header__top a').on('click', function (e) {
      e.preventDefault()
      $('.header__top').toggleClass('header__top--open')
      $('.overlay').toggleClass('overlay--show')
    })
  })
