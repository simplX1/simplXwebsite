//Variable Declarations START
const hamburger = document.querySelector(".hamburger");
const mobile_menu = document.querySelector('.mobile-nav');
//Variable Declarations END -------------------
//hamburger icon onclick listener START
hamburger.addEventListener('click', function () {
    //toggle hambuger animation
    hamburger.classList.toggle("animate");
    //calls styling in header.scss which makes the menu popout
    mobile_menu.classList.toggle('is-active');
    //this will make sure that when the hambuger is clicked and the menu is shown
    //it will make sure the user can't scroll or can depending on the overlay state
    //if hidden then the menu is open but if not open then set overflow to hidden
    if (document.body.style.overflow == 'hidden') {
        $("body").css("overflow", 'unset');
    }
    else {
        $("body").css("overflow", 'hidden');
    }
});
//hamburger icon onclick listener END -----------