const root = document.documentElement;
const toggle = document.getElementById('themeToggle');
const saved = localStorage.getItem('theme');
if (saved) root.dataset.theme = saved;
function syncIcon(){ toggle.textContent = root.dataset.theme === 'dark' ? '☾' : '☼'; }
syncIcon();
toggle.addEventListener('click',()=>{ const next = root.dataset.theme === 'dark' ? 'light' : 'dark'; root.dataset.theme = next; localStorage.setItem('theme',next); syncIcon(); });
document.getElementById('year').textContent = new Date().getFullYear();
const observer = new IntersectionObserver((entries)=>{ entries.forEach(entry=>{ if(entry.isIntersecting){ entry.target.classList.add('visible'); observer.unobserve(entry.target); } }); },{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
