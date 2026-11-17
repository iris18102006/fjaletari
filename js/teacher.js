/* paneli i mësuesit */
async function teacherHome(){const m=$('#v-main');m.innerHTML='<div class="card"><p class="mute">Duke ngarkuar…</p></div>';
 const L=docs(await db.collection('classes').where('teacher','==',ME.uid).get()).sort((a,b)=>b.at-a.at);
 m.innerHTML=`<div class="card"><h2>Klasat e mia</h2>${L.length?L.map(c=>`<div class="qrow"><div><b>${esc(c.name)}</b><br><small>Kodi: <span class="code">${c.id}</span></small></div><button class="btn" data-o="${c.id}">Hap${ic('arrow')}</button></div>`).join(''):'<p class="mute">Ende nuk ke asnjë klasë.</p>'}</div>
 <div class="card"><h2>Krijo klasë të re</h2><label for="cn">Emri i klasës</label><input id="cn" placeholder="p.sh. 5-A Gjuhë shqipe"><button class="btn teal" id="mk" style="margin-top:14px">${ic('plus')}Krijo klasën</button></div>`;
 $$('[data-o]').forEach(b=>b.onclick=()=>classView(b.dataset.o));
 $('#mk').onclick=async()=>{const n=$('#cn').value.trim();if(!n){bad();return}const id=newCode();await db.doc('classes/'+id).set({name:n,teacher:ME.uid,at:Date.now()});ok();classView(id)}}
async function classView(id){const m=$('#v-main'),r=p=>db.collection(`classes/${id}/${p}`).get();
 m.innerHTML='<div class="card"><p class="mute">Duke ngarkuar…</p></div>';
 const [c,mem,qz,res]=await Promise.all([db.doc('classes/'+id).get(),r('members'),r('quizzes'),r('results')]);
 const M=docs(mem).sort((a,b)=>(a.last+a.first).localeCompare(b.last+b.first,'sq')),Z=docs(qz).sort((a,b)=>b.at-a.at),R=docs(res),link=location.origin+location.pathname+'?kodi='+id;
 const qh=q=>{const rs=R.filter(x=>x.quizId===q.id).sort((a,b)=>(a.last+a.first).localeCompare(b.last+b.first,'sq')||a.at-b.at),done=new Set(rs.map(x=>x.studentId)),miss=M.filter(x=>!done.has(x.id));
  return`<div class="card"><div class="qrow"><div><b>${esc(q.t)}</b><br><small>${q.qs.length} pyetje · ${done.size} nga ${M.length} nxënës e kanë zgjidhur</small></div><button class="btn ghost icon-btn" data-dq="${q.id}" aria-label="Fshi kuizin">${ic('trash')}</button></div>
  ${rs.map(x=>`<div class="rr"><div><b>${esc(x.first)} ${esc(x.last)}</b></div><div class="rs">${x.score}/${x.total}</div><div class="rd">${new Date(x.at).toLocaleDateString('sq-AL')}</div>${x.wrong.length?`<details><summary>Gabimet (${x.wrong.length})</summary><ul>${x.wrong.map(w=>`<li><b>${esc(w.q)}</b><br>Zgjodhi: ${esc(w.c)} · E sakta: ${esc(w.a)}</li>`).join('')}</ul></details>`:'<small class="rg">Pa gabime</small>'}</div>`).join('')}
  ${miss.length?`<p class="mute" style="margin:12px 0 0">Ende pa zgjidhur: ${miss.map(x=>esc(x.first+' '+x.last)).join(', ')}</p>`:''}</div>`};
 m.innerHTML=`<div class="card"><button class="btn ghost" id="bk">Kthehu te klasat</button><h2 style="margin-top:16px">${esc(c.data().name)}</h2>
  <p class="mute" style="margin-bottom:6px">Kodi i klasës: <span class="code">${id}</span> <button class="btn ghost" id="cc" style="padding:6px 12px;margin-left:6px">${ic('copy')}Kopjo kodin</button></p>
  <div class="link"><input readonly value="${esc(link)}" aria-label="Linku i klasës"><button class="btn" id="cl">${ic('copy')}Kopjo linkun</button></div>
  <p class="mute" style="margin:16px 0 8px"><b>${M.length}</b> nxënës në klasë</p><div class="chips">${M.map(x=>`<span class="chip">${esc(x.first)} ${esc(x.last)}</span>`).join('')}</div></div>
  <h2>Kuizet dhe rezultatet</h2>${Z.length?Z.map(qh).join(''):'<div class="card"><p class="mute" style="margin:0">Ende nuk ka kuize. Krijo të parin më poshtë.</p></div>'}${quizForm()}`;
 $('#bk').onclick=teacherHome;$('#cc').onclick=e=>cp(id,e.currentTarget);$('#cl').onclick=e=>cp(link,e.currentTarget);
 $$('[data-dq]').forEach(b=>b.onclick=async()=>{if(confirm('Ta fshij këtë kuiz?')){await db.doc(`classes/${id}/quizzes/${b.dataset.dq}`).delete();classView(id)}});
 bindQuizForm(id,()=>classView(id))}
