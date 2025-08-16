// Reveal on scroll
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('visible'); } });
},{threshold:0.2});
revealEls.forEach(el=>observer.observe(el));

// Simple lightbox for gallery
const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('img');
const closeBtn = lightbox.querySelector('.close');
document.querySelectorAll('.gallery img').forEach(img=>{
  img.addEventListener('click',()=>{
    lightboxImg.src = img.src;
    lightbox.hidden = false;
  });
});
closeBtn.addEventListener('click',()=> lightbox.hidden = true);
lightbox.addEventListener('click',(e)=>{ if(e.target === lightbox) lightbox.hidden = true; });

// Surprise toggle
const btn = document.getElementById('surpriseBtn');
const surprise = document.getElementById('surprise');
btn?.addEventListener('click',()=>{
  surprise.hidden = !surprise.hidden;
  btn.textContent = surprise.hidden ? 'Tap for a tiny surprise' : 'Hide the surprise';
});
