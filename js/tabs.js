/* skedat sipas rolit */
const TABS={t:[['klasat','Klasat'],['check','Kontrollo fjalën'],['words','Fjalori']],s:[['kuizet','Kuizet'],['check','Kontrollo fjalën']]};
function nav(r){$('.tabs').innerHTML=r?TABS[r].map(([k,n])=>`<button class="tab" role="tab" data-t="${k}">${n}</button>`).join(''):'';$$('.tab').forEach(b=>b.onclick=()=>show(b.dataset.t))}
function show(t){const v={check:'check',words:'words',auth:'auth'}[t]||'main';
 $$('.tab').forEach(b=>b.setAttribute('aria-selected',b.dataset.t===t));$$('.view').forEach(e=>e.classList.toggle('on',e.id==='v-'+v));
 if(t==='auth')authView();if(t==='klasat')teacherHome();if(t==='kuizet')studentHome();if(t==='words')renderWords()}
