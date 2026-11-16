/* kuizet */
function dictQuiz(){const A=all();return{t:'Kuizi i fjalorit',qs:shuffle(A).slice(0,8).map(w=>{const o=shuffle([w.m,...shuffle(A.filter(x=>x!==w)).slice(0,3).map(x=>x.m)]);return{q:`Çfarë do të thotë “${w.w}”?`,o,a:o.indexOf(w.m)}})}}
function renderList(){$('#play').innerHTML='';$('#qlist').style.display='';
 $('#qlist').innerHTML=`<div class="card"><h2>Kuizet</h2><p class="mute">Luaj kuizin e fjalorit ose ato që ke krijuar vetë.</p>
 <div class="qrow"><div><b>Kuizi i fjalorit</b><br><small>8 pyetje të reja çdo herë</small></div><button class="btn" data-p="-1">${ic('play')}Luaj</button></div>
 ${quizzes.map((q,i)=>`<div class="qrow"><div><b>${esc(q.t)}</b><br><small>${q.qs.length} pyetje</small></div><div class="row"><button class="btn" data-p="${i}">${ic('play')}Luaj</button><button class="btn ghost icon-btn" data-d="${i}" aria-label="Fshi kuizin">${ic('trash')}</button></div></div>`).join('')}</div>`;
 $$('[data-p]').forEach(b=>b.onclick=()=>start(+b.dataset.p<0?dictQuiz():quizzes[+b.dataset.p]));
 $$('[data-d]').forEach(b=>b.onclick=()=>{quizzes.splice(+b.dataset.d,1);sv('fq',quizzes);renderList()})}
function start(q){Q={q,i:0,s:0,lock:false};$('#qlist').style.display='none';showQ()}
function showQ(){const q=Q.q.qs[Q.i];Q.lock=false;
 $('#play').innerHTML=`<div class="card"><div class="bar"><i style="width:${Q.i/Q.q.qs.length*100}%"></i></div><p class="mute">${esc(Q.q.t)} · pyetja ${Q.i+1} nga ${Q.q.qs.length}</p><h2>${esc(q.q)}</h2><div class="opts">${q.o.map((o,k)=>`<button class="opt" data-k="${k}">${esc(o)}</button>`).join('')}</div><div id="fb"></div></div>`;
 $$('.opt').forEach(b=>b.onclick=()=>pick(b,q))}
function pick(b,q){if(Q.lock)return;Q.lock=true;const good=+b.dataset.k===q.a;$$('.opt')[q.a].classList.add('good');if(good){Q.s++;ok()}else{b.classList.add('bad');bad()}
 $('#fb').innerHTML=`<button class="btn teal" id="nx">${Q.i+1<Q.q.qs.length?'Vazhdo':'Shiko rezultatin'}${ic('arrow')}</button>`;
 $('#nx').onclick=()=>{Q.i++;Q.i<Q.q.qs.length?showQ():end()}}
function end(){const n=Q.q.qs.length,p=Q.s/n,m=p===1?'Perfekt, pa asnjë gabim!':p>=.6?'Shumë mirë, vazhdo kështu!':'Provo edhe një herë, do të të dalë më mirë.';
 $('#play').innerHTML=`<div class="card"><div class="bar"><i style="width:100%"></i></div><h2>${Q.s} nga ${n} të sakta</h2><p class="mute">${m}</p><div class="row"><button class="btn" id="again">Rifillo</button><button class="btn ghost" id="back">Kthehu te kuizet</button></div></div>`;
 if(p>=.6)ok();$('#again').onclick=()=>start(Q.q.t==='Kuizi i fjalorit'?dictQuiz():Q.q);$('#back').onclick=renderList}
