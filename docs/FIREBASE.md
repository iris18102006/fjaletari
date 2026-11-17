# Lidhja me Firebase (falas, rreth 5 minuta)

Që mësuesi dhe nxënësit të shihen nga pajisje të ndryshme, aplikacioni përdor Firebase.

1. Hap https://console.firebase.google.com dhe krijo një projekt (Analytics mund ta çaktivizosh).
2. Te Project settings, shto një Web app (ikona `</>`) dhe kopjo `firebaseConfig`.
3. Ngjit vlerat `apiKey`, `authDomain`, `projectId`, `appId` te `js/config.js`.
4. Authentication, Sign-in method: aktivizo **Email/Password**.
5. Authentication, Settings, Authorized domains: shto `iris18102006.github.io`.
6. Firestore Database: krijo databazën (production mode), pastaj te skeda Rules ngjit përmbajtjen e `firestore.rules` dhe shtyp Publish.
7. Bëj commit dhe push. Mbaroi.

Si funksionon: nxënësit nuk kanë email. Kodi i klasës, emri dhe mbiemri kthehen në brendësi në një adresë të brendshme, dhe fjalëkalimin e ruan Firebase i enkriptuar.
