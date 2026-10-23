# Povijesni pomoćnik – upute

## Što je u mapi
- `index.html` – chat aplikacija (radi na mobitelu, može se „Dodati na početni zaslon”)
- `knjiga.js` – **jedini izvor znanja**: bilješke iz udžbenika po lekcijama
- `netlify/functions/chat.js` – spaja se na Claude i šalje mu SAMO bilješke iz `knjiga.js`
- `netlify.toml`, `manifest.webmanifest`, `ikona.svg`

## Postavljanje na Netlify (jednom)
Funkcije ne rade kod povlačenja ZIP-a mišem („Netlify Drop”), zato koristi jedan od ova dva načina:

**A) GitHub (preporučeno, najlakše za kasnije dopune)**
1. Napravi novi repozitorij na GitHubu i u njega prenesi sadržaj ove mape.
2. Na Netlifyju: *Add new site → Import an existing project → GitHub* → odaberi repozitorij → *Deploy*.

**B) Netlify CLI**
```
npm i -g netlify-cli
cd povijest-bot
netlify deploy --prod
```

**Zatim API ključ:** Netlify → *Site configuration → Environment variables → Add*
- `ANTHROPIC_API_KEY` = tvoj ključ s https://console.anthropic.com
- (neobavezno) `MODEL` = npr. `claude-haiku-5-5` (zadano, jeftino) ili `claude-sonnet-5-5`

Nakon dodavanja ključa napravi *Deploys → Trigger deploy*.

Bez ključa aplikacija i dalje radi u načinu **„bez AI”**: pretražuje bilješke i vraća odlomak iz knjige; kviz, sažetak i pojmovnik rade uvijek.

## Dodavanje nove lekcije
U `knjiga.js` dodaj novi objekt na kraj popisa `LEKCIJE` (prije `];`):
```js
{
  id: "kratki-id",
  cjelina: "III. ...",
  naslov: "1. Naslov lekcije",
  stranice: "44–49",
  tekst: `
NASLOV ODLOMKA
Tekst odlomka...

PONOVIMO – ...
Kratki sažetak.
`,
  pitanja: [
    { p: "Pitanje?", o: "Odgovor iz knjige." }
  ]
},
```
Ili mi samo pošalji slike novih stranica pa ću ja dopuniti `knjiga.js`. Ako koristiš GitHub, zamijeni datoteku i Netlify će sam objaviti novu verziju.
