var toggle = document.querySelector('.main-nav__toggle');
var menu1 = document.querySelector('.site-list');
var menu2 = document.querySelector('.user-list');

function test(menu) {
  return function (evt) {
    menu.forEach(function (item, menu){
      if (item.classList.contains('show')) {
        item.classList.remove('show');
        evt.target.classList.remove('main-nav__toggle--close');
      } else {
        evt.target.classList.add('main-nav__toggle--close');
        item.classList.add('show');
      }
    });
  }
}

toggle.addEventListener('click', test([menu1, menu2]));
