/* luajtja e kuizeve */
function dictQuiz(){const A=all();return{t:'Kuizi i fjalorit',qs:shuffle(A).slice(0,8).map(w=>{const o=shuffle([w.m,...shuffle(A.filter(x=>x!==w)).slice(0,3).map(x=>x.m)]);return{q:`Çfarë do të thotë “${w.w}”?`,o,a:o.indexOf(w.m)}})}}
function start(q,rec){Q={q,rec,i:0,s:0,lock:false,wrong:[]};showQ()}
function showQ(){const q=Q.q.qs[Q.i];Q.lock=false;
 $('#v-main').innerHTML=`<div class="card"><div class="bar"><i style="width:${Q.i/Q.q.qs.length*100}%"></i></div><p class="mute">${esc(Q.q.t)} · pyetja ${Q.i+1} nga ${Q.q.qs.length}</p><h2>${esc(q.q)}</h2><div class="opts">${q.o.map((o,k)=>`<button class="opt" data-k="${k}">${esc(o)}</button>`).join('')}</div><div id="fb"></div></div>`;
 $$('.opt').forEach(b=>b.onclick=()=>pick(b,q))}
function pick(b,q){if(Q.lock)return;Q.lock=true;const k=+b.dataset.k,good=k===q.a;$$('.opt')[q.a].classList.add('good');
 if(good){Q.s++;ok()}else{b.classList.add('bad');bad();Q.wrong.push({q:q.q,c:q.o[k],a:q.o[q.a]})}
 $('#fb').innerHTML=`<button class="btn teal" id="nx">${Q.i+1<Q.q.qs.length?'Vazhdo':'Shiko rezultatin'}${ic('arrow')}</button>`;
 $('#nx').onclick=()=>{Q.i++;Q.i<Q.q.qs.length?showQ():end()}}
async function end(){const n=Q.q.qs.length,p=Q.s/n,t=p===1?'Perfekt, pa asnjë gabim!':p>=.6?'Shumë mirë, vazhdo kështu!':'Provo edhe një herë, do të të dalë më mirë.';
 $('#v-main').innerHTML=`<div class="card"><div class="bar"><i style="width:100%"></i></div><h2>${Q.s} nga ${n} të sakta</h2><p class="mute">${t}</p><p class="mute" id="sent"></p><div class="row"><button class="btn" id="again">Rifillo</button><button class="btn ghost" id="back">Kthehu te kuizet</button></div></div>`;
 if(p>=.6)ok();const q=Q.q,rec=Q.rec;$('#again').onclick=()=>start(rec?q:dictQuiz(),rec);$('#back').onclick=studentHome;
 if(rec){const sent=await rec(q,Q.s,n,Q.wrong);const e=$('#sent');if(e)e.textContent=sent?'Rezultati u dërgua te mësuesi.':'Rezultati nuk u dërgua. Kontrollo internetin.'}}
