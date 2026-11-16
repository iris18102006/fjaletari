/* tema dhe zëri */
const curTheme=()=>document.documentElement.dataset.theme||(matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light');
function paint(){$('#thm').innerHTML=ic(curTheme()==='dark'?'sun':'moon');$('#snd').innerHTML=ic(sound?'vol':'mute')}
const saved=ld('ft',null);if(saved)document.documentElement.dataset.theme=saved;
$('#thm').onclick=()=>{const n=curTheme()==='dark'?'light':'dark';document.documentElement.dataset.theme=n;sv('ft',n);paint()};
$('#snd').onclick=()=>{sound=!sound;sv('fs',sound);paint();if(sound)ok()};
