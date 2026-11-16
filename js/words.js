/* fjalori */
$('#addw').onclick=()=>{const w=$('#nw').value.trim(),m=$('#nm').value.trim();
 if(!w||!m){bad();msg('#wmsg','Fjala dhe kuptimi janë të detyrueshme.');return}
 if(all().some(x=>norm(x.w)===norm(w))){bad();msg('#wmsg','Kjo fjalë ekziston tashmë.');return}
 custom.push({w,k:$('#nk').value.trim(),m,e:$('#ne').value.trim()});sv('fw',custom);['#nw','#nk','#nm','#ne'].forEach(s=>$(s).value='');ok();msg('#wmsg','Fjala u shtua.');renderWords()};
function renderWords(){const A=all();$('#wcount').textContent=`${A.length} fjalë në fjalor`;
 $('#wl').innerHTML=A.slice().sort((a,b)=>a.w.localeCompare(b.w,'sq')).map(x=>{const ci=custom.indexOf(x);return`<div class="w"><div class="row" style="justify-content:space-between;flex-wrap:nowrap"><b>${esc(x.w)}</b>${ci>=0?`<button class="btn ghost icon-btn" style="width:34px;height:34px" data-w="${ci}" aria-label="Fshi fjalën">${ic('trash')}</button>`:''}</div><p>${esc(x.m)}</p></div>`}).join('');
 $$('[data-w]').forEach(b=>b.onclick=()=>{custom.splice(+b.dataset.w,1);sv('fw',custom);renderWords()})}
