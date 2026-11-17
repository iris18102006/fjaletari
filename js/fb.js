/* lidhja me Firebase */
const FB=!!(window.firebase&&FIREBASE_CONFIG.apiKey),STU='@nxenes.fjaletari.app';
let auth,db,ME=null;
if(FB){firebase.initializeApp(FIREBASE_CONFIG);auth=firebase.auth();db=firebase.firestore()}
const slug=s=>plain(s).replace(/[^a-z0-9]/g,'');
const sEmail=(code,n,m)=>`${code.toLowerCase()}.${slug(n)}.${slug(m)}${STU}`;
const newCode=()=>{const c='ABCDEFGHJKMNPQRSTUVWXYZ23456789';return Array.from({length:6},()=>c[Math.random()*c.length|0]).join('')};
const docs=s=>s.docs.map(d=>({id:d.id,...d.data()}));
