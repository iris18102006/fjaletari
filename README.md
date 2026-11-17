# Fjalëtari

Aplikacion web në shqip për klasat: mësuesi krijon klasë dhe kuize, nxënësit hyjnë me emër, mbiemër dhe fjalëkalim, dhe mësuesi sheh rezultatet.

## Çfarë bën

- Dy faqe hyrjeje: një për mësuesit, një për nxënësit
- Mësuesi krijon klasë dhe merr një kod dhe një link për t’u bashkuar
- Mësuesi sheh sa nxënës ka, krijon kuize dhe për secilin sheh emrin, pikët dhe ku ka gabuar nxënësi

- Kontrollon nëse një fjalë është në fjalor dhe të jep kuptimin me një shembull në fjali
- Të thotë "pothuajse" kur e harron ë-në ose ç-në, dhe sugjeron fjalë të ngjashme
- Kur një fjalë nuk është në fjalorin e vogël, të çon te fjalorthi.com për ta kontrolluar
- Kuiz automatik nga fjalori, me 8 pyetje të reja çdo herë
- Krijon kuizet e tua, me 4 përgjigje dhe një të saktë
- Shton fjalë të tua në fjalor
- Tinguj të ndryshëm për përgjigje të sakta dhe të gabuara (Web Audio, pa skedarë zanore)
- Light dhe dark mode
- Klasat, kuizet dhe rezultatet ruhen në Firebase; fjalët e shtuara dhe tema ruhen në shfletues

## Si ta nisësh

Shih `docs/FIREBASE.md`. Duhet një projekt Firebase falas dhe `js/config.js`.

## Struktura

- `css/` stilet, të ndara sipas pjesëve (ngjyra, layout, butona, forma, karta, kuiz, animacione)
- `js/` kodi, ku çdo skedar ka një punë (zëri, tema, skedat, kontrolli, kuizi, krijimi, fjalori)
- `js/words-*.js` fjalët fillestare të fjalorit
- `docs/FJALORI.md` si shtohen fjalë të reja

## Ikonat

Lucide dhe Feather, me licencë të hapur (ISC/MIT). Shih `NOTICE.md`.

## Licenca

MIT
