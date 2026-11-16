// Fjalori fillestar. Formati i rreshtit: fjala|lloji|kuptimi|shembulli
const BASE=[];
const addWords=t=>t.split('\n').forEach(l=>{const[w,k,m,e]=l.split('|');BASE.push({w,k,m,e})});
