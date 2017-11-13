let teamClass = 'teammates__trigger_active';
let teamLinks = document.getElementsByClassName('teammates__trigger');
let teamIndex ;



for(let i=0; i<teamLinks.length; i++) {
    teamLinks[i].addEventListener('click', e => {
        e.preventDefault();
        closeAll();

        if (teamIndex == i) {
            teamIndex = null;
            teamLinks[i].classList.remove(teamClass);
        } else {
            teamIndex = i;
            teamLinks[i].classList.add(teamClass);
        }
    });
}

function closeAll(){
  for(let j=0; j<teamLinks.length; j++) {
    teamLinks[j].classList.remove(teamClass);
  }
}