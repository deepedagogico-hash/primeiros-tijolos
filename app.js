const seedMurals = [
  {id:1,school:'Colégio Estadual do Paraná',city:'Curitiba',nre:'Curitiba',stage:'Ensino Médio',people:64,action:'Ampliar as formas de expressão da aprendizagem.',actions:['Expressão','Acessibilidade','Escuta'],x:53,y:60,color:'blue'},
  {id:2,school:'Colégio Estadual Vicente Rijo',city:'Londrina',nre:'Londrina',stage:'Ensino Médio',people:38,action:'Criar momentos de escuta ativa com os estudantes.',actions:['Escuta','Acolhimento','Autonomia'],x:68,y:25,color:'yellow'},
  {id:3,school:'C.E. Regente Feijó',city:'Ponta Grossa',nre:'Ponta Grossa',stage:'Ensino Médio',people:42,action:'Planejar experiências com diferentes níveis de apoio.',actions:['Inclusão','Colaboração','Acessibilidade'],x:48,y:45,color:'coral'},
  {id:4,school:'C.E. Wilson Joffre',city:'Cascavel',nre:'Cascavel',stage:'Ensino Fundamental',people:31,action:'Fortalecer o pertencimento por meio de projetos coletivos.',actions:['Pertencimento','Colaboração','Escuta'],x:25,y:51,color:'yellow'},
  {id:5,school:'C.E. Francisco Carneiro Martins',city:'Guarapuava',nre:'Guarapuava',stage:'Ensino Médio',people:27,action:'Oferecer escolhas para que cada estudante participe.',actions:['Autonomia','Inclusão','Expressão'],x:43,y:61,color:'blue'},
  {id:6,school:'C.E. Monteiro Lobato',city:'Foz do Iguaçu',nre:'Foz do Iguaçu',stage:'EJA',people:25,action:'Conectar o currículo às histórias e aos territórios.',actions:['Acolhimento','Equidade','Pertencimento'],x:15,y:64,color:'coral'}
];

let murals = [...seedMurals, ...JSON.parse(localStorage.getItem('primeirosTijolosMurals') || '[]')];
const $ = (selector, root=document) => root.querySelector(selector);
const $$ = (selector, root=document) => [...root.querySelectorAll(selector)];
const format = value => new Intl.NumberFormat('pt-BR').format(value);

function updateStats(){
  const stats={schools:murals.length,people:murals.reduce((sum,item)=>sum+Number(item.people),0),murals:murals.length,strategies:murals.reduce((sum,item)=>sum+item.actions.filter(Boolean).length,0),cities:new Set(murals.map(item=>item.city)).size};
  Object.entries(stats).forEach(([key,value])=>$$(`[data-stat="${key}"]`).forEach(el=>el.textContent=format(value)));
}

function fillFilters(){
  const configs=[['filter-nre','nre'],['filter-city','city'],['filter-stage','stage']];
  configs.forEach(([id,key])=>{
    const select=$(`#${id}`); const current=select.value;
    [...new Set(murals.map(item=>item[key]))].sort().forEach(value=>{if(![...select.options].some(o=>o.value===value)) select.add(new Option(value,value))});
    select.value=current;
  });
}

function renderGallery(){
  const nre=$('#filter-nre').value,city=$('#filter-city').value,stage=$('#filter-stage').value;
  const visible=murals.filter(m=>(nre==='all'||m.nre===nre)&&(city==='all'||m.city===city)&&(stage==='all'||m.stage===stage));
  $('#gallery-grid').innerHTML=visible.map(m=>`<article class="mural-card"><div class="card-photo" style="background-color:var(--${m.color||'blue'})">${m.photo?`<img src="${m.photo}" alt="Mural da ${escapeHtml(m.school)}">`:''}<span>${format(m.people)} participantes</span></div><div class="card-body"><span class="card-place">${escapeHtml(m.city)} · NRE ${escapeHtml(m.nre)}</span><h3>${escapeHtml(m.school)}</h3><div class="card-action"><small>Ação destaque</small>“${escapeHtml(m.action)}”</div></div></article>`).join('');
  $('#empty-state').hidden=visible.length>0;
}

function renderMap(){
  $('#map-markers').innerHTML=murals.map((m,i)=>`<button class="marker" style="left:${m.x||20+(i*11)%65}%;top:${m.y||20+(i*17)%65}%" data-id="${m.id}" aria-label="Ver ${escapeHtml(m.school)}"></button>`).join('');
  $$('.marker').forEach(marker=>marker.addEventListener('click',()=>{
    const m=murals.find(item=>String(item.id)===marker.dataset.id);
    $('#map-detail').innerHTML=`<small>${escapeHtml(m.city)} · ${escapeHtml(m.nre)}</small><strong>${escapeHtml(m.school)}</strong><span>${escapeHtml(m.action)}</span>`;
  }));
}

function renderDashboard(){
  const counts={}; murals.flatMap(m=>m.actions).filter(Boolean).forEach(a=>counts[a]=(counts[a]||0)+1);
  $('#ranking-list').innerHTML=Object.entries(counts).sort((a,b)=>b[1]-a[1]).slice(0,3).map(([name,count],i)=>`<li><b>0${i+1}</b><span>${escapeHtml(name)}</span><small>${count}×</small></li>`).join('');
  const nres={}; murals.forEach(m=>nres[m.nre]=(nres[m.nre]||0)+1); const max=Math.max(...Object.values(nres));
  $('#bar-chart').innerHTML=Object.entries(nres).sort((a,b)=>b[1]-a[1]).slice(0,6).map(([name,count])=>`<div class="bar-row"><span>${escapeHtml(name)}</span><div class="bar-track"><div class="bar-fill" style="width:${count/max*100}%"></div></div><b>${count}</b></div>`).join('');
}

function escapeHtml(value=''){const div=document.createElement('div');div.textContent=value;return div.innerHTML}
function refresh(){updateStats();fillFilters();renderGallery();renderMap();renderDashboard()}

const dialog=$('#mural-dialog');
$$('.open-form').forEach(button=>button.addEventListener('click',()=>dialog.showModal()));
$('.dialog-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog) dialog.close()});
$('.menu-toggle').addEventListener('click',event=>{const open=$('#menu').classList.toggle('open');event.currentTarget.setAttribute('aria-expanded',open)});
$$('#menu a').forEach(a=>a.addEventListener('click',()=>$('#menu').classList.remove('open')));
$$('#filter-nre,#filter-city,#filter-stage').forEach(select=>select.addEventListener('change',renderGallery));
$('#clear-filters').addEventListener('click',()=>{$$('.filters select').forEach(s=>s.value='all');renderGallery()});
$('[name="story"]').addEventListener('input',event=>$('.counter').textContent=`${event.target.value.length}/300`);
$$('[data-placeholder]').forEach(link=>link.addEventListener('click',event=>{event.preventDefault();showToast('Material pronto para receber o link oficial.')}));

$('#mural-form').addEventListener('submit',event=>{
  event.preventDefault(); const form=event.currentTarget; if(!form.reportValidity()) return;
  const data=Object.fromEntries(new FormData(form)); const file=form.elements.photo.files[0];
  const save=photo=>{
    const item={id:Date.now(),school:data.school,city:data.city,nre:data.nre,stage:data.stage,people:Number(data.people),action:data.action1,actions:[data.action1,data.action2,data.action3].filter(Boolean),story:data.story,photo,x:25+Math.random()*45,y:20+Math.random()*50,color:'blue'};
    const local=JSON.parse(localStorage.getItem('primeirosTijolosMurals')||'[]'); local.unshift(item);
    try{localStorage.setItem('primeirosTijolosMurals',JSON.stringify(local))}catch(e){item.photo='';local[0]=item;localStorage.setItem('primeirosTijolosMurals',JSON.stringify(local))}
    murals=[...seedMurals,...local]; refresh(); dialog.close(); form.reset(); $('.counter').textContent='0/300'; showToast('Mural registrado com sucesso!'); location.hash='#galeria';
  };
  const reader=new FileReader(); reader.onload=()=>save(reader.result); reader.onerror=()=>save(''); reader.readAsDataURL(file);
});

function showToast(message){const toast=$('#toast');toast.textContent=message;toast.classList.add('show');clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>toast.classList.remove('show'),3200)}
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.08});
$$('.reveal').forEach(el=>observer.observe(el));
refresh();
