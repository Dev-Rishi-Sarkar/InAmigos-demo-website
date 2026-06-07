
const nav = document.querySelector('.nav-links');
const menuBtn = document.querySelector('.menu-btn');
if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => nav.classList.toggle('open'));
}

const progress = document.querySelector('.progress');
const backtop = document.querySelector('.backtop');

function onScroll(){
  const h = document.documentElement;
  const scrolled = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
  if (progress) progress.style.width = `${scrolled}%`;
  if (backtop) backtop.classList.toggle('show', window.scrollY > 450);
}
window.addEventListener('scroll', onScroll);
onScroll();

const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      entry.target.classList.add('show');
      io.unobserve(entry.target);
    }
  });
},{threshold:0.15});
revealEls.forEach(el => io.observe(el));

document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
