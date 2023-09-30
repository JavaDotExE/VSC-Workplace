const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}

function scrollDetect(){
    var lastScroll = 0;

    window.onscroll = function() {
        let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

        if (currentScroll > 150) {
            lastScroll = currentScroll;
            document.getElementById("")
        } else {
            document.getElementById("")
        }
    };
    scrollDetect();
}

