const grid=document.getElementById('grid');
let apps=[];

fetch('assets/data/apps.json')
.then(r=>r.json())
.then(d=>{apps=d;render(apps)});

function render(data){
 grid.innerHTML='';
 data.forEach(a=>{
  const el=document.createElement('a');
  el.className='card';
  el.href='go.php?id='+a.id;
  el.innerHTML=`<div class="icon-wrap"><img src="${a.icon}"></div>
  <h3>${a.name}</h3><p>${a.url}</p>`;
  grid.appendChild(el);
 });
}

document.querySelectorAll('.nav a').forEach(b=>{
 b.onclick=e=>{
  e.preventDefault();
  document.querySelectorAll('.nav a').forEach(x=>x.classList.remove('active'));
  b.classList.add('active');
  const c=b.dataset.category;
  render(c==='all'?apps:apps.filter(a=>a.category===c));
 }
});
