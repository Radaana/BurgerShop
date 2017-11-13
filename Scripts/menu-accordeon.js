let menuClass = 'menu__trigger_active';
let menuLinks = document.getElementsByClassName('menu__trigger');
let menuIndex ;



for(let i=0; i<menuLinks.length; i++) {
    menuLinks[i].addEventListener('click', e => {
        e.preventDefault();
        closeAll();

        if (menuIndex == i) {
            menuIndex = null;
            menuLinks[i].classList.remove(menuClass);
        } else {
            menuIndex = i;
            menuLinks[i].classList.add(menuClass);
        }
    });
}

function closeAll(){
  for(let j=0; j<menuLinks.length; j++) {
    menuLinks[j].classList.remove(menuClass);
  }
}