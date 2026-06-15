// Navbar Active Link

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach(section => {

const sectionTop = section.offsetTop;

if (pageYOffset >= sectionTop - 200) {
current = section.getAttribute("id");
}

});

navLinks.forEach(link => {

link.classList.remove("active");

if (link.getAttribute("href").includes(current)) {
link.classList.add("active");
}

});

});

// Fade Animation

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.style.opacity = "1";
entry.target.style.transform = "translateY(0)";

}

});

});

document.querySelectorAll("section").forEach(sec => {

sec.style.opacity = "0";
sec.style.transform = "translateY(50px)";
sec.style.transition = "all 0.8s ease";

observer.observe(sec);

});