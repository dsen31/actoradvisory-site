'use strict';
// This review is intentionally disconnected. Never simulate a successful submission.
document.querySelectorAll('.preview-form').forEach(form => {
  form.addEventListener('submit', event => {
    event.preventDefault();
    form.querySelector('.status').textContent = 'Nothing has been sent or saved. This form will be connected in a later step.';
  });
});
const loginDialog = document.querySelector('#login-dialog');
document.querySelector('#login-open').addEventListener('click', () => loginDialog.showModal());
document.querySelectorAll('[data-close]').forEach(button => button.addEventListener('click', () => button.closest('dialog').close()));
const legalDialog = document.querySelector('#legal-dialog');
document.querySelectorAll('[data-legal]').forEach(button => button.addEventListener('click', () => {
  document.querySelector('#legal-title').textContent = button.dataset.legal;
  legalDialog.showModal();
}));
const navLinks = [...document.querySelectorAll('.service-nav a')];
const observer = new IntersectionObserver(entries => {
  for (const entry of entries) {
    if (!entry.isIntersecting) continue;
    navLinks.forEach(link => {
      if (link.hash === '#' + entry.target.id) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }
}, { rootMargin: '-15% 0px -55% 0px' });
document.querySelectorAll('.service').forEach(section => observer.observe(section));

// Floating chapter navigation matches the reference's compact scrolled control.
const chapterToggle = document.querySelector('#chapter-toggle');
const chapterLinks = document.querySelector('#chapter-links');
const chapterLabel = document.querySelector('#chapter-label');
function closeChapters(){chapterLinks.hidden=true;chapterToggle.setAttribute('aria-expanded','false');}
chapterToggle.addEventListener('click',()=>{const opening=chapterLinks.hidden;chapterLinks.hidden=!opening;chapterToggle.setAttribute('aria-expanded',String(opening));});
chapterLinks.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{closeChapters();document.querySelector(link.hash)?.focus({preventScroll:true});}));
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&!chapterLinks.hidden){closeChapters();chapterToggle.focus();}});
document.addEventListener('click',event=>{if(!event.target.closest('.service-nav'))closeChapters();});
function updateChapter(){document.querySelector('.header').classList.toggle('scrolled',scrollY>60);let title='Services';document.querySelectorAll('.service').forEach(section=>{if(section.getBoundingClientRect().top<innerHeight*.5)title=section.dataset.chapterLabel||section.querySelector('h2').textContent.replace(/\s+/g,' ').trim();});chapterLabel.textContent=title;}
addEventListener('scroll',updateChapter,{passive:true});updateChapter();

document.querySelectorAll('.back').forEach(link=>link.addEventListener('click',event=>{event.preventDefault();chapterLinks.hidden=false;chapterToggle.setAttribute('aria-expanded','true');chapterLinks.querySelector('a').focus();}));

const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)');
const parallaxScenes = [...document.querySelectorAll('.chapter-scene')];
const hero = document.querySelector('.hero');
let parallaxFrame = 0;
const nextFrame = window.requestAnimationFrame || (callback => setTimeout(callback, 16));
function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}
function updateParallax() {
  parallaxFrame = 0;
  if (reduceMotion.matches) {
    hero?.style.removeProperty('--hero-parallax');
    parallaxScenes.forEach(scene => scene.style.removeProperty('--parallax-y'));
    return;
  }
  if (hero) {
    const heroRect = hero.getBoundingClientRect();
    const heroProgress = clamp(-heroRect.top / Math.max(heroRect.height, 1), 0, 1);
    hero.style.setProperty('--hero-parallax', `${Math.round(heroProgress * 36)}px`);
  }
  parallaxScenes.forEach(scene => {
    const rect = scene.getBoundingClientRect();
    const viewport = innerHeight || document.documentElement.clientHeight;
    if (rect.bottom < 0 || rect.top > viewport) return;
    const progress = clamp((viewport - rect.top) / (viewport + rect.height), 0, 1);
    const offset = Math.round((progress - .5) * 70);
    scene.style.setProperty('--parallax-y', `${offset}px`);
  });
}
function requestParallax() {
  if (!parallaxFrame) parallaxFrame = nextFrame(updateParallax);
}
addEventListener('scroll', requestParallax, { passive: true });
addEventListener('resize', requestParallax);
reduceMotion.addEventListener?.('change', requestParallax);
requestParallax();
