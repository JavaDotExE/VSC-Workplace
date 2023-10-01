const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// direct browser to top right away
if (window.location.hash)
    scroll(0, 0);
// takes care of some browsers issue
setTimeout(function () { scroll(0, 0); }, 1);

$(function () {
    //your current click function
    $('.scroll').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $($(this).attr('href')).offset().top + 'px'
        }, 1000, 'swing');
    });

    // if we have anchor on the url (calling from other page)
    if (window.location.hash) {
        // smooth scroll to the anchor id
        $('html,body').animate({
            scrollTop: $(window.location.hash).offset().top + 'px'
        }, 1000, 'swing');
    }
});