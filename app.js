const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyDA1QsojZugAo4j1ZeU_si21GVHAf0ShH4AYoCuqrepPPy3hwcEMGMGPLhbIEHgiFy/exec';

/* ── 1. MAPA — coordenadas reais dos municípios PR ── */
const PR_BOUNDS = { latMin:-26.72, latMax:-22.52, lonMin:-54.62, lonMax:-48.02 };

function geoToSVG(lat, lon) {
  const x = ((lon - PR_BOUNDS.lonMin) / (PR_BOUNDS.lonMax - PR_BOUNDS.lonMin)) * 100;
  const y = ((PR_BOUNDS.latMax - lat) / (PR_BOUNDS.latMax - PR_BOUNDS.latMin)) * 100;
  return {
    x: Math.min(Math.max(x * 0.78 + 8, 8), 90),
    y: Math.min(Math.max(y * 0.82 + 7, 7), 88)
  };
}

const CITY_COORDS = {
  'Curitiba':            { lat:-25.4290, lon:-49.2671 },
  'São José dos Pinhais':{ lat:-25.5350, lon:-49.2083 },
  'Araucária':           { lat:-25.5927, lon:-49.4009 },
  'Colombo':             { lat:-25.2919, lon:-49.2242 },
  'Pinhais':             { lat:-25.4433, lon:-49.1919 },
  'Almirante Tamandaré': { lat:-25.3225, lon:-49.3075 },
  'Campo Largo':         { lat:-25.4590, lon:-49.5280 },
  'Fazenda Rio Grande':  { lat:-25.6678, lon:-49.3069 },
  'Paranaguá':           { lat:-25.5196, lon:-48.5088 },
  'Matinhos':            { lat:-25.8183, lon:-48.5417 },
  'Guaratuba':           { lat:-25.8833, lon:-48.5750 },
  'Antonina':            { lat:-25.4280, lon:-48.7119 },
  'Morretes':            { lat:-25.4742, lon:-48.8342 },
  'Londrina':            { lat:-23.3045, lon:-51.1696 },
  'Cambé':               { lat:-23.2753, lon:-51.2778 },
  'Ibiporã':             { lat:-23.2672, lon:-51.0494 },
  'Rolândia':            { lat:-23.3103, lon:-51.3714 },
  'Arapongas':           { lat:-23.4161, lon:-51.4253 },
  'Apucarana':           { lat:-23.5503, lon:-51.4611 },
  'Maringá':             { lat:-23.4205, lon:-51.9333 },
  'Sarandi':             { lat:-23.4411, lon:-51.8742 },
  'Paiçandu':            { lat:-23.4608, lon:-52.0569 },
  'Marialva':            { lat:-23.4883, lon:-51.7981 },
  'Paranavaí':           { lat:-23.0736, lon:-52.4656 },
  'Cianorte':            { lat:-23.6611, lon:-52.6044 },
  'Umuarama':            { lat:-23.7661, lon:-53.3253 },
  'Cruzeiro do Oeste':   { lat:-23.7814, lon:-53.0728 },
  'Loanda':              { lat:-22.9256, lon:-53.1403 },
  'Terra Rica':          { lat:-22.7100, lon:-52.6303 },
  'Cornélio Procópio':   { lat:-23.1822, lon:-50.6478 },
  'Bandeirantes':        { lat:-23.1092, lon:-50.3619 },
  'Jacarezinho':         { lat:-23.1608, lon:-49.9694 },
  'Santo Antônio da Platina':{ lat:-23.3019, lon:-50.0767 },
  'Wenceslau Braz':      { lat:-23.8711, lon:-49.8019 },
  'Ibaiti':              { lat:-23.8483, lon:-50.1903 },
  'Campo Mourão':        { lat:-24.0456, lon:-52.3833 },
  'Goioerê':             { lat:-24.1878, lon:-53.0181 },
  'Assis Chateaubriand': { lat:-24.4181, lon:-53.5192 },
  'Cascavel':            { lat:-24.9578, lon:-53.4553 },
  'Toledo':              { lat:-24.7244, lon:-53.7428 },
  'Foz do Iguaçu':       { lat:-25.5478, lon:-54.5882 },
  'Medianeira':          { lat:-25.2939, lon:-54.0939 },
  'Marechal Cândido Rondon':{ lat:-24.5578, lon:-54.0578 },
  'Francisco Beltrão':   { lat:-26.0811, lon:-53.0553 },
  'Pato Branco':         { lat:-26.2289, lon:-52.6689 },
  'Dois Vizinhos':       { lat:-25.7511, lon:-53.0572 },
  'Guarapuava':          { lat:-25.3956, lon:-51.4578 },
  'Pitanga':             { lat:-24.7533, lon:-51.7628 },
  'Laranjeiras do Sul':  { lat:-25.4078, lon:-52.4139 },
  'Ponta Grossa':        { lat:-25.0945, lon:-50.1633 },
  'Telêmaco Borba':      { lat:-24.3239, lon:-50.6158 },
  'Irati':               { lat:-25.4669, lon:-50.6503 },
  'União da Vitória':    { lat:-26.2281, lon:-51.0872 },
  'Ivaiporã':            { lat:-24.2489, lon:-51.6833 }
};

function getCityCoords(cityName) {
  if (!cityName) return { x: 45 + Math.random()*10, y: 40 + Math.random()*10 };
  if (CITY_COORDS[cityName]) return geoToSVG(CITY_COORDS[cityName].lat, CITY_COORDS[cityName].lon);
  const key = Object.keys(CITY_COORDS).find(k => cityName.toLowerCase().includes(k.toLowerCase()));
  if (key) return geoToSVG(CITY_COORDS[key].lat, CITY_COORDS[key].lon);
  return { x: 25 + Math.random()*45, y: 20 + Math.random()*50 };
}

/* ── 2. DADOS DE EXEMPLO ── */
const seedMurals = [
  {id:1,school:'Colégio Estadual do Paraná',city:'Curitiba',nre:'Curitiba',stage:'Ensino Médio',people:64,action:'Ampliar as formas de expressão da aprendizagem.',actions:['Expressão','Acessibilidade','Escuta'],color:'blue'},
  {id:2,school:'Colégio Estadual Vicente Rijo',city:'Londrina',nre:'Londrina',stage:'Ensino Médio',people:38,action:'Criar momentos de escuta ativa com os estudantes.',actions:['Escuta','Acolhimento','Autonomia'],color:'yellow'},
  {id:3,school:'C.E. Regente Feijó',city:'Ponta Grossa',nre:'Ponta Grossa',stage:'Ensino Médio',people:42,action:'Planejar experiências com diferentes níveis de apoio.',actions:['Inclusão','Colaboração','Acessibilidade'],color:'coral'},
  {id:4,school:'C.E. Wilson Joffre',city:'Cascavel',nre:'Cascavel',stage:'Ensino Fundamental',people:31,action:'Fortalecer o pertencimento por meio de projetos coletivos.',actions:['Pertencimento','Colaboração','Escuta'],color:'yellow'},
  {id:5,school:'C.E. Francisco Carneiro Martins',city:'Guarapuava',nre:'Guarapuava',stage:'Ensino Médio',people:27,action:'Oferecer escolhas para que cada estudante participe.',actions:['Autonomia','Inclusão','Expressão'],color:'blue'},
  {id:6,school:'C.E. Monteiro Lobato',city:'Foz do Iguaçu',nre:'Foz do Iguaçu',stage:'EJA',people:25,action:'Conectar o currículo às histórias e aos territórios.',actions:['Acolhimento','Equidade','Pertencimento'],color:'coral'}
].map(m => ({ ...m, ...getCityCoords(m.city) }));

const COLORS = ['blue','yellow','coral'];
let murals = [...seedMurals];

const $ = (sel, root=document) => root.querySelector(sel);
const $$ = (sel, root=document) => [...root.querySelectorAll(sel)];
const format = v => new Intl.NumberFormat('pt-BR').format(v);

/* ── 3. CARREGAR DO SHEETS ── */
async function loadFromSheets() {
  try {
    const res = await fetch(SCRIPT_URL);
    if (!res.ok) throw new Error('Erro');
    const data = await res.json();
    if (!Array.isArray(data) || data.length === 0) return;
    const sheetMurals = data.map((row, i) => {
      const coords = getCityCoords(row.city || '');
      return {
        id: row.id || Date.now()+i, school: row.school||'', city: row.city||'',
        nre: row.nre||'', stage: row.stage||'', people: Number(row.people)||0,
        action: row.action||'', actions: Array.isArray(row.actions)?row.actions:(row.actions||'').split('|').filter(Boolean),
        story: row.story||'', photo: row.photo||'',
        color: COLORS[i%COLORS.length], x: coords.x, y: coords.y
      };
    });
    const sheetKeys = new Set(sheetMurals.map(m => m.school+m.city));
    murals = [...sheetMurals, ...seedMurals.filter(m => !sheetKeys.has(m.school+m.city))];
    refresh();
  } catch(err) { console.warn('Sheets indisponível. Usando exemplos.', err); }
}

/* ── 4. ENVIAR PARA O SHEETS ── */
async function sendToSheets(data) {
  const form = new FormData();
  form.append('payload', JSON.stringify(data));
  const res = await fetch(SCRIPT_URL, {
    method: 'POST',
    body: form
  });
  if (!res.ok) throw new Error('Falha no envio');
  return res.json();
}

/* ── 5. STATS ── */
function updateStats() {
  const stats = {
    schools:    murals.length,
    people:     murals.reduce((s,m)=>s+Number(m.people),0),
    murals:     murals.length,
    strategies: murals.reduce((s,m)=>s+m.actions.filter(Boolean).length,0),
    cities:     new Set(murals.map(m=>m.city)).size
  };
  Object.entries(stats).forEach(([k,v])=>$$(`[data-stat="${k}"]`).forEach(el=>el.textContent=format(v)));
}

/* ── 6. FILTROS ── */
function fillFilters() {
  [['filter-nre','nre'],['filter-city','city'],['filter-stage','stage']].forEach(([id,key])=>{
    const sel=$(`#${id}`), cur=sel.value;
    [...new Set(murals.map(m=>m[key]))].sort().forEach(v=>{
      if(![...sel.options].some(o=>o.value===v)) sel.add(new Option(v,v));
    });
    sel.value=cur;
  });
}

/* ── 7. GALERIA ── */
function renderGallery() {
  const nre=$('#filter-nre').value, city=$('#filter-city').value, stage=$('#filter-stage').value;
  const visible=murals.filter(m=>(nre==='all'||m.nre===nre)&&(city==='all'||m.city===city)&&(stage==='all'||m.stage===stage));
  $('#gallery-grid').innerHTML=visible.map(m=>`
    <article class="mural-card">
      <div class="card-photo" style="background-color:var(--${m.color||'blue'})">
        ${m.photo?`<img src="${m.photo}" alt="Mural da ${escapeHtml(m.school)}">`:'' }
        <span>${format(m.people)} participantes</span>
      </div>
      <div class="card-body">
        <span class="card-place">${escapeHtml(m.city)} · NRE ${escapeHtml(m.nre)}</span>
        <h3>${escapeHtml(m.school)}</h3>
        <div class="card-action"><small>Ação destaque</small>"${escapeHtml(m.action)}"</div>
      </div>
    </article>`).join('');
  $('#empty-state').hidden=visible.length>0;
}

/* ── 8. MAPA COM POSIÇÃO GEOGRÁFICA REAL ── */
function renderMap() {
  $('#map-markers').innerHTML=murals.map(m=>`
    <button class="marker" style="left:${m.x}%;top:${m.y}%"
      data-id="${m.id}" aria-label="Ver ${escapeHtml(m.school)}"></button>`).join('');
  $$('.marker').forEach(mk=>mk.addEventListener('click',()=>{
    const m=murals.find(item=>String(item.id)===mk.dataset.id);
    if(!m) return;
    $$('.marker').forEach(b=>b.classList.remove('selected'));
    mk.classList.add('selected');
    $('#map-detail').innerHTML=`
      <small>${escapeHtml(m.city)} · ${escapeHtml(m.nre)}</small>
      <strong>${escapeHtml(m.school)}</strong>
      <span>${escapeHtml(m.action)}</span>
      ${m.people?`<em style="font-size:11px;color:var(--lime);margin-top:6px">${format(m.people)} participantes</em>`:''}`;
  }));
}

/* ── 9. DASHBOARD ── */
function renderDashboard() {
  const counts={};
  murals.flatMap(m=>m.actions).filter(Boolean).forEach(a=>counts[a]=(counts[a]||0)+1);
  $('#ranking-list').innerHTML=Object.entries(counts).sort((a,b)=>b[1]-a[1]).slice(0,3)
    .map(([name,count],i)=>`<li><b>0${i+1}</b><span>${escapeHtml(name)}</span><small>${count}×</small></li>`).join('')
    ||'<li><span style="color:#999">Aguardando registros...</span></li>';
  const nres={}; murals.forEach(m=>nres[m.nre]=(nres[m.nre]||0)+1);
  const max=Math.max(...Object.values(nres),1);
  $('#bar-chart').innerHTML=Object.entries(nres).sort((a,b)=>b[1]-a[1]).slice(0,6)
    .map(([name,count])=>`<div class="bar-row"><span>${escapeHtml(name)}</span>
      <div class="bar-track"><div class="bar-fill" style="width:${count/max*100}%"></div></div>
      <b>${count}</b></div>`).join('');
  renderWordCloud();
}

/* ── 10. NUVEM DE PALAVRAS DINÂMICA ── */
const STOPWORDS = new Set(['de','a','o','e','da','do','as','os','em','para','com','por','que','se','na','no','um','uma','ao','dos','das','mais','ou','cada','seus','sua','entre','como','são','ser','ter','foi','há','está','não','isso','este','essa','nos','às','pelo','pela','todos','todas','muito','bem','que','sua','seu','mais','uma','para']);

function renderWordCloud() {
  const counts={};
  murals.flatMap(m=>m.actions).filter(Boolean).forEach(w=>{
    const k=w.trim().toLowerCase();
    if(k.length>3&&!STOPWORDS.has(k)) counts[k]=(counts[k]||0)+3;
  });
  murals.map(m=>m.action).filter(Boolean).forEach(phrase=>{
    phrase.split(/\s+/).forEach(raw=>{
      const w=raw.replace(/[^a-záéíóúãõâêôçü]/gi,'').toLowerCase();
      if(w.length>4&&!STOPWORDS.has(w)) counts[w]=(counts[w]||0)+1;
    });
  });
  const words=Object.entries(counts).sort((a,b)=>b[1]-a[1]).slice(0,18);
  if(!words.length) return;
  const max=words[0][1];
  const tags=['span','b','strong','em','i','small'];
  const rots=[0,-8,8,-4,4,0,-6,6];
  const cloud=$('.word-cloud');
  if(cloud) cloud.innerHTML=words.map(([word,count],i)=>{
    const tag=tags[i%tags.length];
    const size=Math.round(13+(count/max)*31);
    return `<${tag} style="font-size:${size}px;transform:rotate(${rots[i%rots.length]}deg);display:inline-block" title="${count}x">${escapeHtml(word)}</${tag}>`;
  }).join(' ');
}

/* ── 11. UTILITÁRIOS ── */
function escapeHtml(v=''){const d=document.createElement('div');d.textContent=v;return d.innerHTML}
function refresh(){updateStats();fillFilters();renderGallery();renderMap();renderDashboard();}

/* ── 12. EVENTOS ── */
const dialog=$('#mural-dialog');
$$('.open-form').forEach(btn=>btn.addEventListener('click',()=>dialog.showModal()));
$('.dialog-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});
$('.menu-toggle').addEventListener('click',e=>{const open=$('#menu').classList.toggle('open');e.currentTarget.setAttribute('aria-expanded',open)});
$$('#menu a').forEach(a=>a.addEventListener('click',()=>$('#menu').classList.remove('open')));
$$('#filter-nre,#filter-city,#filter-stage').forEach(s=>s.addEventListener('change',renderGallery));
$('#clear-filters').addEventListener('click',()=>{$$('.filters select').forEach(s=>s.value='all');renderGallery()});
$('[name="story"]').addEventListener('input',e=>$('.counter').textContent=`${e.target.value.length}/300`);
$$('[data-placeholder]').forEach(link=>link.addEventListener('click',e=>{e.preventDefault();showToast('Material pronto para receber o link oficial.')}));

/* ── 13. FORMULÁRIO ── */
$('#mural-form').addEventListener('submit',async event=>{
  event.preventDefault();
  const form=event.currentTarget;
  if(!form.reportValidity()) return;
  const submitBtn=form.querySelector('.submit-button');
  submitBtn.textContent='Enviando…'; submitBtn.disabled=true;
  const data=Object.fromEntries(new FormData(form));
  const file=form.elements.photo.files[0];
  const toBase64=f=>new Promise(resolve=>{
    const r=new FileReader();
    r.onload=()=>resolve(r.result); r.onerror=()=>resolve(''); r.readAsDataURL(f);
  });
  try {
    const photo=file?await toBase64(file):'';
    await sendToSheets({school:data.school,city:data.city,nre:data.nre,stage:data.stage,
      people:data.people,action1:data.action1,action2:data.action2,action3:data.action3,
      story:data.story,owner:data.owner,email:data.email,photo});
    const coords=getCityCoords(data.city);
    murals.unshift({id:Date.now(),school:data.school,city:data.city,nre:data.nre,stage:data.stage,
      people:Number(data.people),action:data.action1,
      actions:[data.action1,data.action2,data.action3].filter(Boolean),
      story:data.story,photo,color:COLORS[Math.floor(Math.random()*COLORS.length)],
      x:coords.x,y:coords.y});
    refresh(); dialog.close(); form.reset(); $('.counter').textContent='0/300';
    showToast('✅ Mural enviado com sucesso! Obrigada pela participação.');
    location.hash='#galeria';
  } catch(err) {
    console.error(err);
    showToast('❌ Erro ao enviar. Verifique sua conexão e tente novamente.');
  } finally {
    submitBtn.textContent='Enviar participação ↗'; submitBtn.disabled=false;
  }
});

/* ── 14. TOAST ── */
function showToast(msg){const t=$('#toast');t.textContent=msg;t.classList.add('show');clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>t.classList.remove('show'),3800)}

/* ── 15. SCROLL REVEAL ── */
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.08});
$$('.reveal').forEach(el=>observer.observe(el));

/* ── 16. INIT ── */
refresh();
loadFromSheets();
