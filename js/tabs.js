/* tabet */
function show(t){$$('.tab').forEach(b=>b.setAttribute('aria-selected',b.dataset.t===t));$$('.view').forEach(v=>v.classList.toggle('on',v.id==='v-'+t));if(t==='quizzes')renderList();if(t==='words')renderWords()}
$$('.tab').forEach(b=>b.onclick=()=>show(b.dataset.t));
