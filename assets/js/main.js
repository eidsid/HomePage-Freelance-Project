let openVideobutton = document.getElementById("open_videobtn");
let closeVideobutton = document.getElementById("close_videobtn");
const videoShow = document.getElementById("videoShow");
console.log("welcome");
[openVideobutton, closeVideobutton].forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(videoShow);
    videoShow.classList.toggle("active");
  });
});
