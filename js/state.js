let custom=ld('fw',[]),quizzes=ld('fq',[]),sound=ld('fs',true),draft=[],Q=null;
const all=()=>BASE.concat(custom);
const norm=s=>s.trim().toLowerCase(),plain=s=>norm(s).normalize('NFD').replace(/[\u0300-\u036f]/g,'');
const lev=(a,b)=>{const d=Array.from({length:a.length+1},(_,i)=>[i,...Array(b.length).fill(0)]);for(let j=1;j<=b.length;j++)d[0][j]=j;for(let i=1;i<=a.length;i++)for(let j=1;j<=b.length;j++)d[i][j]=Math.min(d[i-1][j]+1,d[i][j-1]+1,d[i-1][j-1]+(a[i-1]===b[j-1]?0:1));return d[a.length][b.length]};
