const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
    let current = "";

    // Determine which section is currently in view
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute("id");
        }
    });

    // Remove active class from all nav links and add it to the current section link
    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});

    // Select the menu icon and navlist
    const menuIcon = document.querySelector("#menu-icon");
    const navlist = document.querySelector(".navlist");

    // Add click event to toggle the navlist visibility
    menuIcon.addEventListener("click", () => {
        navlist.classList.toggle("active");
    });
