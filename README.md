# Fjalëtari

Aplikacion web në shqip për të kontrolluar fjalë nga fjalori dhe për të krijuar kuize.

## Çfarë bën

- Kontrollon nëse një fjalë është në fjalor dhe të jep kuptimin me një shembull në fjali
- Të thotë "pothuajse" kur e harron ë-në ose ç-në, dhe sugjeron fjalë të ngjashme
- Kuiz automatik nga fjalori, me 8 pyetje të reja çdo herë
- Krijon kuizet e tua, me 4 përgjigje dhe një të saktë
- Shton fjalë të tua në fjalor
- Tinguj të ndryshëm për përgjigje të sakta dhe të gabuara (Web Audio, pa skedarë zanore)
- Light dhe dark mode
- Kuizet, fjalët dhe tema ruhen në shfletues (localStorage)

## Si ta hapësh

Hap `index.html` në shfletues. Nuk duhet instalim as server.

## Struktura

- `css/` stilet, të ndara sipas pjesëve (ngjyra, layout, butona, forma, karta, kuiz, animacione)
- `js/` kodi, ku çdo skedar ka një punë (zëri, tema, skedat, kontrolli, kuizi, krijimi, fjalori)
- `js/words-*.js` fjalët fillestare të fjalorit
- `docs/FJALORI.md` si shtohen fjalë të reja

