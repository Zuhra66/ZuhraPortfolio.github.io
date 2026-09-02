const menu=document.querySelector('.menu');
const nav=document.querySelector('.site-header nav');
if(menu&&nav){menu.addEventListener('click',()=>{nav.classList.toggle('open');menu.setAttribute('aria-expanded',nav.classList.contains('open'));});}
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.08});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
document.querySelectorAll('[data-read-more]').forEach(btn=>btn.addEventListener('click',e=>{e.preventDefault();const target=document.getElementById(btn.dataset.readMore);if(!target)return;target.classList.toggle('open');btn.textContent=target.classList.contains('open')?'Read less':'Read more';}));
/* =========================================
   CSUMB COURSE FILTERS
========================================= */

document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".course-filter");
    const courseCards = document.querySelectorAll(".course-card");

    if (!filterButtons.length || !courseCards.length) return;

    filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const filter = button.dataset.filter;

            filterButtons.forEach((btn) => {
                btn.classList.remove("active");
            });

            button.classList.add("active");

            courseCards.forEach((card) => {
                const category = card.dataset.category;

                if (filter === "all" || category === filter) {
                    card.classList.remove("hidden");
                } else {
                    card.classList.add("hidden");
                }
            });
        });
    });
});