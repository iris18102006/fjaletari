/* forma për krijimin e kuizit brenda një klase */
function quizForm(){return`<div class="card"><h2>Kuiz i ri</h2><p class="mute">Shto pyetje me 4 përgjigje dhe shëno atë të saktën.</p>
 <label for="qt">Titulli i kuizit</label><input id="qt" placeholder="p.sh. Fjalë për natyrën">
 <label for="qq">Pyetja</label><input id="qq" placeholder="Shkruaje pyetjen këtu">
 <div class="opts-in" style="margin-top:12px">${[0,1,2,3].map(i=>`<div class="ca"><input type="radio" name="ca" value="${i}" ${i?'':'checked'} aria-label="Përgjigje e saktë ${i+1}"><input id="o${i}" placeholder="Përgjigja ${i+1}" aria-label="Përgjigja ${i+1}"></div>`).join('')}</div>
 <small>Rrethi i plotë tregon përgjigjen e saktë.</small>
 <div class="row" style="margin-top:14px"><button class="btn teal" id="addq">${ic('plus')}Shto pyetjen</button></div>
 <p id="cmsg" class="mute" aria-live="polite" style="margin-top:10px"></p><div id="dq"></div>
 <button class="btn" id="saveq" style="margin-top:8px">${ic('check')}Ruaj kuizin te klasa</button></div>`}
function drawDraft(){$('#dq').innerHTML=draft.map((q,i)=>`<div class="qrow"><div><b>${i+1}. ${esc(q.q)}</b><br><small>E sakta: ${esc(q.o[q.a])}</small></div><button class="btn ghost icon-btn" data-x="${i}" aria-label="Hiq pyetjen">${ic('x')}</button></div>`).join('');$$('[data-x]').forEach(b=>b.onclick=()=>{draft.splice(+b.dataset.x,1);drawDraft()})}
function bindQuizForm(cid,done){draft=[];
 $('#addq').onclick=()=>{const q=$('#qq').value.trim(),o=[0,1,2,3].map(i=>$('#o'+i).value.trim());
  if(!q||o.some(x=>!x)){bad();msg('#cmsg','Plotëso pyetjen dhe të 4 përgjigjet.');return}
  draft.push({q,o,a:+document.querySelector('[name=ca]:checked').value});ok();msg('#cmsg','Pyetja u shtua.');$('#qq').value='';[0,1,2,3].forEach(i=>$('#o'+i).value='');drawDraft()};
 $('#saveq').onclick=async()=>{const t=$('#qt').value.trim();if(!t||!draft.length){bad();msg('#cmsg','Duhet një titull dhe të paktën një pyetje.');return}
  await db.collection(`classes/${cid}/quizzes`).add({t,qs:draft,at:Date.now()});ok();done()}}
