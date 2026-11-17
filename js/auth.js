/* hyrja dhe regjistrimi: një faqe për mësuesit, një për nxënësit */
const KODI=(new URLSearchParams(location.search).get('kodi')||'').toUpperCase();
const AE={'auth/email-already-in-use':'Kjo llogari ekziston tashmë. Hyr në vend që të regjistrohesh.','auth/invalid-credential':'Të dhënat nuk janë të sakta.','auth/wrong-password':'Të dhënat nuk janë të sakta.','auth/user-not-found':'Të dhënat nuk janë të sakta.','auth/weak-password':'Fjalëkalimi duhet të ketë të paktën 6 shkronja.','auth/invalid-email':'Emaili nuk duket i saktë.','auth/network-request-failed':'Nuk ka lidhje me internetin.'};
let AM={role:KODI?'s':'t',reg:!!KODI},busy=false;
function authView(){const t=AM.role==='t',g=AM.reg;
 $('#v-auth').innerHTML=`<div class="card auth"><div class="seg"><button class="btn ${t?'':'ghost'}" data-r="t">Jam mësues</button><button class="btn ${t?'ghost':''}" data-r="s">Jam nxënës</button></div>
 <h2>${g?'Regjistrohu':'Hyr'} si ${t?'mësues':'nxënës'}</h2>
 ${t?`${g?'<label for="an">Emri dhe mbiemri</label><input id="an">':''}<label for="ae">Emaili</label><input id="ae" type="email" autocomplete="email">`
 :`<label for="ac">Kodi i klasës</label><input id="ac" value="${esc(KODI)}" autocapitalize="characters" autocomplete="off"><div class="opts-in"><div><label for="af">Emri</label><input id="af"></div><div><label for="al">Mbiemri</label><input id="al"></div></div>`}
 <label for="ap">Fjalëkalimi</label><input id="ap" type="password" autocomplete="${g?'new':'current'}-password">
 <p class="err" id="ax" aria-live="polite"></p>
 <button class="btn teal" id="go">${g?'Regjistrohu':'Hyr'}${ic('arrow')}</button>
 <p class="mute sw">${g?'Ke llogari?':'Nuk ke llogari?'} <a href="#" id="sw">${g?'Hyr':'Regjistrohu'}</a></p></div>`;
 $$('[data-r]').forEach(b=>b.onclick=()=>{AM={role:b.dataset.r,reg:AM.reg};authView()});
 $('#sw').onclick=e=>{e.preventDefault();AM.reg=!g;authView()};
 $('#go').onclick=async()=>{const x=$('#ax'),p=$('#ap').value;x.textContent='';busy=true;
  try{if(t){const em=$('#ae').value.trim();
    if(g){const n=$('#an').value.trim();if(!n)throw{m:'Shkruaj emrin dhe mbiemrin.'};const c=await auth.createUserWithEmailAndPassword(em,p);await db.doc('teachers/'+c.user.uid).set({name:n})}
    else await auth.signInWithEmailAndPassword(em,p)}
   else{const code=$('#ac').value.trim().toUpperCase(),f=$('#af').value.trim(),l=$('#al').value.trim();if(!code||!f||!l)throw{m:'Plotëso kodin, emrin dhe mbiemrin.'};const em=sEmail(code,f,l);
    if(g){const c=await auth.createUserWithEmailAndPassword(em,p);try{await db.doc(`classes/${code}/members/${c.user.uid}`).set({first:f,last:l,at:Date.now()})}catch(e){await c.user.delete();throw{m:'Nuk gjetëm asnjë klasë me këtë kod.'}}}
    else await auth.signInWithEmailAndPassword(em,p)}
   busy=false;ok();enter(auth.currentUser)}
  catch(e){busy=false;bad();x.textContent=e.m||AE[e.code]||'Diçka shkoi keq. Provo përsëri.'}};
 $('#ap').onkeydown=e=>{if(e.key==='Enter')$('#go').click()}}
async function enter(u){$('#out').hidden=!u;
 if(!u){ME=null;nav(null);show('auth');return}
 try{if(u.email.endsWith(STU)){const code=u.email.split('.')[0].toUpperCase(),m=(await db.doc(`classes/${code}/members/${u.uid}`).get()).data()||{};
   ME={role:'s',uid:u.uid,code,first:m.first||'',last:m.last||''};nav('s');show('kuizet')}
  else{const t=(await db.doc('teachers/'+u.uid).get()).data()||{};ME={role:'t',uid:u.uid,name:t.name||''};nav('t');show('klasat')}}
 catch(e){auth.signOut()}}
function startAuth(){auth.onAuthStateChanged(u=>{if(!busy)enter(u)});$('#out').onclick=()=>auth.signOut()}
function setupView(){nav(null);$$('.view').forEach(v=>v.classList.toggle('on',v.id==='v-auth'));
 $('#v-auth').innerHTML=`<div class="card"><h2>Lidhe me Firebase</h2><p class="mute">Që mësuesi dhe nxënësit të shihen nga pajisje të ndryshme, aplikacioni ka nevojë për një bazë të dhënash falas.</p><p style="margin:0">Hapi i parë: ndiq udhëzimet te <b>docs/FIREBASE.md</b> dhe ngjit konfigurimin te <b>js/config.js</b>. Merr rreth 5 minuta.</p></div>`}
