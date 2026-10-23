// =====================================================================
//  IZVOR ZNANJA – bilješke iz udžbenika Povijest 5 (po lekcijama)
//  Bot smije odgovarati SAMO iz ovog sadržaja.
//  Nova lekcija = novi objekt u popisu LEKCIJE (id, cjelina, naslov,
//  stranice, tekst, pitanja). Odlomke odvajaj praznim redom.
// =====================================================================
var LEKCIJE = [
{
  id: "uvod-u-povijest",
  cjelina: "I. Uvod u povijest",
  naslov: "1. Uvod u povijest",
  stranice: "10–13",
  tekst: `
ŠTO JE POVIJEST I ZAŠTO JE UČIMO
Sve što nas okružuje ima neki početak, pa ima i prošlost. Važne događaje iz prošlosti koje pamtimo, bilježimo i proučavamo zovemo povijest.

Povijest je znanost koja otkriva, proučava i objašnjava prošlost ljudi od najstarijih vremena do danas. Ljudi su kroz dugo razdoblje živjeli, radili, učili, mijenjali svijet, činili dobre i loše stvari i učili iz svojih pogrešaka.

Rimski govornik Ciceron rekao je prije više od dvije tisuće godina da je povijest učiteljica života. To znači da povijest učimo kako ne bismo ponavljali greške iz prošlosti, a kako bismo usvojili ono dobro što su ljudi ostvarili. Kad razumijemo prošlost, lakše shvaćamo i objašnjavamo sadašnjost.

Povjesničari su znanstvenici koji istražuju prošlost. Oni nastoje odgovoriti zašto se nešto dogodilo, kako se dogodilo i što se promijenilo kao posljedica toga.

Prvi povjesničar, kojeg nazivamo ocem povijesti, bio je Grk Herodot. Rođen je oko 484. godine prije Krista u gradu Halikarnasu u Maloj Aziji (danas obala Turske). Mnogo je putovao. U svojoj knjizi „Povijest” piše da su Grci dolazili u Egipat zbog trgovine, zbog vojne službe ili da bi razgledali zemlju.

Opća povijest proučava povijest svih naroda, a nacionalna povijest proučava povijest samo jednog naroda.

Slika u knjizi: Trg bana Josipa Jelačića u Zagrebu u drugoj polovini 19. stoljeća.

POVIJESNI IZVORI (VRELA)
Povijesni izvori ili vrela su svi sačuvani ostatci prošlosti koji nam govore o povijesti. Postoji pet vrsta:
- materijalni izvori – građevine, oružje, oruđe, novac, nakit; čuvaju se u muzejima
- pisani izvori – dokumenti, zakoni, povelje, natpisi, pisma, novine; čuvaju se u arhivima i knjižnicama
- slikovni izvori – slike, fotografije, filmske i digitalne snimke; čuvaju se u galerijama i fototekama
- zvukovni izvori – audio i video zapisi na različitim medijima (magnetofonske vrpce, gramofonske ploče, kasete, CD, DVD); čuvaju se u filmotekama i fonotekama
- usmena predaja – priče, legende, mitovi, bajke; prenose se usmeno

Povjesničari izvore moraju temeljito proučiti da bi utvrdili je li izvor vjerodostojan, tj. može li se njime istinito opisati prošlost. Neki su izvori lako dostupni (dokumenti, slike), a do drugih se teško dolazi jer su često oštećeni ili se nalaze pod zemljom.

Pojmovnik: antika – kultura grčko-rimskog svijeta i svih zemalja koje su bile pod utjecajem grčke i rimske kulture. Vjerodostojan – koji je dostojan povjerenja, koji ne izaziva sumnju.

ARHEOLOGIJA
Arheologija je znanost koja preko materijalnih izvora, pronađenih sustavnim iskapanjem ili slučajno, objašnjava kako su ljudi nekad živjeli. Mjesta arheoloških iskapanja ponekad se vide na površini (ostatci starih građevina), a ponekad su skrivena ispod zemlje (npr. grobovi). Arheolozi pri iskapanju moraju biti vrlo oprezni da ne oštete predmete. Tijekom iskapanja svaki se predmet bilježi i fotografira kako bi se točno znalo gdje je pronađen. Nakon čišćenja i zaštite predmeti se predaju muzeju na čuvanje.

MUZEJ
Muzeji su ustanove u kojima se čuvaju predmeti koje su napravili ljudi i koji su nastali djelovanjem prirode. Mnogi su muzeji posvećeni jednom području, pa postoje posebni povijesni i arheološki muzeji. Arheološki muzej u Splitu, utemeljen 1820., najstariji je muzej u Hrvatskoj. Muzeji predmete dobivaju arheološkim iskapanjima, darovanjem i kupnjom. Zbog starosti i vrijednosti mnogi se predmeti čuvaju u staklenim vitrinama ili u posebnim uvjetima (na određenoj temperaturi) da se ne bi oštetili.

PONOVIMO – UVOD U POVIJEST
Povijest je znanost koja otkriva, proučava i objašnjava prošlost ljudi. Herodot je otac povijesti. Povijest može biti opća i nacionalna. Povijesni izvori: materijalni, pisani, slikovni, zvukovni i usmena predaja. Čuvaju se u muzejima, arhivima, knjižnicama, galerijama, filmotekama i fonotekama.
Istraži: Arheološki muzej u Zagrebu, Hrvatski povijesni muzej, Hrvatski državni arhiv.
`,
  pitanja: [
    { p: "Što je povijest?", o: "Znanost koja otkriva, proučava i objašnjava prošlost ljudi od najstarijih vremena do danas." },
    { p: "Tko je otac povijesti i odakle je bio?", o: "Grk Herodot, rođen oko 484. pr. Kr. u Halikarnasu u Maloj Aziji." },
    { p: "Tko je rekao da je povijest učiteljica života?", o: "Rimski govornik Ciceron." },
    { p: "Nabroji pet vrsta povijesnih izvora.", o: "Materijalni, pisani, slikovni, zvukovni izvori i usmena predaja." },
    { p: "Gdje se čuvaju pisani izvori?", o: "U arhivima i knjižnicama." },
    { p: "Koji je najstariji muzej u Hrvatskoj?", o: "Arheološki muzej u Splitu, utemeljen 1820." },
    { p: "Čime se bavi arheologija?", o: "Preko materijalnih izvora pronađenih iskapanjem objašnjava kako su ljudi nekad živjeli." },
    { p: "Koja je razlika između opće i nacionalne povijesti?", o: "Opća proučava povijest svih naroda, a nacionalna povijest samo jednog naroda." }
  ]
},
{
  id: "vrijeme-i-prostor",
  cjelina: "I. Uvod u povijest",
  naslov: "2. Vrijeme i prostor",
  stranice: "14–17",
  tekst: `
RAČUNANJE VREMENA
Ljudi su još davno smislili kalendare da bi se lakše snalazili u vremenu. U prošlosti su razni narodi brojili godine od nekog događaja koji je bio važan samo za njih. Takav način računanja vremena zove se era. Era je dugo vremensko razdoblje koje počinje nekim važnim događajem.

Najveći dio čovječanstva danas računa vrijeme od rođenja Isusa Krista – to je kršćanska era. Za događaje prije Kristova rođenja kažemo da su se dogodili prije Krista (pr. Kr.) i brojimo ih unatrag.

Da bismo lakše i preglednije prikazali tijek događaja, koristimo crtu ili lentu vremena. Kronologija je proučavanje različitih načina računanja vremena i utvrđivanje vremenskog slijeda događaja.

Slika u knjizi: staroegipatski kalendar u hramu Kom Ombo (2. st. pr. Kr.) – zapis na zidu hrama sa simbolima za dane, mjesece i godišnja doba.

Računanje vremena kod različitih naroda i vjera:
- Židovi – od 3761. g. pr. Kr. – postanak svijeta prema židovskom vjerovanju
- Grci – od 776. g. pr. Kr. – prve Olimpijske igre
- Rimljani – od 753. g. pr. Kr. – osnutak grada Rima
- Kršćani – od 1. g. – rođenje Isusa Krista
- Muslimani – od 622. g. – prelazak Muhameda iz Meke u Medinu

Pojmovnik: Meka – grad u Saudijskoj Arabiji, duhovno središte vjere islama. Medina – grad u Saudijskoj Arabiji u koji je prorok Muhamed preselio zbog sukoba sa svojim protivnicima u Meki.

RAZDOBLJA PROŠLOSTI
Od pojave čovjeka do danas prošlo je nekoliko milijuna godina. Da bi se lakše snašli, povjesničari su to vrijeme podijelili na nekoliko velikih povijesnih razdoblja.

Granica između prapovijesti i povijesti je otkriće pisma oko 3300. godine pr. Kr. Razdoblje prije pojave pisma je prapovijest, a dijeli se na kameno i metalno doba. Razdoblje nakon otkrića pisma je povijest; traje do danas i dijeli se na stari vijek, srednji vijek, novi vijek i najnovije doba.

Ta razdoblja nisu u svim dijelovima svijeta nastupila istodobno, jer su se brojni dijelovi svijeta razvijali na različite načine i različitom brzinom.

POVIJEST I GEOGRAFIJA
Da bismo lakše proučavali prošlost, moramo se snalaziti i u vremenu i u prostoru. Za snalaženje u prostoru koristimo geografske zemljovide. Geografska obilježja nekog prostora mnogo utječu na život ljudi, pa se u povijesti služimo povijesnim zemljovidima – na njima se vidi kako su se doseljavali narodi i kako su nastajale i propadale države.

Zbirku zemljovida zovemo atlas. Ta riječ potječe od starogrčkog mitološkog bića Atlasa, koji je prema mitu morao nositi nebeski svod na leđima.

PONOVIMO – RAČUNANJE VREMENA
Pojmovi: era, kronologija, kalendar, crta (lenta) vremena. Zemljovidi mogu biti povijesni i geografski. Atlas je zbirka zemljovida.
`,
  pitanja: [
    { p: "Što je era?", o: "Način računanja vremena od nekog važnog događaja; dugo razdoblje koje počinje važnim događajem." },
    { p: "Od kojeg događaja računamo kršćansku eru?", o: "Od rođenja Isusa Krista." },
    { p: "Od kojeg događaja su Grci računali vrijeme i koje godine?", o: "Od prvih Olimpijskih igara, 776. g. pr. Kr." },
    { p: "Što je granica između prapovijesti i povijesti?", o: "Otkriće pisma, oko 3300. g. pr. Kr." },
    { p: "Na koja se razdoblja dijeli povijest?", o: "Stari vijek, srednji vijek, novi vijek i najnovije doba." },
    { p: "Na koja se doba dijeli prapovijest?", o: "Na kameno i metalno doba." },
    { p: "Što je atlas i odakle mu ime?", o: "Zbirka zemljovida; ime po starogrčkom mitološkom biću Atlasu koji je nosio nebeski svod." },
    { p: "Što je kronologija?", o: "Proučavanje načina računanja vremena i utvrđivanje vremenskog slijeda događaja." }
  ]
},
{
  id: "prapovijest-pregled",
  cjelina: "II. Ljudi prapovijesnog doba",
  naslov: "Pregled cjeline: Ljudi prapovijesnog doba",
  stranice: "18–19",
  tekst: `
VREMENSKA CRTA CJELINE
- oko 3,2 milijuna godina pr. Kr. – najstariji ostatci čovjeka (Lucy)
- oko 2,5 milijuna godina pr. Kr. – najstariji ostatci kamenog oruđa
- 11. tisućljeće pr. Kr. – mezopotamska keramička posuda
- oko 5000. pr. Kr. – početak metalnog doba

U ovoj cjelini učimo: usporediti život ljudi u starijem i mlađem kamenom dobu u svijetu i u Hrvatskoj; opisati društvene promjene u prapovijesti; objasniti raslojavanje društva u metalno doba (vučedolska kultura i Kelti); razlikovati skupljače hrane i lovce, ratare i stočare, obrtnike i trgovce; izdvojiti najvažnije izume u prapovijesti; objasniti najstarija vjerovanja; navesti primjere prvih poznatih kalendara na hrvatskom prostoru.
`,
  pitanja: [
    { p: "Kada je otprilike počelo metalno doba?", o: "Oko 5000. g. pr. Kr." },
    { p: "Koliko su stari najstariji ostatci kamenog oruđa?", o: "Oko 2,5 milijuna godina." }
  ]
},
{
  id: "pojava-covjeka",
  cjelina: "II. Ljudi prapovijesnog doba",
  naslov: "1. Pojava i prostorno širenje čovjeka",
  stranice: "20–23",
  tekst: `
AFRIKA – KOLIJEVKA ČOVJEČANSTVA
Ostatci najstarijih ljudi pronađeni su u istočnoj Africi. Tamo su pronađeni ostatci kostura ženske osobe koja je živjela prije otprilike 3,2 milijuna godina; znanstvenici su joj dali ime Lucy. Klimatski uvjeti u Africi pogodovali su čovjekovu načinu života, za razliku od sjeverne Zemljine polutke, koja je tada velikim dijelom bila pod ledom, a najstariji čovjekovi predci nisu bili prilagođeni tako niskim temperaturama.

Lucy je izgledom bila slična čimpanzi, bila je visoka svega 1,1 m i teška 27 kg. Na osnovi kostura utvrdilo se da se Lucy, poput čovjeka, kretala uspravno, na dvije noge, ali je imala manji mozak.

Prije otprilike 1,8 milijuna godina čovjek je prvi put naselio dijelove Azije i Europe. To je bio uspravni čovjek, napredniji od svojih prethodnika. Mogao je dugo hodati i trčati, pa je prateći životinje koje je lovio prelazio velike udaljenosti. Izrađivao je neka od najstarijih kamenih oruđa. Prvi je potpuno ovladao korištenjem vatre – nakon što bi se ugasila, znao ju je ponovno upaliti.

Pojmovnik: dažd – kiša, pljusak.

POJAVA NEANDERTALACA
Ostatci ljudskih kostiju pronađeni su u kamenolomu u Neandertalu na sjeveru Njemačke sredinom 19. stoljeća. Pokazalo se da je riječ o dotad nepoznatoj ljudskoj vrsti koju zovemo neandertalci. Neandertalci su naseljavali Europu i dijelove Azije od oko 300 000 do 33 000 godina pr. Kr.

Snažna tjelesna građa omogućila im je prilagodbu na hladne klimatske uvjete koji su tada vladali Europom. Neandertalci su bili sposobni komunicirati govorom i bili su prvi ljudi koji su sahranjivali svoje mrtve – zato zaključujemo da su imali prilično razvijene misaone aktivnosti.

Jedni od najmlađih ostataka neandertalaca pronađeni su u špilji Vindiji kod Varaždina; stari su oko 33 000 godina pr. Kr. Neandertalci su zatim izumrli iz nepoznatog razloga.

Izgled neandertalca (u usporedbi s kromanjoncem): niža i šira lubanja, veći i ravniji nos, spljoštena brada, šira prsa i snažnija građa, kraće i šire noge, niži rast (oko 1,6 – 1,7 m).

Neandertalci su bili snažni, zdepasti ljudi koji su preživljavali hladne zime ledenog doba. Lovili su velike životinje i skupljali plodove. Bili su vješti izrađivači kamenih oruđa za guljenje i pripremu životinjskih koža. Živjeli su u malim skupinama do dvanaestak odraslih osoba, stalno su se kretali za hranom i sklanjali se u špilje i pod stijene.

SUVREMENI ČOVJEK I NJEGOVO PROSTORNO ŠIRENJE
Kao i njegovi predci, i suvremeni se čovjek pojavio u istočnoj Africi. Odatle se proširio na sve kontinente i prilagodio se vrlo različitim uvjetima, od tropskih vrućina do temperatura ispod ništice. Razina mora tada je bila znatno niža nego danas, pa su na mjestima nekih morskih prolaza postojali kopneni prijelazi (npr. Beringov prolaz) i čovjek je mogao prijeći s jednog kontinenta na drugi.

Suvremeni čovjek je prije oko 45 000 godina naselio istočnu Europu, a zatim i ostale njezine dijelove. Razvijene umne sposobnosti omogućile su mu izradu naprednijeg kamenog oružja i oruđa, što je pridonijelo njegovoj prevlasti nad neandertalcem. Nestanak neandertalaca do danas nije razjašnjen; dio stručnjaka smatra da ih je istisnuo suvremeni čovjek. Mišljenja su podijeljena i o tome jesu li se suvremeni čovjek i neandertalac miješali.

Prema nalazištu Cro-Magnon u Francuskoj suvremeni čovjek nosi i naziv kromanjonac.

Na zemljovidu „Prostorno širenje čovjeka” prikazani su: područje prvih hominida (Afrika), područje nastanjeno neandertalcima (Europa i dio Azije), kopneni mostovi te smjerovi širenja vrsta Homo habilis, Homo erectus i Homo sapiens.

Slika u knjizi: kamena sjekira iz sela Poleskoye u Ukrajini.

PONOVIMO – AFRIKA, KOLIJEVKA ČOVJEČANSTVA
Afrika: pogodni klimatski uvjeti, Lucy. Prostorno širenje čovjeka: prešao iz Afrike u Aziju i Europu, ovladao korištenjem vatre, izrađivao kamena oruđa. Neandertalac: razvijene misaone aktivnosti, koristio govor, špilja Vindija kod Varaždina. Kromanjonac: u Europu dolazi prije oko 40 000 godina, izrađivao naprednije kameno oruđe i oružje.
`,
  pitanja: [
    { p: "Zašto Afriku zovemo kolijevkom čovječanstva?", o: "Jer su ondje (u istočnoj Africi) pronađeni ostatci najstarijih ljudi." },
    { p: "Tko je Lucy i koliko je stara?", o: "Ženska osoba čiji su ostatci pronađeni u istočnoj Africi; živjela je prije oko 3,2 milijuna godina." },
    { p: "Koji je čovjek prvi potpuno ovladao vatrom?", o: "Uspravni čovjek – znao ju je ponovno upaliti kad bi se ugasila." },
    { p: "Gdje su pronađeni jedni od najmlađih ostataka neandertalaca u Hrvatskoj?", o: "U špilji Vindiji kod Varaždina." },
    { p: "Po čemu zaključujemo da su neandertalci imali razvijene misaone aktivnosti?", o: "Komunicirali su govorom i prvi su sahranjivali svoje mrtve." },
    { p: "Odakle dolazi naziv kromanjonac?", o: "Po nalazištu Cro-Magnon u Francuskoj." },
    { p: "Što je suvremenom čovjeku olakšalo prelazak na druge kontinente?", o: "Niža razina mora – postojali su kopneni prolazi (npr. Beringov)." }
  ]
},
{
  id: "orudja-i-tehnike",
  cjelina: "II. Ljudi prapovijesnog doba",
  naslov: "2. Čovjek otkriva nova oruđa i tehnike",
  stranice: "24–29",
  tekst: `
OTKRIĆE VATRE
Najraniji tragovi čovjekova korištenja vatre stari su oko 2 milijuna godina. Obično se pojava vatre u čovjekovu životu tumači kao posljedica udara groma koji je izazvao požar. Uporaba vatre donijela je korjenite promjene u čovjekov život: hrana je postala kvalitetnija jer se namirnice mogle pripremati na vatri. Vatra je zagrijavala hladne špilje i osvjetljavala njihovu mračnu unutrašnjost. Pružala je i sigurnost od predatora – plašila je i tjerala divlje životinje iz čovjekovih skloništa.

Paljenje vatre: čovjekovi predci palili su vatru trljanjem jednog komada drva o drugi ili kresanjem jednog komada kamena o drugi.

PRVA ORUĐA
Najstariji ostatci kamenog oruđa pronađeni su u istočnoj Africi i stari su oko 2,5 milijuna godina. Oruđe se izrađivalo okresivanjem jednog komada kamena o drugi, čime su se dobivali oštri rubovi. Takva su oruđa imala višestruku namjenu: služila su kao noževi, sjekire, strugala ili oruđa za kopanje.

KLIMA UZROKUJE PROMJENE
Završetak starijeg kamenog doba obilježen je velikim klimatskim promjenama. Prije oko 12 000 godina završilo je ledeno doba – topio se led na sjeveru Zemlje i podizala se razina mora. Nastale su nove rijeke i jezera, što je pružilo mogućnosti za ribolov i dovelo do izrade plovila. Bili su to monoksili – čamci izdubljeni od debla – i splavi.

Zbog klimatskih promjena izumrle su neke ledenodobne životinje (npr. mamuti), a druge su se povukle daleko na sjever. Ljudi su zato morali promijeniti način lova jer su sada lovili brže životinje: jelene, srne i divlje svinje. Promijenile su se vrste i izgled oružja – veću su važnost dobila koplja, harpuni i ostala oružja za bacanje. Izum luka i strijele donio je pravu revoluciju u lovačkim aktivnostima.

Pojmovnik: harpun – motka ili koplje sa šiljkom na vrhu. Revolucija – korjenit preobražaj, preokret na nekom polju života i rada.

NEOLITIČKA REVOLUCIJA I PLODNI POLUMJESEC
Tijekom mlađeg kamenog doba (neolitika) u svakodnevnom životu ljudi zbile su se brojne promjene koje nazivamo neolitičkom revolucijom. Ona je počela u 11. tisućljeću prije Krista na području takozvanog Plodnog polumjeseca. Plodni polumjesec proteže se od Egipta, preko istočnog Sredozemlja, do Iranske visoravni.

Najvažnije novosti neolitičke revolucije: razvoj poljodjelstva i stočarstva, pojava stalnih nastambi i naselja te početak keramičke proizvodnje. Neolitička revolucija nije se na svim područjima dogodila istodobno. Zahvaljujući postupku glačanja kamena oruđa su postala znatno naprednija i finija. Istodobno je napredovala izrada odjevnih predmeta, čemu je pridonijelo korištenje tkalačkog stana.

RAZVOJ POLJODJELSTVA I STOČARSTVA
Za razliku od prethodnog razdoblja, u kojem je čovjek ovisio o lovu i skupljanju plodova, mlađe kameno doba donijelo je organiziranu proizvodnju hrane. Prve biljke čovjek je uzgojio od divljih žitarica na području Plodnog polumjeseca. O prelasku na poljodjelstvo svjedoče ostatci uzgojenih biljaka, prostori za skladištenje, kameni žrvnji za mljevenje te oruđa za obradu zemlje, poput motike ili pluga.

Čovjek je pripitomio i neke divlje životinje: najprije ovce i koze, a potom svinje, govedo i konja. Razvoj poljodjelstva i stočarstva doveo je do prelaska na sjedilački način života, gradnje stalnih nastambi i nastanka prvih naselja. Nomadski način života ipak nije potpuno nestao, jer su se ljudi, kada bi zbog obrađivanja iscrpili zemlju, morali seliti.

Pojmovnik: nomadi – oni koji se često sele (npr. lovci, ribari, stočari).

KERAMIČKA PROIZVODNJA
Jedna od važnih novosti neolitika su keramički proizvodi, koji su se dobivali pečenjem gline. Uglavnom je riječ o raznim vrstama posuda za domaćinstvo. Posude su se isprva oblikovale ručno, a kasnije pomoću lončarskog kola. Lončarsko kolo omogućilo je finiju i precizniju obradu i povećanje proizvodnje.

Keramički proizvodi isprva su se sušili na suncu, pa nisu bili dovoljno čvrsti ni prikladni za čuvanje tekućine. Kako bi posude postale čvršće, počele su se peći, isprva na otvorenoj vatri, a kasnije u jednostavnim keramičkim (lončarskim) pećima. Lončarske peći mogle su dosegnuti temperaturu od oko 900 °C, što je posudu činilo čvrstom i za svestranu uporabu.

Obrada posuda isprva je bila gruba i bez ukrasa. U kasnijim razdobljima neolitika pojavljuju se raznoliki ukrasi, izvedeni prije pečenja – slikanjem, utiskivanjem ili urezivanjem. Višak proizvoda mijenjao se za drugu robu ili prodavao, pa je tako započela trgovinska razmjena.

Najprvotniji (primarni) način ukrašavanja bio je otiskivanje prsta, nokta ili vrha kakvog predmeta u još meku glinu. U primorskim krajevima posude su se ukrašavale otiskivanjem ruba školjke (najčešće srčanke), a koristili su se i različiti koštani i kremeni alati te puževe kućice.

Slika u knjizi: keramička posuda iz Smilčića kod Zadra, danilska kultura.
Pojmovnik: primarno – prvo po vremenu nastanka.

OBRADA METALA
U završnom razdoblju prapovijesti čovjek je upoznao obradu metala. Metale je u početku pronalazio slučajno, na površini, a kasnije ih je iskapao u rudnicima ispod zemlje. Najstariji primjeri metalnog oruđa i oružja bili su od bakra, a načinjeni su oko 5000. pr. Kr. Isprva su to bili jednostavni komadi bakra – sjekire i čekići nastali kovanjem sirovog bakra.

Kada se saznalo da se bakar može taliti (pri visokim temperaturama prelazi u tekuće stanje), mogla su se izrađivati kvalitetnija metalna oruđa. Bakar se u početku talio nad otvorenom vatrom, a potom u talioničkim pećima. Tekući metal lijevao se u kamene ili keramičke kalupe. Kad bi se metal stvrdnuo, kalupi su se razbijali, a metalni predmeti dodatno obrađivali brušenjem i glačanjem.

Bakreno oruđe i oružje lako se savija i iskrivljuje. Zato se oko 2500. godine pr. Kr. bakru pri taljenju počeo dodavati kositar i tako je nastala bronca, koja je znatno čvršća i pogodnija za izradu oruđa, oružja i ratne opreme. Krajem I. tisućljeća prije Krista (kako piše u udžbeniku) u svakodnevnu su uporabu ušli predmeti od željeza, čime je nakon brončanog započelo željezno doba.

Slika u knjizi: kalup za izradu metalnog koplja iz Vučedola kod Vukovara.

Plemenite kovine: od početaka uporabe bakra počelo se upotrebljavati i zlato. Plemenite kovine javljaju se rjeđe i najčešće služe za izradu ukrasnih, prestižnih predmeta (nakita). Pojedini tipovi oružja od plemenitih kovina iz eneolitika i ranog brončanog doba nisu imali praktičnu funkciju, nego su bili znak prestiža.

Pojmovnik: kalup – u metalurgiji oblik u koji se lijeva metal da bi nakon hlađenja dobio željeni oblik. Kovina – drugo ime za metal. Eneolitik – bakreno doba.

PONOVIMO – STARIJE KAMENO, MLAĐE KAMENO I METALNO DOBA
Starije kameno doba: otkriće vatre, prva oruđa.
Mlađe kameno doba: kraj ledenog doba, razvoj poljodjelstva i stočarstva, sjedilački način života, prva naselja i gradovi, keramička proizvodnja, trgovinska razmjena.
Metalno doba: bakar, bronca, željezo; taljenje, brušenje i glačanje.
`,
  pitanja: [
    { p: "Koliko su stari najraniji tragovi korištenja vatre?", o: "Oko 2 milijuna godina." },
    { p: "Kako su prvi ljudi palili vatru?", o: "Trljanjem drva o drvo ili kresanjem kamena o kamen." },
    { p: "Što je bila neolitička revolucija i gdje je počela?", o: "Niz velikih promjena u mlađem kamenom dobu (poljodjelstvo, stočarstvo, naselja, keramika); počela je u 11. tisućljeću pr. Kr. u Plodnom polumjesecu." },
    { p: "Što su monoksili?", o: "Čamci izdubljeni od debla." },
    { p: "Koji je izum donio revoluciju u lovu?", o: "Luk i strijela." },
    { p: "Kako nastaje bronca?", o: "Taljenjem bakra uz dodavanje kositra (oko 2500. pr. Kr.)." },
    { p: "Kojim su se tehnikama ukrašavale keramičke posude?", o: "Slikanjem, utiskivanjem i urezivanjem, prije pečenja." },
    { p: "Koje je životinje čovjek najprije pripitomio?", o: "Ovce i koze, a zatim svinje, govedo i konja." },
    { p: "Što je kalup?", o: "Oblik u koji se lijeva metal da bi nakon hlađenja dobio željeni oblik." }
  ]
},
{
  id: "zivot-kamenog-doba",
  cjelina: "II. Ljudi prapovijesnog doba",
  naslov: "3. Život ljudi kamenog doba",
  stranice: "30–37",
  tekst: `
NOMADSKI ŽIVOT (STARIJE KAMENO DOBA – PALEOLITIK)
Paleolitik (starije kameno doba) počinje velikim skokom – otkrićem oruđa, „produžene čovjekove ruke”. To je najdulja etapa ljudske povijesti, u kojoj se čovjek razvijao vrlo sporo.

Život ljudi u starijem kamenom dobu obilježen je neprestanim kretanjem u potrazi za hranom, pri čemu su prelazili velike udaljenosti. Kretanja životinja koje je lovio određivala su i čovjekove seobe. Zbog takvog načina života čovjek nije gradio stalne nastambe, nego je živio u privremenim skloništima, ponajprije u špiljama. Osim lovom, prehranjivao se i skupljanjem divljih žitarica i raznog bobičastog voća. Od ulovljenih životinja dobivao je hranu, a od njihove kože pravio je odjeću. Okresivanjem kamena izrađivao je oruđa i oružja oštrih rubova. Vatru je palio trljanjem ili udaranjem kremena da iskra zapali suhu travu.

ŽIVOT U ŠPILJI NA HUŠNJAKOVU BRDU
Najznačajniji ostatci iz starijeg kamenog doba u Hrvatskoj pronađeni su 1899. godine na Hušnjakovu brdu u Krapini. Istraživanja su pokazala da je u špilji živjela zajednica od osamdesetak neandertalaca različite dobi i spola – riječ je o obiteljskoj zajednici. Ostatci pepela i ognjišta potvrđuju da se krapinski neandertalac služio vatrom te je na njoj pripremao hranu. Lovio je životinje u okolnim šumama, o čemu svjedoče brojne životinjske kosti pronađene u špilji. Služio se kamenim oruđima kojima je obrađivao kožu. Krapinski neandertalac brinuo je o bolesnim i teško pokretnim članovima zajednice: pronađeni su ostatci muškarca koji je bio bez ruke i trebao je pomoć drugih u svakodnevnom životu.

Ostatke je otkrio hrvatski prirodoslovac Dragutin Gorjanović-Kramberger u polušpilji na dubini od 8,80 m; starost ostataka procjenjuje se na oko 130 000 godina.

Izgled neandertalaca: imali su nisku i izduženu lubanju, izražene nadočne lukove, izbočeni srednji dio lica sa širokim nosom; donja čeljust nije imala izbočenu bradu, a prsa su im bila bačvasta. Bili su snažno građeni, otprilike dvostruko snažniji od današnjih ljudi, niži od modernih ljudi i teži.

Život zajednice na Hušnjakovu brdu: palili su vatru, pripremali hranu, izrađivali kamena oruđa i obavljali svakodnevne aktivnosti. Ostatci muškarca bez ruke pokazuju da je zajednica brinula o njemu – to krapinske neandertalce približava modernim ljudima.

PRVE NASTAMBE (MLAĐE KAMENO DOBA – NEOLITIK)
U neolitiku je čovjek počeo izrađivati prve stalne nastambe jer je zbog poljodjelstva većinu godine boravio na istom mjestu. Postojale su tri vrste neolitičkih nastambi:
- Zemunice su podzemne nastambe, najčešće ovalnog ili kružnog oblika, ukopane u zemlju. Obično su imale samo jednu prostoriju.
- Kolibe su nadzemne nastambe kružnog i četverokutnog oblika. Najčešće su imale pod od nabijene gline, a zidovi su bili od ispletenog šiblja i pruća oblijepljenog blatom ili od ćerpiča (nepečene gline sušene na suncu). Krov je mogao biti od trske ili slame.
- Sojenice su nastambe na vodi, napravljene na konstrukciji od drvenih stupova koji su ih držali iznad vode. Prve su nastale uz alpska jezera u današnjoj Austriji, Njemačkoj, Švicarskoj i sjevernoj Italiji. Gradile su se na obalama rijeka, jezera i močvara, a stupovi su služili i kao zaštita od poplava.
Na način gradnje i građevni materijal utjecao je zemljopisni smještaj.

POLJODJELSKE ZAJEDNICE MLAĐEG KAMENOG DOBA U HRVATSKOJ
U mlađem kamenom dobu na području Hrvatske nastale su zajednice koje su se bavile poljodjelstvom i stočarstvom. Svaka se prostirala na određenom području, a razlikujemo ih prema materijalnoj kulturi – najviše prema tehnikama ukrašavanja keramičkih posuda te vrstama i oblicima ukrasa. Razlikovale su se i duhovnom kulturom, običajima, a možda i jezikom. Budući da iz tog razdoblja nemamo pisanih izvora, ne znamo imena naroda koji su tamo živjeli. Zato znanstvenici takve zajednice nazivaju kulturama, a naziv kulture određuju prema nalazištu na kojem su pronađeni najtipičniji ostatci.

Veliki dio Slavonije zauzimala je sopotska kultura (prema Sopotu kod Vinkovaca), a čitavo jadransko priobalje danilska kultura (prema Danilu kod Šibenika). Na zemljovidu su označena i nalazišta poput Vele špilje (na Lošinju i na Korčuli) i Malog Korenova.

Naselja sopotske kulture: nositelji sopotske kulture živjeli su u stalnim naseljima u nizinama, često na močvarnom tlu, uvijek u blizini rijeke ili potoka. Naselja su opasivali jarkom, a ponekad i palisadama – riječ je o prvim nizinskim utvrđenim naseljima u ovom dijelu Europe. Unutar naselja nizale su se pravokutne kuće s jednom ili više prostorija, tipične neolitičke gradnje: kostur od greda, a zidovi od šiblja oblijepljenog blatom.

Pojmovnik: palisada – prepreka od zašiljenih stupova zabijenih u zemlju, ograda od kolaca (obično služi u obrambene svrhe).

SJEDILAČKI ŽIVOT
Prelazak na poljodjelstvo zahtijevao je gradnju stalnih nastambi, jer su ljudi zbog obrađivanja zemlje morali najveći dio godine boraviti na jednom mjestu. U prvom razdoblju poljodjelstva čovjek je najviše uzgajao razne vrste žitarica. Uz lov, kojim se i dalje bavio, u neolitiku je započeo i s ribolovom. Uzgoj domaćih životinja jedno je od glavnih obilježja sjedilačkog načina života. Neolitičke promjene donijele su niz novih poslova u kući i oko kuće, koji u prethodnim razdobljima nisu prakticirani.

PRVI „UMJETNICI”
Krajem starijeg kamenog doba nastala su i prava umjetnička djela. Najprije je riječ o špiljskom slikarstvu, čiji su najpoznatiji primjeri otkriveni u špiljama Altamira (Španjolska) i Lascaux (Francuska). Starost tih crteža procjenjuje se na oko 20 000 godina. Najčešće prikazuju goveda, konje i jelene, ponekad otiske ljudskog dlana, a samo iznimno ljudske likove. Ne zna se pouzdano jesu li prvi „umjetnici” željeli prikazati scene lova i svakodnevnog života ili prizvati duhove zaštitnike.

Špiljsko slikarstvo zabilježeno je u stotinjak špilja, najvećim dijelom u Španjolskoj, Francuskoj i Italiji. Slikali su u mračnim unutrašnjostima špilja.

Prikaz bizona i divokoze iz Romualdove pećine u Istri star je više od 30 000 godina i rijedak je primjer špiljske umjetnosti starijeg kamenog doba u jugoistočnoj Europi. Među 44 prikaza ističu se bizon i divokoza.

Drugi oblik umjetnosti starijeg kamenog doba su ženske figurice. Najčešće su izrezbarene u kamenu, ponekad u drvu i kosti, a samo iznimno od pečene gline. Zajednički ih nazivamo paleolitske Venere. Većinom su to gole ženske figure s naglašenim simbolima majčinstva i plodnosti (grudi i trbuh).

Willendorfska Venera najpoznatija je paleolitska Venera; pronađena je u austrijskom mjestu Willendorfu, a čuva se u Prirodoslovno-povijesnom muzeju u Beču. Venera iz Brassempouya razlikuje se od ostalih jer ima jasno izražene crte lica.

U mlađem kamenom dobu umjetnički se izričaj očituje u ukrašavanju keramičkih posuda za svakodnevnu uporabu. Ukrasi na posudama kreću se od običnih urezanih ili udubljenih crta do složenih obojenih ukrasa.

NAJSTARIJA VJEROVANJA
Prva umjetnička ostvarenja usko su povezana s počecima religije. Religija se razvila jer čovjek nije znao objasniti prirodne pojave oko sebe (kišu, vjetar, tuču, grmljavinu), pa ih je tumačio djelovanjem nadnaravnih bića (duhova, bogova). Njih su prikazivali u različitim oblicima i na posebnim mjestima (svetištima) prinosili im žrtve da bi ih odobrovoljili. Svetišta su bila na različitim mjestima, najčešće u pećinama ili uz močvare i jezera. Ondje su se izvodili rituali koje su predvodili vrači (šamani). Vjerovalo se da oni plesom i pjesmom mogu promijeniti odluke bogova, pa je njihov položaj u zajednici bio poseban, a njihova moć ih je svrstavala u predvodnike zajednice.

Razvio se i kult božice majke, koja je prikazivana s naglašenim ženskim obilježjima. O vjerovanjima mlađeg kamenog doba svjedoče i prikazi na keramičkim posudama; vrlo čest motiv bio je sunčev disk, prikazan kao kružnica. Tijekom metalnog doba bogovi su počeli dobivati ljudski lik, a s razlikama među ljudima nastale su i razlike među bogovima – izdvajaju se vrhovna božanstva od onih manje važnih.

Pojmovnik: šaman – vrač koji priziva duhove; čarobnjak, mag.

Stonehenge (Engleska) je prapovijesni spomenik od kružno poslaganih kamenih blokova; služio je u obredne svrhe, a građen je od neolitika do brončanog doba.

PONOVIMO – STARIJE I MLAĐE KAMENO DOBA
Starije kameno doba: nomadi, špilje, lov; Hušnjakovo brdo – neandertalci; špiljsko slikarstvo, paleolitske Venere.
Mlađe kameno doba: stalne nastambe (zemunice, sojenice, kolibe); poljodjelstvo, stočarstvo, ribolov; poljodjelske zajednice – sopotska i danilska kultura.
`,
  pitanja: [
    { p: "Kako su živjeli ljudi u starijem kamenom dobu?", o: "Kao nomadi – stalno su se kretali u potrazi za hranom, lovili i skupljali plodove, živjeli u privremenim skloništima, najčešće špiljama." },
    { p: "Kada su i gdje pronađeni ostatci krapinskog neandertalca?", o: "1899. na Hušnjakovu brdu u Krapini." },
    { p: "Tko je otkrio krapinskog neandertalca?", o: "Dragutin Gorjanović-Kramberger." },
    { p: "Kako znamo da su krapinski neandertalci brinuli o bolesnima?", o: "Pronađeni su ostatci muškarca bez ruke koji je trebao pomoć drugih da preživi." },
    { p: "Koje su tri vrste neolitičkih nastambi?", o: "Zemunice, kolibe i sojenice." },
    { p: "Što su sojenice?", o: "Nastambe na vodi, na drvenim stupovima; prve uz alpska jezera." },
    { p: "Po čemu su nazvane sopotska i danilska kultura?", o: "Po nalazištima: Sopot kod Vinkovaca i Danilo kod Šibenika." },
    { p: "U kojim su špiljama najpoznatije špiljske slike?", o: "Altamira (Španjolska) i Lascaux (Francuska)." },
    { p: "Što su paleolitske Venere i što simboliziraju?", o: "Ženske figurice iz starijeg kamenog doba; simboliziraju majčinstvo i plodnost." },
    { p: "Tko su bili šamani?", o: "Vrači koji prizivaju duhove i predvode obrede; imali su poseban položaj u zajednici." }
  ]
},
{
  id: "zivot-metalnog-doba",
  cjelina: "II. Ljudi prapovijesnog doba",
  naslov: "4. Život ljudi metalnog doba",
  stranice: "38–43",
  tekst: `
UVOD
Ključna prednost metala nad kamenom je u tome što se metal može ponovno upotrijebiti – predmeti koji su se istrošili ili izgubili svoju svrhu mogu se pretopiti u nove. Važna je i njegova mnogostruka uporaba: određeni predmeti mogli su se lako pretvoriti u drugu vrstu, npr. oruđe u oružje u opasnim vremenima, i obrnuto.

ŠTO JE DONIJELA POJAVA METALA
Tehnološki napredak metalnog doba iz osnove je promijenio pretežno seosko društvo prethodnog razdoblja. Pojavila su se nova zanimanja, poput rudara i kovača, a trgovina je doživjela pravi procvat jer više nije bila ograničena na uska lokalna područja. Trgovci metalnim predmetima prelazili su ogromne udaljenosti, a njihovo im je bogatstvo donosilo i ugled u društvu.

Kvalitetnije metalno oružje i ratna oprema promijenili su dotadašnji način ratovanja. Iz redova trgovaca i ratnih vođa izdvojili su se pojedinci i njihove obitelji, koji su postali vladari nad čitavim područjima i skupinama plemena. Tako se oblikuju prve države, a plemenske zajednice prerastaju u narode.

Seobe stanovništva postale su u metalno doba češće i uglavnom su ih uzrokovali brojni ratovi. One su dovodile do miješanja različitih naroda i kultura, ali i do propasti jednih država i nastanka novih.

Gospodarstvo brončanog doba i dalje se temeljilo na poljoprivredi i stočarstvu, ali je metalurgija bronce donijela velik prevrat u društvenom ustroju: traženje i otkrivanje ruda, organizacija njezina vađenja, prerada i trgovina sirovinama i gotovim proizvodima zahtijevali su specijalizirane obrtnike. Uz tu podjelu rada nastao je poseban, moćan i ugledan obrtnički stalež.

Pojmovnik: metalurgija – tehnologije dobivanja i proizvodnje metala iz ruda. Strukturiranje – način kako je neka cjelina složena od svojih dijelova; ovdje dijelovi društva.

VUČEDOL – SREDIŠTE METALURŠKE PROIZVODNJE
Tijekom 3. tisućljeća prije Krista u sjevernom dijelu današnje Hrvatske razvijala se vučedolska kultura. To je razdoblje bakrenog doba, a kultura je dobila naziv prema najpoznatijem nalazištu Vučedolu kod Vukovara. Nastala je miješanjem lokalnog stanovništva s pridošlicama koji su se početkom 3. tisućljeća pr. Kr. doselili s istoka. Doseljenici su donijeli nove tehnologije, u prvom redu tehniku obrade metala. Tako je Vučedol postao metalurško središte u kojem su se proizvodili bakreni predmeti.

Upravo je potraga za bakrom dovela do širenja vučedolske kulture: iz prvobitnog područja u istočnoj Slavoniji i Srijemu proširila se na okolna područja – njezin se utjecaj osjećao sve do današnje Slovenije na zapadu, Češke na sjeveru i Jadrana na jugu. Vučedolska populacija gradila je naselja na uzvišenim položajima ponad rijeka, često dodatno utvrđena drvenim palisadama i opkopima ispunjenim vodom.

Posuda vučedolske kulture s prikazom prvog europskog kalendara (Orion): posuda iz oko 2600. godine pr. Kr. – neki znanstvenici smatraju je prvim europskim kalendarom. Ukrasi na posudi podijeljeni su u četiri paralelna vodoravna pojasa, a svaki pojas predstavlja jedno godišnje doba: prvi pojas prikazuje zviježđe proljeća, drugi zviježđe ljeta, treći zviježđe jeseni, a četvrti zviježđe zime.

MATERIJALNI OSTATCI VUČEDOLSKE KULTURE
Ostatci vučedolske kulture najbrojniji su na području keramičke proizvodnje. Bogatstvom oblika i raznovrsnošću ukrasa posude su prava umjetnička djela. Brojnost ukrašenih posuda svjedoči da su služile u svakodnevnoj uporabi, a ne samo u svečanim prigodama. Vučedolske keramičke posude prepoznatljive su po tamnosmeđoj ili crnoj boji i bijelim ukrasima. Ukrasi na pojedinim posudama daju naslutiti da su stanovnici Vučedola poznavali raspored nebeskih tijela i da su se kao prvi Europljani služili nekom vrstom kalendara.

Osim keramičke proizvodnje vučedolski su majstori ovladali i proizvodnjom metala. Predmete poput sjekira, noževa i drugih uporabnih predmeta proizvodili su uz pomoć dvodijelnih kalupa. Iako su keramička i metalurška proizvodnja bile važne u svakodnevnom životu, osnova razvoja bilo je gospodarstvo temeljeno na stočarstvu i lovu.

Vučedolska golubica: keramička boca u obliku ptice, pronađena 1938. na lokalitetu Gradac u Vučedolu; danas se čuva u Arheološkom muzeju u Zagrebu. Tamne je boje, s bijelim ukrasima po tijelu te na predjelu očiju i kljuna. Posuda je vjerojatno služila u obredne svrhe, koje su u prapovijesno doba izvodili šamani. Pretpostavlja se da se u posudu lijevalo neko piće s halucinacijskim svojstvima. Iako je uvriježeno mišljenje da predstavlja golubicu, postoje i mišljenja da je ustvari riječ o jarebici.
Pojmovnik: halucinacija – pričinjanje, privid.

Vučedolske nastambe: vučedolska populacija živjela je u stalnim i često dugotrajnim naseljima. Gradila je uglavnom nadzemne četvrtaste kuće s podom od dobro nabijene ilovače. Unutrašnjost kuće bila je opremljena ognjištem i posebnom jamom (spremnicom) za spremanje zaliha. Te su jame sekundarno korištene kao otpadne jame. Središte kuće bilo je kružno uzdignuto ognjište, a uz ostalu opremu u kući se često nalazio i mali kućni žrtvenik izrađen od gline. Rekonstrukcija vučedolske kuće nalazi se u Muzeju vučedolske kulture u Vukovaru.
Pojmovnik: sekundarno – koje se pojavljuje kao drugo, sekundarno.

Naselje metalnog doba (ilustracija): prikazani su tekući bakar, kamen koji se koristi kao nakovanj, kalupi za oblikovanje bakra i željeza, peć za taljenje željeza, željezna ruda, tekuće željezo, drveni ugljen, sprava za paljenje vatre, pletenje ovčje vune i lovci.

KELTI
Kelti su narod indoeuropskog podrijetla koji je nastanjivao dijelove središnje i zapadne Europe. Sastojali su se od više različitih plemena koje je povezivala zajednička kultura te nomadski i ratnički način života. Tijekom željeznog doba skupine keltskih plemena raširile su se najvećim dijelom Europe i donijele sa sobom svoju umjetnost, tehnologiju i način života. Nekoliko keltskih plemena naselilo je i dijelove današnje kontinentalne Hrvatske, od njezina sjeverozapada do istoka Slavonije.

Sa sobom su donijeli lončarsko kolo, žrvanj te različite druge elemente svoje materijalne kulture (željezno oružje, nakit…). Keltskim plemenima vladali su plemenski vođe, a veliku ulogu u životu zajednice imali su druidi – svećenici koji su dolazili iz uglednih obitelji. Iz sačuvanih keltskih priča, koje su se prenosile usmenom predajom, doznajemo da su Kelti vjerovali u zagrobni život i u božanstva koja su predstavljala dijelove prirode (hrast, imela i drugo drveće). Među najvažnije aktivnosti Kelta spadalo je ratovanje, pa ne čudi da su proizvodili kvalitetno željezno oružje i ratnu opremu (mač, štit, koplje). Neki od pronađenih primjeraka pokazuju umjetnički pristup njihovu ukrašavanju.

Nalaz keltskog novca iz sela Ribnjačka kod Bjelovara (1. st. pr. Kr.): srebrni keltski novac s prikazom „turnirskog jahača” rađen je po uzoru na novac makedonskog kralja Filipa II. (359. – 336. pr. Kr.). Nalaz je pronađen 1941. godine kada je seljak Andrija Šogorić iz Ribnjačke, kopajući oko kuće, na dubini od 80 cm iskopao grumen zemlje u kojem se nalazilo nekoliko stotina novčića.

Pojmovnik: tehnologija – razvoj i primjena alata, strojeva, materijala i postupaka za izradu nekog proizvoda ili obavljanje neke aktivnosti. Žrvanj – naprava za ručno mljevenje žita; sastoji se od dvaju cilindričnih, valjkastih kamenova, od kojih je donji nepomičan, a gornji se okreće te je drvena postolja; mlinski kamen.

Slika u knjizi: keltska kuća (ilustracija).

PONOVIMO – METALNO DOBA, VUČEDOLSKA KULTURA, KELTI
Metalno doba: nova zanimanja, ratovi, prve države, seobe stanovništva.
Vučedolska kultura: kod Vukovara, 3. tisućljeće pr. Kr., metalurško središte, keramičke posude.
Kelti: središnja i zapadna Europa, lončarsko kolo, žrvanj, druidi.
`,
  pitanja: [
    { p: "Koja su nova zanimanja nastala u metalno doba?", o: "Rudari i kovači (a procvat je doživjela i trgovina)." },
    { p: "Kako su nastale prve države?", o: "Iz redova trgovaca i ratnih vođa izdvojili su se pojedinci koji su postali vladari nad područjima i plemenima." },
    { p: "Kada je postojala vučedolska kultura i po čemu je dobila ime?", o: "U 3. tisućljeću pr. Kr.; po nalazištu Vučedol kod Vukovara." },
    { p: "Zašto se vučedolska kultura širila?", o: "Zbog potrage za bakrom." },
    { p: "Što prikazuje Orion – posuda s kalendarom?", o: "Četiri pojasa ukrasa, svaki predstavlja zviježđe jednog godišnjeg doba; oko 2600. pr. Kr., smatra se prvim europskim kalendarom." },
    { p: "Gdje se čuva Vučedolska golubica i kada je pronađena?", o: "U Arheološkom muzeju u Zagrebu; pronađena 1938. na lokalitetu Gradac u Vučedolu." },
    { p: "Po čemu se prepoznaju vučedolske posude?", o: "Tamnosmeđe ili crne boje s bijelim ukrasima." },
    { p: "Što su Kelti donijeli u Hrvatsku?", o: "Lončarsko kolo, žrvanj, željezno oružje i nakit." },
    { p: "Tko su bili druidi?", o: "Keltski svećenici iz uglednih obitelji." },
    { p: "Što je žrvanj?", o: "Naprava za ručno mljevenje žita od dva valjkasta kamena, donji miruje, a gornji se okreće." }
  ]
}
];

if (typeof module !== "undefined" && module.exports) { module.exports = LEKCIJE; }
