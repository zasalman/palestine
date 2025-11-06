<<<<<<< HEAD
const menuIcon = document.getElementById("menu-icon");
const sidebar = document.getElementById("sidebar");

menuIcon.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

const links = sidebar.querySelectorAll("a");
links.forEach(link => {
  link.addEventListener("click", () => {
    sidebar.classList.remove("active");
  });
});
=======
const menuIcon = document.getElementById("menu-icon");
const sidebar = document.getElementById("sidebar");

menuIcon.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

const links = sidebar.querySelectorAll("a");
links.forEach(link => {
  link.addEventListener("click", () => {
    sidebar.classList.remove("active");
  });
});
>>>>>>> d0e0d4b (firsts)
