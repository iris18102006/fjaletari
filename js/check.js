/* kontrollo fjalën */
const FJALORTHI='https://fjalorthi.com/';
function check(){const v=norm($('#wi').value);if(!v)return;const A=all(),hit=A.find(x=>norm(x.w)===v);let h;
 if(hit){ok();h=`<div class="res ok"><h3>${ic('check')}E saktë! “${esc(hit.w)}” është në fjalor.</h3><span class="tag">${esc(hit.k||'fjalë')}</span><p style="margin:0"><b>Kuptimi:</b> ${esc(hit.m)}</p>${hit.e?`<p class="ctx">${esc(hit.e)}</p>`:''}</div>`}
 else{const near=A.find(x=>plain(x.w)===plain(v));
  if(near){bad();h=`<div class="res no"><h3>${ic('x')}Pothuajse!</h3><p style="margin:0">Shkruaje me shkronjat e duhura: <b>${esc(near.w)}</b>. Provoje prapë.</p></div>`}
  else{const sg=A.filter(x=>lev(plain(x.w),plain(v))<=2).slice(0,3).map(x=>x.w);h=`<div class="res info"><h3>${ic('search')}Nuk e kam këtë fjalë në fjalorin tim.</h3><p style="margin:0 0 14px">${sg.length?`Mos e ke fjalën: <b>${sg.map(esc).join(', ')}</b>?<br>`:''}Fjalori im është i vogël, ndaj fjala mund të jetë e saktë. Kontrolloje te fjalorthi.com (fjala kopjohet, ngjite te kërkimi).</p><a class="btn teal" id="fj" href="${FJALORTHI}" target="_blank" rel="noopener">${ic('arrow')}Hap fjalorthi.com</a></div>`}}
 $('#wr').innerHTML=h;const a=$('#fj');if(a)a.onclick=()=>{try{navigator.clipboard.writeText(v)}catch(e){}}}
$('#wb').onclick=check;$('#wi').onkeydown=e=>{if(e.key==='Enter')check()};
