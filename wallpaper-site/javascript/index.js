let slideIndex = 1;
showSlides(slideIndex, 'slideshow1');
showSlides(slideIndex, 'slideshow2');
// showSlides(slideIndex, 'slideshow3');
// showSlides(slideIndex, 'slideshow4');

// Next/previous controls
function plusSlides(n, button) {
    let parentId = button.parentElement.id;
  showSlides(slideIndex += n, parentId);
}

// Thumbnail image controls
function currentSlide(n, button) {
    let parentId = button.parentElement.id;
  showSlides(slideIndex = n, parentId);
}

function showSlides(n, id) {
  let i;
  let container = document.getElementById(id);
  let slides = container.querySelectorAll(".mySlides");
  let dots = document.querySelectorAll(".dot");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}