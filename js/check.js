/* kontrollo fjalën */
function check(){const v=norm($('#wi').value);if(!v)return;const A=all(),hit=A.find(x=>norm(x.w)===v);let h;
 if(hit){ok();h=`<div class="res ok"><h3>${ic('check')}E saktë! “${esc(hit.w)}” është në fjalor.</h3><span class="tag">${esc(hit.k||'fjalë')}</span><p style="margin:0"><b>Kuptimi:</b> ${esc(hit.m)}</p>${hit.e?`<p class="ctx">${esc(hit.e)}</p>`:''}</div>`}
 else{bad();const near=A.find(x=>plain(x.w)===plain(v));
  if(near)h=`<div class="res no"><h3>${ic('x')}Pothuajse!</h3><p style="margin:0">Shkruaje me shkronjat e duhura: <b>${esc(near.w)}</b>. Provoje prapë.</p></div>`;
  else{const sg=A.filter(x=>lev(plain(x.w),plain(v))<=2).slice(0,3).map(x=>x.w);h=`<div class="res no"><h3>${ic('x')}Nuk e gjej këtë fjalë në fjalor.</h3><p style="margin:0">${sg.length?`Mos e ke fjalën: <b>${sg.map(esc).join(', ')}</b>?`:'Kontrollo shkrimin ose shtoje te skeda “Fjalori”.'}</p></div>`}}
 $('#wr').innerHTML=h}
$('#wb').onclick=check;$('#wi').onkeydown=e=>{if(e.key==='Enter')check()};
