const menuButton = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

if (menuButton && navMenu) {
    menuButton.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
}
const buttons =
document.querySelectorAll(".faq-question");
buttons.forEach(function(button) {
button.addEventListener("click", function() {
    const span =
    button.querySelector("span");
    const answer =
    button.nextElementSibling; 
    button.classList.toggle("active");
    answer.classList.toggle("active");
    if (button.classList.contains("active")) {
        span.textContent = "−";
        } else {
            span.textContent = "+";
        }

    });
});

const getStartedButton = document.getElementById("get-started");
const contactSection = document.getElementById("contact");

if (getStartedButton && contactSection) {
    getStartedButton.addEventListener("click", function() {
        contactSection.scrollIntoView({behavior: "smooth"
        });
    });
}


const servicesButton = document.getElementById("services-btn");
const servicesSection = document.getElementById("services");

if (servicesButton && servicesSection) {
    servicesButton.addEventListener("click", function() {
        servicesSection.scrollIntoView({behavior: "smooth"
        });
    });
}


const contactForm = document.getElementById("contact-form");
const message = document.getElementById("message");

if (contactForm && message) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        message.textContent =
            "Thank you! Your message has been received";

        contactForm.reset();
    });
}