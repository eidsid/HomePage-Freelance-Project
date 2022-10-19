const openVideobutton = document.getElementById("open_videobtn");
const closeVideobutton = document.getElementById("close_videobtn");
const videoShow = document.getElementById("videoShow");

[openVideobutton, closeVideobutton].forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();

    videoShow.classList.toggle("active");
  });
});
const ToTopButton = document.getElementById("to-top");

ToTopButton.addEventListener("click", () => {
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});
window.addEventListener("scroll", (e) => {
  if (document.documentElement.scrollTop > 500) {
    ToTopButton.classList.add("active");
  } else {
    ToTopButton.classList.remove("active");
  }
});
