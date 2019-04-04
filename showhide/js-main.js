function showHide(targetId, hideId, showId) {
    let elTarget = document.getElementById(targetId);
    let elHide = document.getElementById(hideId);
    let elShow = document.getElementById(showId);
 
    elShow.classList.add('hide');
 
    elHide.addEventListener('click', function(ev) {
        elTarget.classList.add('hide');
        elHide.classList.add('hide');
        elShow.classList.remove('hide');
    });
 
    elShow.addEventListener('click', function(ev) {
        elTarget.classList.remove('hide');
        elHide.classList.remove('hide');
        elShow.classList.add('hide');
    });
 }
 
 showHide('shopping-list', 'hide-list', 'show-list');
 showHide('instructions-list', 'hide-instructions', 'show-instructions');