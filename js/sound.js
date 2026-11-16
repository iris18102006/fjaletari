/* zëri */
let ac;
function tone(f,t,d,type,v){if(!sound)return;try{ac=ac||new(window.AudioContext||window.webkitAudioContext)();if(ac.state==='suspended')ac.resume();const o=ac.createOscillator(),g=ac.createGain(),s=ac.currentTime+t;o.type=type;o.frequency.value=f;g.gain.setValueAtTime(.0001,s);g.gain.exponentialRampToValueAtTime(v,s+.02);g.gain.exponentialRampToValueAtTime(.0001,s+d);o.connect(g);g.connect(ac.destination);o.start(s);o.stop(s+d+.05)}catch(e){}}
const ok=()=>[659.25,783.99,1046.5].forEach((f,i)=>tone(f,i*.09,.3,'sine',.16));
