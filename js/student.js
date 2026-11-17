/* paneli i nxënësit */
async function studentHome(){const m=$('#v-main');m.innerHTML='<div class="card"><p class="mute">Duke ngarkuar…</p></div>';
 try{const [qs,rs]=await Promise.all([db.collection(`classes/${ME.code}/quizzes`).get(),db.collection(`classes/${ME.code}/results`).where('studentId','==',ME.uid).get()]);
  const Z=docs(qs).sort((a,b)=>b.at-a.at),R=docs(rs),best=id=>{const x=R.filter(r=>r.quizId===id);return x.length?Math.max(...x.map(r=>r.score)):null};
  m.innerHTML=`<div class="card"><h2>Përshëndetje, ${esc(ME.first)}!</h2><p class="mute">Këto janë kuizet e klasës sate.</p>${Z.length?Z.map(q=>{const b=best(q.id);return`<div class="qrow"><div><b>${esc(q.t)}</b><br><small>${q.qs.length} pyetje${b!==null?` · rezultati më i mirë ${b}/${q.qs.length}`:''}</small></div><button class="btn" data-p="${q.id}">${ic('play')}Luaj</button></div>`}).join(''):'<p class="mute">Mësuesi nuk ka shtuar kuize ende.</p>'}
  <div class="qrow"><div><b>Kuizi i fjalorit</b><br><small>Stërvitje, nuk i dërgohet mësuesit</small></div><button class="btn ghost" data-p="-1">${ic('play')}Luaj</button></div></div>`;
  $$('[data-p]').forEach(b=>b.onclick=()=>b.dataset.p==='-1'?start(dictQuiz(),null):start(Z.find(q=>q.id===b.dataset.p),saveResult))}
 catch(e){m.innerHTML='<div class="card"><p class="mute">Nuk u ngarkuan kuizet. Kontrollo lidhjen dhe provo përsëri.</p></div>'}}
async function saveResult(q,s,n,wrong){try{await db.collection(`classes/${ME.code}/results`).add({studentId:ME.uid,first:ME.first,last:ME.last,quizId:q.id,quizTitle:q.t,score:s,total:n,wrong,at:Date.now()});return true}catch(e){return false}}
