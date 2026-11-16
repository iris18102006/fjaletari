/* krijo kuiz */
$('#oin').innerHTML=[0,1,2,3].map(i=>`<div class="ca"><input type="radio" name="ca" value="${i}" ${i?'':'checked'} aria-label="Përgjigje e saktë ${i+1}"><input id="o${i}" placeholder="Përgjigja ${i+1}" aria-label="Përgjigja ${i+1}"></div>`).join('');
const msg=(id,t)=>{$(id).textContent=t};
function drawDraft(){$('#dq').innerHTML=draft.map((q,i)=>`<div class="qrow"><div><b>${i+1}. ${esc(q.q)}</b><br><small>E sakta: ${esc(q.o[q.a])}</small></div><button class="btn ghost icon-btn" data-x="${i}" aria-label="Hiq pyetjen">${ic('x')}</button></div>`).join('');$$('[data-x]').forEach(b=>b.onclick=()=>{draft.splice(+b.dataset.x,1);drawDraft()})}
$('#addq').onclick=()=>{const q=$('#qq').value.trim(),o=[0,1,2,3].map(i=>$('#o'+i).value.trim());
 if(!q||o.some(x=>!x)){bad();msg('#cmsg','Plotëso pyetjen dhe të 4 përgjigjet.');return}
 draft.push({q,o,a:+document.querySelector('[name=ca]:checked').value});ok();msg('#cmsg','Pyetja u shtua.');$('#qq').value='';[0,1,2,3].forEach(i=>$('#o'+i).value='');drawDraft()};
$('#saveq').onclick=()=>{const t=$('#qt').value.trim();if(!t||!draft.length){bad();msg('#cmsg','Duhet një titull dhe të paktën një pyetje.');return}
 quizzes.push({t,qs:draft});sv('fq',quizzes);draft=[];$('#qt').value='';drawDraft();ok();msg('#cmsg','Kuizi u ruajt. E gjen te skeda “Kuizet”.')};
