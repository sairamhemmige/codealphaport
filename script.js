// Mobile navigation

function toggleMenu() {

    const nav = document.querySelector(".nav-links");

    nav.classList.toggle("active");

}


// Close mobile menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        document
            .querySelector(".nav-links")
            .classList.remove("active");

    });

});


// Contact form

document
    .getElementById("contactForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        alert("Thank you for your message!");

        this.reset();

    });