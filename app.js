const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyDA1QsojZugAo4j1ZeU_si21GVHAf0ShH4AYoCuqrepPPy3hwcEMGMGPLhbIEHgiFy/exec';

const seedMurals = [
  {id:1,school:'Colégio Estadual do Paraná',city:'Curitiba',nre:'Curitiba',stage:'Ensino Médio',people:64,action:'Ampliar as formas de expressão da aprendizagem.',actions:['Expressão','Acessibilidade','Escuta'],x:53,y:60,color:'blue'},
  {id:2,school:'Colégio Estadual Vicente Rijo',city:'Londrina',nre:'Londrina',stage:'Ensino Médio',people:38,action:'Criar momentos de escuta ativa com os estudantes.',actions:['Escuta','Acolhimento','Autonomia'],x:68,y:25,color:'yellow'},
  {id:3,school:'C.E. Regente Feijó',city:'Ponta Grossa',nre:'Ponta Grossa',stage:'Ensino Médio',people:42,action:'Planejar experiências com diferentes níveis de apoio.',actions:['Inclusão','Colaboração','Acessibilidade'],x:48,y:45,color:'coral'},
  {id:4,school:'C.E. Wilson Joffre',city:'Cascavel',nre:'Cascavel',stage:'Ensino Fundamental',people:31,action:'Fortalecer o pertencimento por meio de projetos coletivos.',actions:['Pertencimento','Colaboração','Escuta'],x:25,y:51,color:'yellow'},
  {id:5,school:'C.E. Francisco Carneiro Martins',city:'Guarapuava',nre:'Guarapuava',stage:'Ensino Médio',people:27,action:'Oferecer escolhas para que cada estudante participe.',actions:['Autonomia','Inclusão','Expressão'],x:43,y:61,color:'blue'},
  {id:6,school:'C.E. Monteiro Lobato',city:'Foz do Iguaçu',nre:'Foz do Iguaçu',stage:'EJA',people:25,action:'Conectar o currículo às histórias e aos territórios.',actions:['Acolhimento','Equidade','Pertencimento'],x:15,y:64,color:'coral'}
];

const COLORS = ['blue','yellow','coral'];
let murals = [...seedMurals];

const $ = (selector, root=document) => root.querySelector(selector);
const $$ = (selector, root=document) => [...root.querySelectorAll(selector)];
const format = value => new Intl.NumberFormat('pt-BR').format(value);

/* ── CARREGAR MURAIS DO SHEETS ── */
async function loadFromSheets() {
  try {
    const res = await fetch(SCRIPT_URL);
    if (!res.ok) throw new Error('Erro na resposta');
    const data = await res.json();
    if (!Array.isArray(data) || data.length === 0) return;

    const sheetMurals = data.map((row, i) => ({
      id:      row.id || Date.now() + i,
      school:  row.school  || '',
      city:    row.city    || '',
      nre:     row.nre     || '',
      stage:   row.stage   || '',
      people:  Number(row.people) || 0,
      action:  row.action  || '',
      actions: Array.isArray(row.actions) ? row.actions : (row.actions || '').split('|').filter(Boolean),
      story:   row.story   || '',
      photo:   row.photo   || '',
      x:       25 + (i * 11) % 45,
      y:       20 + (i * 17) % 50,
      color:   COLORS[i % COLORS.length]
    }));

    // Mescla: escolas reais do Sheets + exemplos fixos (sem duplicar)
    const sheetIds = new Set(sheetMurals.map(m => String(m.school + m.city)));
    const filteredSeed = seedMurals.filter(m => !sheetIds.has(m.school + m.city));
    murals = [...sheetMurals, ...filteredSeed];
    refresh();
  } catch (err) {
    console.warn('Não foi possível carregar do Sheets. Usando dados de exemplo.', err);
  }
}

/* ── ENVIAR MURAL PARA O SHEETS ── */
async function sendToSheets(data) {
  const res = await fetch(SCRIPT_URL, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' }
  });
  if (!res.ok) throw new Error('Falha no envio');
  return res.json();
}

/* ── STATS ── */
function updateStats() {
  const stats = {
    schools:    murals.length,
    people:     murals.reduce((sum, m) => sum + Number(m.people), 0),
    murals:     murals.length,
    strategies: murals.reduce((sum, m) => sum + m.actions.filter(Boolean).length, 0),
    cities:     new Set(murals.map(m => m.city)).size
  };
  Object.entries(stats).forEach(([key, value]) =>
    $$(`[data-stat="${key}"]`).forEach(el => el.textContent = format(value))
  );
}

/* ── FILTROS ── */
function fillFilters() {
  const configs = [['filter-nre','nre'],['filter-city','city'],['filter-stage','stage']];
  configs.forEach(([id, key]) => {
    const select = $(`#${id}`);
    const current = select.value;
    [...new Set(murals.map(m => m[key]))].sort().forEach(value => {
      if (![...select.options].some(o => o.value === value))
        select.add(new Option(value, value));
    });
    select.value = current;
  });
}

/* ── GALERIA ── */
function renderGallery() {
  const nre = $('#filter-nre').value, city = $('#filter-city').value, stage = $('#filter-stage').value;
  const visible = murals.filter(m =>
    (nre   === 'all' || m.nre   === nre)  &&
    (city  === 'all' || m.city  === city) &&
    (stage === 'all' || m.stage === stage)
  );
  $('#gallery-grid').innerHTML = visible.map(m => `
    <article class="mural-card">
      <div class="card-photo" style="background-color:var(--${m.color||'blue'})">
        ${m.photo ? `<img src="${m.photo}" alt="Mural da ${escapeHtml(m.school)}">` : ''}
        <span>${format(m.people)} participantes</span>
      </div>
      <div class="card-body">
        <span class="card-place">${escapeHtml(m.city)} · NRE ${escapeHtml(m.nre)}</span>
        <h3>${escapeHtml(m.school)}</h3>
        <div class="card-action"><small>Ação destaque</small>"${escapeHtml(m.action)}"</div>
      </div>
    </article>`).join('');
  $('#empty-state').hidden = visible.length > 0;
}

/* ── MAPA ── */
function renderMap() {
  $('#map-markers').innerHTML = murals.map((m, i) =>
    `<button class="marker" style="left:${m.x||20+(i*11)%65}%;top:${m.y||20+(i*17)%65}%"
      data-id="${m.id}" aria-label="Ver ${escapeHtml(m.school)}"></button>`
  ).join('');
  $$('.marker').forEach(marker => marker.addEventListener('click', () => {
    const m = murals.find(item => String(item.id) === marker.dataset.id);
    $('#map-detail').innerHTML = `
      <small>${escapeHtml(m.city)} · ${escapeHtml(m.nre)}</small>
      <strong>${escapeHtml(m.school)}</strong>
      <span>${escapeHtml(m.action)}</span>`;
  }));
}

/* ── DASHBOARD ── */
function renderDashboard() {
  const counts = {};
  murals.flatMap(m => m.actions).filter(Boolean).forEach(a => counts[a] = (counts[a]||0) + 1);
  $('#ranking-list').innerHTML = Object.entries(counts)
    .sort((a, b) => b[1] - a[1]).slice(0, 3)
    .map(([name, count], i) =>
      `<li><b>0${i+1}</b><span>${escapeHtml(name)}</span><small>${count}×</small></li>`
    ).join('');

  const nres = {};
  murals.forEach(m => nres[m.nre] = (nres[m.nre]||0) + 1);
  const max = Math.max(...Object.values(nres));
  $('#bar-chart').innerHTML = Object.entries(nres)
    .sort((a, b) => b[1] - a[1]).slice(0, 6)
    .map(([name, count]) =>
      `<div class="bar-row"><span>${escapeHtml(name)}</span>
       <div class="bar-track"><div class="bar-fill" style="width:${count/max*100}%"></div></div>
       <b>${count}</b></div>`
    ).join('');
}

function escapeHtml(value = '') {
  const div = document.createElement('div');
  div.textContent = value;
  return div.innerHTML;
}

function refresh() { updateStats(); fillFilters(); renderGallery(); renderMap(); renderDashboard(); }

/* ── EVENTOS ── */
const dialog = $('#mural-dialog');
$$('.open-form').forEach(btn => btn.addEventListener('click', () => dialog.showModal()));
$('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', e => { if (e.target === dialog) dialog.close(); });
$('.menu-toggle').addEventListener('click', e => {
  const open = $('#menu').classList.toggle('open');
  e.currentTarget.setAttribute('aria-expanded', open);
});
$$('#menu a').forEach(a => a.addEventListener('click', () => $('#menu').classList.remove('open')));
$$('#filter-nre,#filter-city,#filter-stage').forEach(s => s.addEventListener('change', renderGallery));
$('#clear-filters').addEventListener('click', () => { $$('.filters select').forEach(s => s.value='all'); renderGallery(); });
$('[name="story"]').addEventListener('input', e => $('.counter').textContent = `${e.target.value.length}/300`);
$$('[data-placeholder]').forEach(link => link.addEventListener('click', e => {
  e.preventDefault(); showToast('Material pronto para receber o link oficial.');
}));

/* ── FORMULÁRIO ── */
$('#mural-form').addEventListener('submit', async event => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;

  const submitBtn = form.querySelector('.submit-button');
  submitBtn.textContent = 'Enviando…';
  submitBtn.disabled = true;

  const data = Object.fromEntries(new FormData(form));
  const file = form.elements.photo.files[0];

  const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload  = () => resolve(reader.result);
    reader.onerror = () => resolve(''); // foto opcional se falhar
    reader.readAsDataURL(file);
  });

  try {
    const photo = file ? await toBase64(file) : '';
    const payload = {
      school:  data.school,  city:    data.city,
      nre:     data.nre,     stage:   data.stage,
      people:  data.people,  action1: data.action1,
      action2: data.action2, action3: data.action3,
      story:   data.story,   owner:   data.owner,
      email:   data.email,   photo
    };

    await sendToSheets(payload);

    // Adiciona localmente para feedback imediato
    const item = {
      id:      Date.now(),
      school:  data.school,  city:    data.city,
      nre:     data.nre,     stage:   data.stage,
      people:  Number(data.people),
      action:  data.action1,
      actions: [data.action1, data.action2, data.action3].filter(Boolean),
      story:   data.story,   photo,
      x:       25 + Math.random() * 45,
      y:       20 + Math.random() * 50,
      color:   COLORS[Math.floor(Math.random() * COLORS.length)]
    };
    murals.unshift(item);
    refresh();
    dialog.close();
    form.reset();
    $('.counter').textContent = '0/300';
    showToast('✅ Mural enviado com sucesso! Obrigada pela participação.');
    location.hash = '#galeria';

  } catch (err) {
    console.error(err);
    showToast('❌ Erro ao enviar. Verifique sua conexão e tente novamente.');
  } finally {
    submitBtn.textContent = 'Enviar participação ↗';
    submitBtn.disabled = false;
  }
});

/* ── TOAST ── */
function showToast(message) {
  const toast = $('#toast');
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => toast.classList.remove('show'), 3800);
}

/* ── SCROLL REVEAL ── */
const observer = new IntersectionObserver(entries =>
  entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
  }), { threshold: .08 }
);
$$('.reveal').forEach(el => observer.observe(el));

/* ── INIT ── */
refresh();         // mostra exemplos imediatamente
loadFromSheets();  // depois carrega os reais do Sheets
