// Dark Mode
document.getElementById("darkToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Scroll animation
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = 'running';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in, .slide-up').forEach(el => observer.observe(el));

// Testimonial Auto Slider
let current = 0;
const testimonials = document.querySelectorAll(".testimonial");
setInterval(() => {
  testimonials[current].classList.remove("active");
  current = (current + 1) % testimonials.length;
  testimonials[current].classList.add("active");
}, 4000);
// Attach lightbox events
document.querySelectorAll('.insta-gallery img').forEach(img=>{
  img.addEventListener('click',()=>{
    document.getElementById('lb-img').src = img.src;
    document.getElementById('lb').classList.add('show');
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".insta-item");
  const lightbox = document.createElement("div");
  lightbox.classList.add("lightbox");
  document.body.appendChild(lightbox);

  const img = document.createElement("img");
  lightbox.appendChild(img);

  items.forEach(item => {
    item.addEventListener("click", e => {
      e.preventDefault();
      const src = item.getAttribute("href");
      img.src = src;
      lightbox.style.display = "flex";
    });
  });

  lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
  });
});
