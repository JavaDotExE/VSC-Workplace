const cards = document.querySelectorAll(".card")

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})

cards.forEach(card => {
    observer.observe(card)
})

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

function openPage(pageName, elmnt) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll', window.scrollY / (document.body.offsetHeight - window.innerHeight));
}, false);

document.getElementById("des").addEventListener("click", () => {
    document.getElementById("scrollcont").scrollTo(top);
    document.getElementById("scrollcont2").scrollTo(top);
})