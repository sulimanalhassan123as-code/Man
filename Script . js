// Smooth scroll for in-page links
document.addEventListener('click', (e)=>{
  const a = e.target.closest('a[href^="#"]');
  if(!a) return; const id = a.getAttribute('href').slice(1);
  const el = document.getElementById(id); if(!el) return;
  e.preventDefault(); el.scrollIntoView({behavior:'smooth'});
});

// Sparkle effect on action buttons/links, then follow the link after a short delay
function sparkleBurst(x, y, n = 18){
  for(let i=0;i<n;i++){
    const s = document.createElement('span');
    s.className = 'sparkle';
    s.style.left = x + (Math.random()*40-20) + 'px';
    s.style.top  = y + (Math.random()*20-10) + 'px';
    document.body.appendChild(s);
    setTimeout(()=>s.remove(), 900);
  }
}

function hookSparkleLinks(){
  document.querySelectorAll('.sparkle-link').forEach(link => {
    link.addEventListener('click', (e)=>{
      // allow normal middle-click behavior
      if(e.ctrlKey || e.metaKey || e.button===1) return;
      const rect = e.target.getBoundingClientRect();
      const x = rect.left + rect.width/2; const y = rect.top;
      sparkleBurst(x, y);
      const href = link.getAttribute('href');
      e.preventDefault();
      setTimeout(()=>{ window.location.href = href; }, 550);
    });
  });
}

document.addEventListener('DOMContentLoaded', hookSparkleLinks);

// Very light form helper: open mail client with prefilled subject/body
function handleContactSubmit(ev){
  ev.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const subject = encodeURIComponent('New Quote / Inquiry from Website');
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
  window.location.href = `mailto:sulimanalhassan.123.as@gmail.com?subject=${subject}&body=${body}`;
}
