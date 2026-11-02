// =====================================================================
//  IZVOR ZNANJA – INFORMATIKA, 5. RAZRED – bilješke iz udžbenika
//  Bot smije odgovarati SAMO iz ovog sadržaja.
//  Nova lekcija = novi objekt u popisu LEKCIJE_INF5 (id, cjelina, naslov,
//  stranice, tekst, pitanja). Odlomke odvajaj praznim redom.
// =====================================================================
var LEKCIJE_INF5 = [
{
  id: "inf5-sklopovlje",
  cjelina: "1. Osnove računala",
  naslov: "1.1 Osnove računala i sklopovlje",
  stranice: "6–12",
  tekst: `
UVOD – ŠTO RAČUNALO ČINI POSEBNIM
Računalo je prvotno zamišljeno kao automatski stroj za računanje, jer može računati puno brže i točnije nego čovjek. To zna i najobičniji džepni kalkulator ili mobitel. Ali računalo je sposobno izvoditi znatno složenije radnje od računanja na džepnom kalkulatoru i, za razliku od pametnog telefona, može se povezati s mnogim raznim uređajima.

Ishod: istražiti glavne komponente uobičajenih digitalnih sustava.

OSOBNO RAČUNALO
Računala ima raznih vrsta, veličina, oblika i namjene. Nama su prije svega zanimljiva osobna računala namijenjena širem krugu korisnika, koja imate i u svojim informatičkim učionicama. Vrstu računala namijenjenu osobnoj uporabi nazivamo osobno računalo (Personal Computer – PC). Na takvu računalu korisnik može rješavati raznovrsne zadatke, kao što su pisanje i obrada teksta, izvođenje i digitalna obrada slike i zvuka, računalne animacije, složene matematičke operacije, znanstveni proračuni, programiranje, igranje igrica itd.

Slika 1. Osobno računalo s osnovnim dijelovima: 1 – središnja jedinica, 2 – monitor, 3 – tipkovnica, 4 – miš.

Računala u učionicama u osnovi su vrlo slična, iako postoje razlike u izgledu i dimenzijama pojedinih dijelova. Sastoje se od osnovnih, odnosno standardnih dijelova.

RAČUNALNI SUSTAV – SKLOPOVLJE I PROGRAMSKA PODRŠKA
Budući da se sastoji od više različitih dijelova, računalo možemo promatrati kao računalni sustav, i to s dvama glavnim podsustavima:
1. sklopovlje (hardware) – fizički dijelovi koji čine računalo. Tu spadaju električni i elektronički sklopovi ugrađeni u računalo (žice, otpornici, procesor i drugo), kao i veće komponente računala (npr. monitor, tipkovnica, miš).
2. programska podrška (software) – naredbe i upute (instrukcije) različite složenosti trajno ili privremeno ugrađene u računalo. Obično ih jednostavnije nazivamo programi.

Važno: računalo se može nadograditi dodatnim dijelovima, u njega se mogu ugraditi, tj. instalirati programi po želji korisnika i može se povezati s raznim drugim uređajima.

Vježba 1. Pametni telefon i tablet također ubrajamo u računala. Tablica 1. (Mogućnosti računala, tableta i pametnog telefona): ugradnja novih programa – računalo, tablet i pametni telefon; nadogradnja novim, naprednijim dijelovima – računalo; povezivanje s drugim uređajima – (učenici dopunjuju). Zadatak je dopuniti tablicu i istražiti koji uređaj ima najviše mogućnosti.

1. SKLOPOVLJE RAČUNALA – OSNOVNI DIJELOVI
Na slici 1. prikazani su osnovni dijelovi sklopovlja bez kojih računalo ne može pravilno ili u potpunosti raditi: središnja jedinica, monitor, tipkovnica i miš.

Vježba 2. Ako se na središnju jedinicu spoji samo monitor, računalom se ne može upravljati; ako se spoje tipkovnica i miš, ali ne i monitor, također se ne može raditi. Time se dokazuje da su svi osnovni dijelovi potrebni.

OSNOVNI I DODATNI DIJELOVI
Na računalo možemo priključiti ili u njega ugraditi dodatne dijelove sklopovlja kojima se proširuju radne mogućnosti računala. Zahvaljujući toj mogućnosti, računalo se može rabiti za izvođenje zadaća za koje naizgled nije sposobno. Primjer: nabavili ste novo računalo i želite ga povezati sa svojim mobitelom. To obično nije moguće jer osnovna konfiguracija računala nema ugrađene dijelove za tu vrstu povezivanja (tzv. Bluetooth bežična veza). Međutim, priključivanjem Bluetooth adaptera (slika 2.) računalo postaje sposobno komunicirati s mobitelom i primjerice preuzeti s njega fotografije.

Osim tipkovnice, miša i monitora, na računalo se obično još spajaju i pisač, zvučnici, slušalice, mikrofon, mrežna kamera i skener, što ovisi o potrebama korisnika.

Slika 3. Prošireni računalni sustav: 1 – pisač, 2 – slušalice s mikrofonom, 3 – zvučnici, 4 – monitor, 5 – kamera, 6 – tipkovnica, 7 – središnja jedinica, 8 – miš, 9 – skener.

ULAZNI I IZLAZNI UREĐAJI – ŠTO SE DOGAĐA U RAČUNALU
Tijekom rada računala odvijaju se sljedeće aktivnosti:
1. primanje i prijenos podataka i uputa (naredbi) – ULAZ
2. pamćenje podataka i zadanih uputa – POHRANA
3. obrađivanje podataka u skladu s uputama koje za ishod ima rezultat obrade – OBRADA
4. pamćenje rezultata obrade – POHRANA
5. prijenos i objava (prikaz) rezultata obrade – IZLAZ.
Tijek podataka prikazan je na slici 4. (ULAZ → POHRANA ⇄ OBRADA, POHRANA → IZLAZ).

Svako računalo mora imati sljedeće uređaje, odnosno jedinice:
- ulazne uređaje, kojima se u spremnik računala unose podatci i naredbe programa iz okoline
- spremnik (memoriju), u koji se pohranjuju svi podatci i naredbe uneseni izvana, kao i rezultati djelovanja naredbi
- središnju procesorsku jedinicu (procesor), koja izvodi aritmetičke i logičke operacije, prima naredbe iz spremnika i tako upravlja svim dijelovima računala
- izlazne uređaje, kojima se iz spremnika u okolinu prenose rezultati obrade podataka i rada programa.
Računalo je napravljeno tako da može prihvatiti više uređaja koji obavljaju ulaznu odnosno izlaznu ulogu.

ULAZNE JEDINICE
Uređaje kojima u računalo unosimo podatke i/ili naredbe zovemo ulazne jedinice.

Tipkovnica (Keyboard): iako su tipkovnice naoko slične, razlikuju se prema rasporedu i vrsti tipaka. Pojedine zemlje ili govorna područja u pismu se koriste posebnim slovima i znakovima, pa u skladu s time imaju karakterističan raspored tipaka. Tako postoje tipkovnice s npr. engleskim, njemačkim, francuskim, hrvatskim i drugim rasporedom. Osim toga tipkovnice se još razlikuju prema obliku i prema dodatnim tipkama obično namijenjenima multimediji (slika 5. – uobičajena i multimedijska tipkovnica).

Miš (Mouse): na zaslonu monitora miš je predstavljen kao bijela strelica. Pomicanjem miša strelica se kreće po zaslonu, a pritiskom na tipke miša zadaju se i biraju naredbe. Slika 6. – razne vrste miševa: obični, s optičkim kotačićem, s kuglicom, igraći miš s utezima.

Optički element na donjoj strani miša (sličan onima u kamerama) snima podlogu i prenosi računalu signale o pomicanju miša. Takvi su miševi vrlo precizni, ali ne mogu raditi na sjajnoj podlozi (npr. staklenoj).

Neki miševi nemaju kabel za povezivanje s računalom. To su bežični miševi (cordless mouse), koji računalu prenose podatke infracrvenim signalima ili radiosignalima. Za uspostavu komunikacije u računalo mora biti utaknut bežični prijamnik (slika 7.).

IZLAZNE JEDINICE
Osim ulaznih jedinica na računalo se priključuju i uređaji kojima računalo predaje podatke okolini, a zovemo ih izlazne jedinice. Ti uređaji električne signale iz računala pretvaraju u podatke razumljive čovjeku (npr. slova, brojke, slike, zvukove) ili nekom drugom uređaju. Glavni je izlazni uređaj osobnog računala monitor.

Monitor: omogućava da doznamo što se u računalu događa. Predstavlja standardnu vanjsku izlaznu jedinicu svakog računala. S računalom je povezan uz pomoć grafičke kartice, koja digitalne podatke iz računala pretvara u čovjeku vidljiv i razumljiv oblik: sliku i tekst. Grafička kartica nalazi se u središnjoj jedinici sustava.

Prvotni monitori imali su CRT zaslon i bili su veliki i teški. Danas rabimo tanke i lagane monitore s LCD, odnosno LED zaslonom (slika 8.).

Osim vrste zaslona glavna je značajka monitora veličina, odnosno duljina dijagonale zaslona. Mjeri se u inčima (inch), a označava se znakom " (inč = 2,54 cm). Najčešće su veličine zaslona monitora 19" i više. Širina zaslona današnjih monitora obično je znatno veća od njegove visine.

Važna je značajka monitora i razlučivost zaslona. Mjeri se brojem točaka koje zaslon upotrebljava za iscrtavanje slike. Izražava se kao ukupan broj točaka (piksela) koji zaslon može prikazati vodoravno i okomito (primjerice 1440 x 1080).

Nova vrsta monitora omogućuje da ih rabimo i kao ulazni uređaj. Budući da imaju zaslon osjetljiv na dodir (touchscreen), naredbe zadajemo posebnom olovkom ili prstima neposredno po zaslonu monitora (slika 9.).

Pisač: kao izlazni uređaj omogućava prikaz, odnosno ispis podataka na običan papir, fotopapir ili na prozirnicu (foliju). Dvije su glavne vrste pisača (slika 10.):
- tintni (ink-jet): ispisuju špricanjem tinte u boji, kvaliteta je ispisa osrednja do visoka, mogu ispisivati i fotografije (na fotopapiru); namijenjeni za manje količine ispisa
- laserski: za ispis se koriste obojenim prahom (tonerom) koji zapeku na papir, u radu su tihi, brzi i precizni, pa je ispis vrlo kvalitetan (posebice crno-bijeli); omogućuju veće količine ispisa.
Osnovne su značajke pisača: brzina ispisa (broj stranica u minuti), najveća veličina papira za ispis (A4 ili A3), kvaliteta ispisa i količina spremnika kojom raspolažu.

Zvučna kartica i zvučnici: zvučna kartica zadužena je za obradu zvučnih signala, a zvučnici za njihovo izvođenje (reprodukciju). Osim zvučnika na zvučnu karticu mogu se priključiti i slušalice, mikrofon i dodatni zvučnici (ovisno o izvedbi kartice). Zvučna kartica ugrađuje se u središnju jedinicu. Većina današnjih računala već ima ugrađenu zvučnu karticu (tzv. integrirana zvučna kartica).

ULAZNO-IZLAZNI PRIKLJUČCI
Ulazni i izlazni uređaji spajaju se na središnju jedinicu računala putem ulazno-izlaznih priključaka. Ulazno-izlazni priključci nalaze se na stražnjoj strani središnje jedinice. Dio njih može se nalaziti i na prednjoj te na gornjoj strani kućišta.

Pojmovnik: sklopovlje (hardware) – fizički dijelovi računala. Programska podrška (software) – naredbe i upute ugrađene u računalo; programi. Osobno računalo (PC) – računalo namijenjeno osobnoj uporabi. Piksel – točka kojom zaslon iscrtava sliku. Toner – obojeni prah kojim ispisuje laserski pisač.

PONOVIMO (SOVA ZNA) – OSNOVE RAČUNALA
Računalni sustav sastoji se od dvaju podsustava: sklopovlja i programske podrške. Prednosti računala su mogućnost nadogradnje sklopovlja, proširivost programske podrške te lako povezivanje s drugim uređajima.
Osnovni su dijelovi sklopovlja računala središnja jedinica, monitor, tipkovnica i miš. Bez njih računalo ne može pravilno ili u potpunosti raditi.
Osnovne aktivnosti koje se odvijaju u računalu jesu ulaz, pohrana, obrada i izlaz podataka.
Osnovne su ulazne jedinice tipkovnica i miš, a osnovna je izlazna jedinica monitor.
Ulazne i izlazne jedinice priključuju se putem ulazno-izlaznih priključaka.
Osim vanjskih dijelova računalo ima i unutarnje dijelove smještene u središnjoj jedinici.
Računalo se može žičano i/ili bežično povezati s drugim digitalnim uređajima u računalnu mrežu.
`,
  pitanja: [
    { p: "Za što je računalo prvotno zamišljeno?", o: "Kao automatski stroj za računanje, jer može računati puno brže i točnije nego čovjek." },
    { p: "Što znači kratica PC?", o: "Personal Computer – osobno računalo, računalo namijenjeno osobnoj uporabi." },
    { p: "Od koja se dva podsustava sastoji računalni sustav?", o: "Od sklopovlja (hardware) i programske podrške (software)." },
    { p: "Što je sklopovlje (hardware)?", o: "Fizički dijelovi koji čine računalo – sklopovi u računalu (žice, otpornici, procesor) i veće komponente (monitor, tipkovnica, miš)." },
    { p: "Što je programska podrška (software)?", o: "Naredbe i upute (instrukcije) ugrađene u računalo; jednostavnije ih zovemo programi." },
    { p: "Koji su osnovni dijelovi sklopovlja računala?", o: "Središnja jedinica, monitor, tipkovnica i miš." },
    { p: "Koje su osnovne aktivnosti koje se odvijaju u računalu?", o: "Ulaz, pohrana, obrada i izlaz podataka." },
    { p: "Što radi procesor?", o: "Središnja procesorska jedinica izvodi aritmetičke i logičke operacije, prima naredbe iz spremnika i tako upravlja svim dijelovima računala." },
    { p: "Čemu služi spremnik (memorija)?", o: "U njega se pohranjuju svi podatci i naredbe uneseni izvana te rezultati djelovanja naredbi." },
    { p: "Koje su osnovne ulazne, a koja je osnovna izlazna jedinica?", o: "Ulazne: tipkovnica i miš; izlazna: monitor." },
    { p: "Čemu služi Bluetooth adapter?", o: "Omogućuje računalu bežičnu (Bluetooth) vezu, npr. s mobitelom, da se s njega preuzmu fotografije." },
    { p: "Zašto optički miš ne radi na staklu?", o: "Optički element snima podlogu, a takvi miševi ne mogu raditi na sjajnoj podlozi." },
    { p: "Što treba bežičnom mišu da bi radio?", o: "Bežični prijamnik utaknut u računalo; podatke prenosi infracrvenim signalima ili radiosignalima." },
    { p: "Čemu služi grafička kartica?", o: "Digitalne podatke iz računala pretvara u čovjeku vidljiv oblik – sliku i tekst; nalazi se u središnjoj jedinici." },
    { p: "U čemu se mjeri dijagonala zaslona i koliko iznosi jedan inč?", o: "U inčima (oznaka \"); 1 inč = 2,54 cm." },
    { p: "Što je razlučivost zaslona?", o: "Broj točaka (piksela) koje zaslon može prikazati vodoravno i okomito, npr. 1440 x 1080." },
    { p: "Kada je monitor ujedno i ulazni uređaj?", o: "Kada ima zaslon osjetljiv na dodir (touchscreen)." },
    { p: "Koja je razlika između tintnog i laserskog pisača?", o: "Tintni špricaju tintu, mogu ispisivati fotografije, za manje količine; laserski koriste toner (obojeni prah), tihi su, brzi i precizni, za veće količine." },
    { p: "Koje su osnovne značajke pisača?", o: "Brzina ispisa (stranica u minuti), najveća veličina papira (A4 ili A3), kvaliteta ispisa i količina spremnika." },
    { p: "Čemu služe zvučna kartica i zvučnici?", o: "Zvučna kartica obrađuje zvučne signale, a zvučnici ih izvode (reproduciraju)." },
    { p: "Kako se ulazni i izlazni uređaji spajaju na računalo?", o: "Putem ulazno-izlaznih priključaka, najviše na stražnjoj strani središnje jedinice (neki i sprijeda ili na vrhu kućišta)." }
  ]
},
{
  id: "inf5-mreza",
  cjelina: "1. Osnove računala",
  naslov: "1.2 Povezivanje u mrežu",
  stranice: "12–13",
  tekst: `
POVEZIVANJE U MREŽU
Prednost je računala što se može povezati s drugim digitalnim uređajima i tako s njima razmjenjivati podatke. Računalo se može povezati s mobitelom ili tabletom Bluetooth bežičnom vezom pomoću adaptera. No, ako želimo međusobno povezati više različitih digitalnih uređaja, npr. osobna računala, prijenosnike i tablete, potrebno je izgraditi računalnu mrežu.

Ishod: istražiti povezivanje digitalnih uređaja preko mreže i razmjenu podataka.

LOKALNA MREŽA (LAN)
Primjer jednostavne računalne mreže prikazan je na slici 12. Većina informatičkih učionica u školama ima takvu mrežu, a vjerojatno je imate i kod kuće, samo s manjim brojem uređaja. Takva mreža koja povezuje digitalne uređaje na međusobno maloj udaljenosti naziva se lokalna mreža (Local Area Network – LAN).

Na slici 12. (primjer lokalne računalne mreže) prikazani su računala, tableti, prijenosnik, pisač, preklopnik, usmjernik i veza s internetom.

DVA NAČINA POVEZIVANJA U MREŽU
1. žičano: za razmjenu podataka potreban je mrežni kabel i mrežna kartica ugrađena u digitalni uređaj. Osobna računala i prijenosnici imaju u sebi već integriranu mrežnu karticu, ali tableti i mobiteli zbog tankog kućišta nemaju.
2. bežično: u ovom slučaju potrebna je samo bežična mrežna kartica koja podatke u obliku radiovalova prima i šalje zrakom. Prijenosnici, tableti i mobiteli imaju već ugrađenu takvu karticu, dok se u većinu osobnih računala mora naknadno ugraditi.

PREKLOPNIK I USMJERNIK
Na slici 12. žičane veze prikazane su crvenim linijama. Sve vode do uređaja koji se naziva preklopnik (switch). Bežične veze označene su simbolom za bežičnu mrežu, a signale razmjenjuju s usmjernikom (router). Budući da su usmjernik i preklopnik međusobno povezani, ostvarena je međusobna veza svih uređaja u mreži.

INTERNET
Usmjernik ima vezu s internetom, što znači da su sva računala, prijenosnik i tableti povezani s internetom. Internet je također vrsta računalne mreže, samo daleko veća od lokalne. Mreža internet povezuje sve lokalne i druge mreže u jednu veliku mrežu koja se prostire preko cijelog našeg planeta. To omogućuje da korisnici diljem svijeta razmjenjuju podatke neovisno o njihovoj međusobnoj udaljenosti.

Vježba 5. Usporedite računalnu mrežu u informatičkoj učionici ili svoju mrežu kod kuće sa shemom na slici 12.: u čemu su sličnosti, a u čemu razlike i koji su mrežni uređaji zastupljeni u objema mrežama?

Pojmovnik: LAN (Local Area Network) – lokalna mreža. Preklopnik (switch) – uređaj do kojeg vode žičane veze u mreži. Usmjernik (router) – uređaj s kojim bežični uređaji razmjenjuju signale i koji ima vezu s internetom. Mrežna kartica – dio uređaja potreban za spajanje u mrežu.

PONOVIMO – POVEZIVANJE U MREŽU
Računalo se može žičano i/ili bežično povezati s drugim digitalnim uređajima u računalnu mrežu. Lokalna mreža (LAN) povezuje uređaje na maloj udaljenosti. Žičano: mrežni kabel + mrežna kartica. Bežično: bežična mrežna kartica (radiovalovi). Preklopnik (switch) i usmjernik (router). Internet – mreža koja povezuje sve mreže na planetu.
`,
  pitanja: [
    { p: "Što je lokalna mreža (LAN)?", o: "Mreža koja povezuje digitalne uređaje na međusobno maloj udaljenosti (npr. u učionici ili kod kuće); Local Area Network." },
    { p: "Koja su dva osnovna načina povezivanja računala u mrežu?", o: "Žičano (mrežni kabel i mrežna kartica) i bežično (bežična mrežna kartica, radiovalovi)." },
    { p: "Zašto tableti i mobiteli nemaju žičanu mrežnu karticu?", o: "Zbog tankog kućišta." },
    { p: "Kako bežična mrežna kartica šalje podatke?", o: "U obliku radiovalova, zrakom." },
    { p: "Kako se zove uređaj do kojeg vode žičane veze u mreži?", o: "Preklopnik (switch)." },
    { p: "S kojim uređajem bežični uređaji razmjenjuju signale?", o: "S usmjernikom (router), koji ima i vezu s internetom." },
    { p: "Što je internet?", o: "Vrsta računalne mreže, daleko veća od lokalne – povezuje sve mreže u jednu veliku mrežu preko cijelog planeta." }
  ]
},
{
  id: "inf5-ee-otpad",
  cjelina: "1. Osnove računala",
  naslov: "1.3 Elektronički otpad",
  stranice: "14–15",
  tekst: `
UVOD
Prepoznajete li građevinu u Puli (Arenu)? Mobilni telefoni odbačeni u svijetu „daleke” 2012. godine bili bi dovoljni da je popune do vrha!

Ishod: procijeniti važnost zbrinjavanja elektroničkog otpada i objasniti postupke njegova zbrinjavanja, opisati utjecaj čovjeka na prirodu i okoliš.

ŠTO JE EE OTPAD
Sklopovlje računalnog sustava sastoji se od mnogo dijelova. Kada se neki od njih pokvari i ne može se popraviti, postavlja se pitanje kamo idu ti dijelovi, gdje se odlažu, jesu li štetni za nas i našu prirodu i tko treba brinuti o tom otpadu.

Elektronički i električni otpad posebna je vrsta otpada (skraćeno EE otpad) koja obuhvaća elektroničke uređaje i električne aparate kao i njihove dijelove koji se više ne upotrebljavaju. Slika 13. prikazuje neke uređaje koji završe u EE otpadu (tipkovnica, miš, monitor, mikser, projektor, fotoaparat, daljinski upravljač, mobitel, pisač, prijenosnik).

KAKO ODLAGATI ELEKTRONIČKI OTPAD?
Slično baterijama, elektronički otpad nikad se ne smije bacati u kante za smeće jer se time onečišćava okoliš. Sav elektronički otpad može se ponovno iskoristiti ako se odloži na prihvatljiv način. Građani mogu svoj EE otpad besplatno odložiti u reciklažno dvorište ili kod ovlaštenog sakupljača EE otpada koji jamči njegovo zbrinjavanje na način koji ne ugrožava zdravlje i okoliš. Popis tvrtki za zbrinjavanje elektroničkog otpada može se naći na stranicama Fonda za zaštitu okoliša i energetsku učinkovitost.

Svi elektronički uređaji u sebi imaju opasne materijale koji dugoročno mogu naštetiti ljudskom zdravlju. Zbog toga se elektronički otpad ne smije ostavljati u prirodi ni bacati u kućno smeće. Osim opasnih materijala elektronički uređaji sadržavaju i vrijedne materijale poput zlata i srebra, što je također važno jer se svi ti materijali mogu ponovno iskoristiti.

Postupak izdvajanja upotrebljivih materijala iz EE otpada i njegovo ponovno korištenje u iste ili slične svrhe naziva se reciklaža ili recikliranje.

GDJE ZAVRŠAVA ELEKTRONIČKI OTPAD?
Tvoj stari mobitel ili računalo ne nestaje nakon što ga odbaciš. Velika većina elektroničkog otpada još dugo ostaje u uporabi. Jedan dio šalje se u siromašnije zemlje, gdje se svi uređaji koji rade preprodaju. To znači da se možda negdje u svijetu netko upravo sada koristi tvojim starim mobitelom.

Zadnje mjesto na kojem završava većina elektroničkog otpada jesu nerazvijene zemlje gdje desetci tisuća ljudi žive od prikupljanja i sortiranja elektroničkog otpada. Zbog loših uvjeta rada zdravlje tih ljudi ozbiljno je ugroženo. (Slika 15. – reciklažno dvorište i „odlagalište” elektroničkog otpada u Nigeriji; slika 16. – u kineskoj provinciji Guiyu i djeca rade na ilegalnim odlagalištima elektroničkog otpada.)

KAKO POMOĆI U ZBRINJAVANJU ELEKTRONIČKOG OTPADA?
1) Nemojte bacati elektronički otpad u prirodu ili smeće.
2) Prije kupnje novog elektroničkog uređaja dobro razmislite treba li vam zaista. Europljani prosječno mijenjaju mobitel svakih 15 mjeseci, a u 70 % slučajeva taj mobitel još uvijek radi.
3) Prikupite elektronički i električni otpad i potaknite i druge da ga odlože na siguran način.

AKTIVNOSTI
U Hrvatskoj godišnje nastaje otprilike sedam kilograma elektroničkog otpada po stanovniku. Ako se u školi prikupi više od 30 kg elektroničkog otpada, tvrtka za zbrinjavanje mora doći i prikupiti taj otpad. Učenici mogu napraviti i plakat o zbrinjavanju elektroničkog otpada (npr. na www.canva.com/create/posters).

Pojmovnik: EE otpad – elektronički i električni otpad. Reciklaža (recikliranje) – izdvajanje upotrebljivih materijala iz otpada i njihovo ponovno korištenje. Reciklažno dvorište – mjesto gdje građani besplatno odlažu otpad, npr. EE otpad.

PONOVIMO – ELEKTRONIČKI OTPAD
EE otpad = elektronički i električni otpad. Ne smije se bacati u smeće ni u prirodu – sadrži opasne materijale, ali i vrijedne (zlato, srebro). Odlaže se besplatno u reciklažno dvorište ili kod ovlaštenog sakupljača. Recikliranje = ponovno korištenje materijala. Razmisli prije kupnje novog uređaja.
`,
  pitanja: [
    { p: "Što je EE otpad?", o: "Elektronički i električni otpad – elektronički uređaji, električni aparati i njihovi dijelovi koji se više ne upotrebljavaju." },
    { p: "Smije li se elektronički otpad bacati u kantu za smeće?", o: "Ne – time se onečišćava okoliš; uređaji sadrže opasne materijale štetne za zdravlje." },
    { p: "Gdje se odlaže EE otpad?", o: "Besplatno u reciklažno dvorište ili kod ovlaštenog sakupljača EE otpada." },
    { p: "Koje vrijedne materijale sadrže elektronički uređaji?", o: "Npr. zlato i srebro." },
    { p: "Što je reciklaža?", o: "Izdvajanje upotrebljivih materijala iz otpada i njihovo ponovno korištenje u iste ili slične svrhe." },
    { p: "Gdje na kraju završava većina elektroničkog otpada?", o: "U nerazvijenim zemljama, gdje ga ljudi (i djeca) skupljaju i razvrstavaju u lošim uvjetima koji im ugrožavaju zdravlje." },
    { p: "Koliko često Europljani prosječno mijenjaju mobitel?", o: "Svakih 15 mjeseci, a u 70 % slučajeva stari mobitel još radi." },
    { p: "Koliko EE otpada godišnje nastaje u Hrvatskoj po stanovniku?", o: "Otprilike sedam kilograma." },
    { p: "Kako možeš pomoći u zbrinjavanju EE otpada?", o: "Ne bacati ga u prirodu ili smeće, dobro razmisliti prije kupnje novog uređaja te prikupljati otpad i poticati druge da ga sigurno odlože." }
  ]
},
{
  id: "inf5-programska-podrska",
  cjelina: "2. Osnove rada s računalom",
  naslov: "2.1 Programska podrška i operacijski sustav",
  stranice: "16–17",
  tekst: `
UVOD
Kada u tvornici sastave računalo, ne možete ga još pametno iskoristiti. U takvu stanju računalo je samo hrpa sklopovlja. Da bi računalo moglo razumjeti i izvršavati vaše želje, u njega tek treba ugraditi dodatnu „pamet”. Ta dodatna uputstva i naredbe o tome što i kako će računalo raditi unose se u obliku programa, tj. programske podrške računala.

PROGRAMSKA PODRŠKA
Za pravilan i učinkovit rad računala potrebna je, osim sklopovlja, i programska podrška (software). Dijeli se na dvije osnovne vrste:
1. programska podrška sustava
2. primjenska programska podrška.

PRIMJENSKI PROGRAMI (APLIKACIJE)
Program za rješavanje nekog određenog problema (zadatka) naziva se primjenski program ili aplikacija. Primjenski se programi upotrebljavaju za, primjerice, pisanje i uređivanje teksta, izradu prezentacija, prikazivanje videozapisa, pregledavanje interneta, igranje igrica itd. (Slika 1. – Bojanje, primjenski program za crtanje.)

PROGRAMI SUSTAVA
Za rad računalnog sustava kao cjeline izuzetno su važni programi sustava koji omogućuju:
- smisleno, pouzdano i cjelovito djelovanje računala
- komunikaciju svih komponenti računala kao i komunikaciju s drugim računalima
- komunikaciju korisnika i računala
- izvođenje primjenskih programa.

U tu skupinu programa spadaju:
- operacijski sustav (Operating System) – skupina programa koji upravljaju cjelokupnim djelovanjem računala u skladu s potrebama korisnika i mogućnostima sklopovlja
- upravljački programi (Drivers) – omogućuju razmjenu podataka između računala i pojedine komponente ugrađene u računalo ili s njime povezane (npr. upravljački program za zvučnu karticu)
- razni pomoćni (Tools) i uslužni (Utility) programi, npr. program za zaštitu od virusa (Antivirus), program za stvaranje sigurnosnih kopija podataka (Backup) i slično.

OPERACIJSKI SUSTAV
Operacijski sustav skup je osnovnih programa zadužen za komunikaciju korisnika i računala. Prihvaća naredbe korisnika i prosljeđuje ih računalu na izvršavanje. Osim toga, povezuje i objedinjuje sve sklopovske dijelove računala i omogućuje njihovu djelotvornu uporabu.

Važno: svako osobno računalo mora raditi pod nekim operacijskim sustavom jer je bez njega neupotrebljivo.

Za različite vrste računalnih sustava potrebno je izraditi zaseban (specifičan) operacijski sustav. Primjerice, za računala koja proizvodi tvrtka Apple namijenjen je operacijski sustav macOS i on se ne može instalirati na računala drugih proizvođača. IBM kompatibilna računala koja imate u učionici obično rade pod operacijskim sustavom Windows. (Slika 3. – najčešći operacijski sustavi za osobna računala: Windows i macOS.)

Dva su standarda po kojima se proizvode osobna računala: IBM i Apple. Razlikuju se i po sklopovlju i po načinu rada, tj. programima koji se na njima izvode. Zato kažemo da takva računala nisu međusobno kompatibilna, tj. nisu uskladiva. Računala u školi izrađena su po standardu IBM.

Kad kupujete novi mobitel, u njemu je već instaliran operacijski sustav. Kod osobnog računala to ne mora biti tako, pa morate sami instalirati operacijski sustav.

Pojmovnik: aplikacija – primjenski program za rješavanje određenog zadatka. Operacijski sustav (OS) – skupina programa koji upravljaju radom računala. Upravljački program (driver) – omogućuje računalu razmjenu podataka s nekom komponentom. Kompatibilan – uskladiv.

PONOVIMO – PROGRAMSKA PODRŠKA
Programska podrška: programi sustava (operacijski sustav, upravljački programi, pomoćni i uslužni programi) i primjenski programi (aplikacije). Operacijski sustav posreduje između korisnika i računala; bez njega je računalo neupotrebljivo. Windows (IBM kompatibilna računala) i macOS (Apple).
`,
  pitanja: [
    { p: "Na koje se dvije vrste dijeli programska podrška?", o: "Na programsku podršku sustava i primjensku programsku podršku." },
    { p: "Što je primjenski program (aplikacija)? Navedi primjer.", o: "Program za rješavanje određenog zadatka, npr. za pisanje teksta, prezentacije, gledanje videa, internet, igrice ili crtanje (Bojanje)." },
    { p: "Koji programi spadaju u programe sustava?", o: "Operacijski sustav, upravljački programi (drivers) te pomoćni i uslužni programi (npr. antivirus, backup)." },
    { p: "Čemu služe upravljački programi (drivers)?", o: "Omogućuju razmjenu podataka između računala i neke komponente, npr. zvučne kartice." },
    { p: "Navedi primjere pomoćnih i uslužnih programa.", o: "Program za zaštitu od virusa (Antivirus) i program za sigurnosne kopije (Backup)." },
    { p: "Što je operacijski sustav?", o: "Skup osnovnih programa zadužen za komunikaciju korisnika i računala; prihvaća naredbe i prosljeđuje ih računalu te povezuje sve dijelove sklopovlja." },
    { p: "Može li osobno računalo raditi bez operacijskog sustava?", o: "Ne – bez njega je neupotrebljivo." },
    { p: "Koji su najčešći operacijski sustavi za osobna računala?", o: "Windows (IBM kompatibilna računala) i macOS (Apple)." },
    { p: "Po kojim se dvama standardima proizvode osobna računala?", o: "IBM i Apple; nisu međusobno kompatibilni (uskladivi)." }
  ]
},
{
  id: "inf5-upravljanje-racunalom",
  cjelina: "2. Osnove rada s računalom",
  naslov: "2.2 Upravljanje računalom – prijava, sučelje i prozori",
  stranice: "18–24",
  tekst: `
UPRAVLJANJE RAČUNALOM
Da biste znali upravljati računalom, morate naučiti upotrebljavati operacijski sustav. U ovom poglavlju učite upotrebljavati operacijski sustav Microsoft Windows inačica 10.

Ishod: prilagoditi korisničko sučelje operacijskoga sustava i istražiti njegove dodatne mogućnosti.

Da biste mogli upravljati računalom i upotrebljavati njegove programe, najprije se morate predstaviti, odnosno prijaviti operacijskom sustavu.

1.1. PRIJAVA U SUSTAV
Čim je spreman za rad, Windows prikaže tzv. zaključani zaslon (slika 5.), koji nalikuje zaslonu koji dobijemo nakon uključivanja mobilnog uređaja. Da biste nastavili s radom, morate kliknuti na njega mišem.

Windows mora znati koji će korisnik raditi za računalom. Korisnike raspoznaje po korisničkom imenu (Username), kojem može biti pridodana zaštitna lozinka, tj. zaštitna šifra (Password). Korisničko ime i lozinka zajedno čine korisnički račun (User Account).

Važno: korisnički račun mora sadržavati jedinstveno korisničko ime, a lozinka nije obvezna.

Dvije su vrste korisničkog računa:
1. lokalni račun – vrijedi samo na određenom računalu
2. Microsoftov račun – omogućava automatsko dohvaćanje mrežnih sadržaja (npr. sa spremnika u oblaku OneDrive), preuzimanje aplikacija iz Microsoftove trgovine kao i sinkronizaciju postavki.

Ako se računalom služi više korisnika, poželjno je da svaki od njih ima svoj korisnički račun. Pomoću njega se pamte postavke svakog pojedinog korisnika, a njegovi podatci zaštićuju se (skrivaju) od drugih korisnika.

Tijekom podizanja operacijski sustav ispita koji su korisnički računi već stvoreni, prikaže ih na zaslonu za prijavu i čeka da odaberete jednog od njih (slika 6. – zaslon prijave s pet korisničkih računa).

Postupak odabira korisnika i upis njegove lozinke (ako je ima) naziva se prijava u operacijski sustav. Na slici 6. prikazana je prijava korisnika „učenik1” čiji je korisnički račun zaštićen lozinkom. Budući da je lozinka tajna, tijekom njezina upisivanja prikazuju se crne točkice kako drugi korisnici ne bi mogli vidjeti što zapravo piše.

RADNA POVRŠINA
Nakon što se uspješno prijavite, operacijski sustav uvede vas u korisničko sučelje pod nazivom radna površina (slika 7.). Tu se nalaze grafički (slikovni) elementi kojima komunicirate s operacijskim sustavom, zadajete mu naredbe i pokrećete ostale programe. Grafičke elemente aktivirate klikom mišem. Ako imate zaslon osjetljiv na dodir, Windows će vam omogućiti da njima upravljate prstom.

1.2. ELEMENTI KORISNIČKOG SUČELJA
Na slici 8. označeni su glavni elementi Windowsova grafičkog sučelja:
1. Radna površina (Desktop): područje stalno vidljivo na zaslonu koje oponaša površinu radnog stola. Tu se nalazi sve što vam treba za rad i komunikaciju s računalom. Osim širine i visine ima i dubinu, pa grafičke objekte možete postavljati jedan na drugi.
2. Pokazivač miša (Mouse Pointer): grafička prezentacija stvarnog miša. Kako pomičete miš, tako se pomiče i pokazivač miša. Služi za ukazivanje na pojedini grafički element ili njegovo aktiviranje.
3. Ikone (Icons): sličice koje predstavljaju dijelove programske podrške (programe) ili dijelove sklopovlja računala.
4. Prozori (Windows): omeđene površine u kojima se izvode određeni programi ili odvijaju pojedine programske zadaće.
5. Programska traka (Taskbar): prikazuje ikone pokrenutih programa i omogućava pristup do ostalih programa u računalu. Na njoj se nalazi početni izbornik (Start).

IKONE
Sve što postoji u računalnom sustavu ili je s njim povezano može se predstaviti ikonama: programi, dokumenti, mape dokumenata, komponente, uređaji, druga računala u mreži itd.
Ikone služe za:
- predočavanje programa i dijelova sklopovlja
- aktiviranje programa, otvaranje dokumenata ili pregledavanje mapa
- pristupanje dijelovima strojne opreme i ostalim uređajima spojenim na računalo.
Ikonu se aktivira dvostrukim klikom lijeve tipke miša na nju. To obično uzrokuje otvaranje prozora u kojem se odvija daljnja aktivnost.

Dvije su osnovne vrste ikona:
1. ikone sustava – dio su operacijskog sustava i predstavljaju prečace do važnih programa i strojnih dijelova računala. Pripazite da ih slučajno ne obrišete jer biste time uklonili ili onesposobili dijelove operacijskog sustava, što može naškoditi stabilnosti rada računala.
2. korisničke ikone – slikovna su predodžba programa ili dijelova strojne opreme korisnika, odnosno onog što je korisnik naknadno dodao rabeći računalo. Smijete ih brisati, ali određenim postupkom.

PREČACI (Vježba 1. Stvaranje prečaca)
Ikone prečaca korisne su jer ih možete postaviti kamo god hoćete i koliko hoćete. Prečac je zapravo poveznica (link) do stvarnog objekta na koji pokazuje. Jedan način stvaranja prečaca:
1. Kliknite lijevom tipkom miša na ikonu sustava Koš za smeće koja se nalazi na radnoj površini.
2. U skočnom izborniku koji se otvorio pronađite naredbu Stvori prečac i kliknite na nju.
3. Na radnoj površini pojavila se ikona prečaca mape Koš za smeće.
4. Ponovite postupak nekoliko puta.
Nove ikone prečaca u nazivu imaju broj u zagradama – to je znak da se radi o udvostručenoj ikoni.

PROZORI
Kao i ikone, prozori su temeljni objekti Windowsova grafičkog sučelja. Većina zadaća koje pokrećete u ovom operacijskom sustavu odvija se u nekom prozoru. Prozori su tijesno povezani s ikonama. Dvostrukim klikom miša na ikonu programa program se učita u radni spremnik i pokrene. Pokrenuti program najčešće se izvodi u zasebnom prozoru karakterističnom za taj program. Primjerice, nakon dvostrukog klika na ikonu programa Bojanje otvorit će se prozor u kojem će se taj program izvoditi (slika 10.). Iako prozori programa imaju zajedničke osnovne značajke, međusobno se razlikuju i prepoznaju prema karakterističnim vizualnim obilježjima.

Zatvaranjem prozora (klikom na gumb X) prekida se rad programa – briše se iz radnog spremnika i time se obustavlja njegovo izvršavanje. Zato kažemo da se program „zatvorio”, iako je to zapravo pogrešno – zatvorio se prozor. Uočite razliku od „zatvaranja” prozora na mobilnim uređajima, gdje prozor nestane sa zaslona, ali program ne prestane s radom.

PROGRAMSKA TRAKA
Programska traka sastoji se od nekoliko dijelova (slika 11.):
- Gumb Start (1) pokreće početni, tj. glavni izbornik operacijskog sustava.
- Alat Traži (2) služi za pretraživanje programa, datoteka i postavki sustava.
- Gumb Prikaz zadataka (3) prikaže na vremenskoj crti (timeline) programe i aktivnosti koje smo izvodili u proteklih nekoliko dana.
- Traka za brzi pristup (4) mjesto je gdje se ikone programa mogu prikvačiti (pin) na programsku traku tako da su stalno dostupne.
- Središnje područje (5) namijenjeno je ikonama trenutačno otvorenih prozora. Ako pokazivač miša postavimo iznad gumba prozora (i ne kliknemo), prikazat će se minijaturni prikaz (thumbnail) tog prozora (slika 12.).
- Područje obavijesti (Notification Area) (6) daje važne informacije o stanju i postavkama sustava. Prikazuje npr. stanje mrežne povezanosti, izbornik skrivenih ikona programa, sat s kalendarom. Ikona (7) obavještava korisnika o pristiglim porukama sustava.

POČETNI IZBORNIK (START)
Početni je izbornik polazno mjesto za:
- pokretanje programa instaliranih na računalo
- pristup podatcima na računalu
- namještanje postavki operacijskog sustava i računala općenito
- odjavu iz operacijskog sustava i isključivanje računala.
Izbornik Start otvara se klikom miša na gumb Start ili tipkom s Windows znakom na tipkovnici.
Sastoji se od triju dijelova (slika 13.):
- Skraćeni izbornik (1) slijeva ima alat za promjenu korisničkog računa, prečace do nekoliko glavnih mapa korisničkog računa, alat za postavke Windowsa i izbornik za isključivanje računala.
- U sredini je abecedni popis (2) svih instaliranih programa. Jedino taj dio izbornika korisnik ne može mijenjati.
- Popis s pločicama (3) desno prilagodljivi je izbornik koji možemo organizirati po želji. Neke su od pločica „žive”, tj. animirane, pa prikazuju trenutna stanja ili sadržaje (npr. trenutačnu temperaturu grada u kojem živimo).

POKRETANJE PROGRAMA
Programi se pokreću ili u početnom izborniku ili ikonama na radnoj površini. Stavke u početnom izborniku možemo smatrati ikonama programa. Razlika: na ikone programa na radnoj površini moramo dvostruko kliknuti mišem, a na ikone u početnom izborniku dovoljno je kliknuti samo jednom. Na ikone programa u programskoj traci također je dovoljno kliknuti samo jednom.

Osim tih dvaju načina postoji i posredni način pokretanja programa, a to je dvostrukim klikom na ikonu dokumenta. Na slici 14. ikona dokumenta ima naziv Lektira.txt. Ako dvostruko kliknete mišem na nju, otvorit će se program Blok za pisanje i u njemu spomenuta datoteka. Dakle, program se otvorio, a da ga niste neposredno pokrenuli. Posredno pokretanje programa moguće je zato što Windows pamti koji je program predviđen za rad s određenom vrstom dokumenata. Za tekstne dokumente zadužen je program Blok za pisanje.

Vrste dokumenata prepoznaju se po datotečnom nastavku u nazivu datoteke (npr. .txt). Ako obrišete taj nastavak (iza točke), Windows više neće znati kojim programom otvoriti dokument.

RAD S PROZORIMA
Za razliku od ikona većina prozora ima promjenjivu veličinu. Dimenzije prozora možete po potrebi mijenjati po širini i po visini (i istodobno): postavite pokazivač miša na rub prozora i s pritisnutom lijevom tipkom miša odvlačite ga u željenom smjeru do potrebne veličine, pa otpustite lijevu tipku miša. Ta se tehnika naziva povuci i spusti (drag and drop) i često ćete je upotrebljavati tijekom rada s grafičkim objektima Windowsa.

Veličina prozora može se prilagoditi i gumbima za postavljanje standardne veličine koje ima gotovo svaki prozor u gornjem desnom kutu (slika 15.):
- Gumb Minimiziraj (1) smanjuje (minimizira) prozor tako da se više ne vidi na radnoj površini. Prozor nije zatvoren, nego je smanjen na veličinu gumba u programskoj traci.
- Gumb Maksimiziraj (2) povećava prozor na najveću moguću veličinu tako da prekrije cijelu radnu površinu. Nakon maksimiziranja gumb mijenja oblik u Vrati smanjeno i dobiva novu ulogu – vraća prozor iz maksimalne veličine u prijašnju veličinu.
Da biste premjestili prozor, pokazivač miša postavite na njegovu naslovnu traku i tehnikom povuci i spusti odvlačite ga na novo mjesto.

Posebna su vrsta prozora dijaloški prozori, koji nemaju gumbe za postavljanje standardne veličine prozora i kojima ne možete mijenjati dimenzije.

Vježba 4. Kad je otvoreno više prozora, iz jednog u drugi kreće se kombinacijom tipki Alt + Tab.

1.3. PROGRAMI I PRILAGODBA SUSTAVA
Prilagodba i postavke sustava Windows obrađuju se u dodatnim vježbama (dokument 52postavke.pdf).

Pojmovnik: prečac – poveznica (link) do stvarnog objekta na koji pokazuje. Datotečni nastavak – oznaka iza točke u nazivu datoteke po kojoj se prepoznaje vrsta dokumenta. Povuci i spusti (drag and drop) – tehnika pomicanja objekata mišem s pritisnutom lijevom tipkom. Dijaloški prozor – prozor bez gumba za standardnu veličinu, kojem se ne mogu mijenjati dimenzije.

PONOVIMO – RADNA POVRŠINA I SUČELJE
Prijava: zaključani zaslon → zaslon za prijavu → radna površina. Korisnički račun = korisničko ime (obvezno, jedinstveno) + lozinka (nije obvezna). Elementi sučelja: radna površina, pokazivač miša, ikone, prozori, programska traka (Start, Traži, Prikaz zadataka, brzi pristup, središnje područje, područje obavijesti). Ikone sustava i korisničke ikone. Zatvaranje prozora prekida rad programa. Minimiziraj, Maksimiziraj, Vrati smanjeno. Alt + Tab.
`,
  pitanja: [
    { p: "Što Windows prikaže čim je spreman za rad?", o: "Zaključani zaslon; da biste nastavili, kliknete na njega mišem." },
    { p: "Što čini korisnički račun?", o: "Korisničko ime (Username) i lozinka (Password) zajedno." },
    { p: "Je li lozinka obvezna?", o: "Nije – korisnički račun mora imati jedinstveno korisničko ime, ali lozinka nije obvezna." },
    { p: "Koje su dvije vrste korisničkog računa?", o: "Lokalni račun (vrijedi samo na tom računalu) i Microsoftov račun (OneDrive, Microsoftova trgovina, sinkronizacija postavki)." },
    { p: "Zašto je dobro da svaki korisnik ima svoj račun?", o: "Pamte se njegove postavke, a njegovi podatci zaštićeni su (skriveni) od drugih korisnika." },
    { p: "Što je prijava u operacijski sustav?", o: "Odabir korisnika i upis njegove lozinke (ako je ima)." },
    { p: "Zašto se pri upisu lozinke vide crne točkice?", o: "Jer je lozinka tajna, pa drugi ne smiju vidjeti što pišeš." },
    { p: "Što je radna površina?", o: "Korisničko sučelje nakon prijave, s grafičkim elementima kojima zadajemo naredbe i pokrećemo programe." },
    { p: "Koji su glavni elementi Windowsova grafičkog sučelja?", o: "Radna površina, pokazivač miša, ikone, prozori i programska traka." },
    { p: "Kako se aktivira ikona na radnoj površini?", o: "Dvostrukim klikom lijeve tipke miša." },
    { p: "Koja je razlika između ikona sustava i korisničkih ikona?", o: "Ikone sustava dio su operacijskog sustava i ne smiju se slučajno obrisati; korisničke ikone predstavljaju ono što je korisnik dodao i smiju se brisati (određenim postupkom)." },
    { p: "Što je prečac?", o: "Poveznica (link) do stvarnog objekta na koji pokazuje; može se postaviti bilo gdje." },
    { p: "Što se događa kad zatvoriš prozor programa (gumb X)?", o: "Program se briše iz radnog spremnika i prestaje s radom – zato kažemo da se program zatvorio." },
    { p: "Čemu služi gumb Start?", o: "Pokreće početni (glavni) izbornik operacijskog sustava." },
    { p: "Što prikazuje područje obavijesti?", o: "Važne informacije o stanju sustava, npr. mrežnu povezanost, skrivene ikone, sat s kalendarom i poruke sustava." },
    { p: "Od kojih se triju dijelova sastoji izbornik Start?", o: "Skraćeni izbornik (lijevo), abecedni popis programa (sredina) i popis s pločicama (desno)." },
    { p: "Koji dio izbornika Start korisnik ne može mijenjati?", o: "Abecedni popis instaliranih programa." },
    { p: "Što je posredno pokretanje programa?", o: "Pokretanje programa dvostrukim klikom na ikonu dokumenta, npr. Lektira.txt otvori Blok za pisanje." },
    { p: "Po čemu Windows prepoznaje vrstu dokumenta?", o: "Po datotečnom nastavku u nazivu datoteke (iza točke), npr. .txt." },
    { p: "Što je tehnika povuci i spusti?", o: "Pomicanje objekta mišem dok držiš pritisnutu lijevu tipku i otpuštanje na novom mjestu (drag and drop)." },
    { p: "Što radi gumb Minimiziraj, a što Maksimiziraj?", o: "Minimiziraj smanji prozor na gumb u programskoj traci (nije zatvoren); Maksimiziraj ga poveća preko cijele radne površine." },
    { p: "Kako se prelazi iz jednog otvorenog prozora u drugi?", o: "Kombinacijom tipki Alt + Tab." },
    { p: "Što su dijaloški prozori?", o: "Prozori bez gumba za standardnu veličinu kojima se ne mogu mijenjati dimenzije." }
  ]
},
{
  id: "inf5-organizacija-sadrzaja",
  cjelina: "2. Osnove rada s računalom",
  naslov: "2.3 Organizacija sadržaja u računalu – mape i datoteke",
  stranice: "25–31",
  tekst: `
UVOD
Potrebno je neko vrijeme dok usvojite gdje se što nalazi u glavnom izborniku. Zamislite koliko tek treba vremena za pronalaženje podatka na računalu, gdje postoji na tisuće mapa i datoteka. Srećom, postoje programi koji nam olakšavaju snalaženje u tome.

Ishod: koristiti se mogućnostima sustava za pohranjivanje i organizaciju datoteka.

2.1. OVAJ PC
Ikona programa Ovaj PC jedna je od glavnih ikona sustava. Ako je nemate prikazanu na radnoj površini, to možete promijeniti u postavkama Windowsa (Vježba 8.):
1. Kliknite desnom tipkom miša na radnu površinu i u skočnom izborniku odaberite Prilagodi.
2. U prozoru Prilagodi kliknite lijevo na Teme, pa zatim desno na Postavke ikona radne površine.
3. U dijaloškom okviru označite opciju Računalo i potvrdite klikom na gumb U redu.
4. Ikona Ovaj PC sada je vidljiva na radnoj površini.
Ovaj PC zapravo nije program nego način prikazivanja sadržaja računala.

Dvostrukim klikom na ikonu Ovaj PC pokreće se program Eksplorer za datoteke (File Explorer) koji automatski otvara virtualnu mapu Ovaj PC (slika 22.). Prikaz se sastoji od triju dijelova:
1. navigacijsko okno s elementima za dohvaćanje podataka unutar računalnog sustava i izvan njega
2. glavne sistemske mape koje operacijski sustav rezervira za svakog korisnika (npr. Dokumenti, Preuzimanja, Slike, Glazba, Videozapisi, Radna površina)
3. uređaji pomoćnog, vanjskog spremnika ugrađeni ili priključeni u računalo. Za uređaje s aktivnim medijem prikazuje se koliko je slobodnog prostora preostalo na mediju.

2.2. IMENOVANJE UREĐAJA I POGONA
Nazivi uređaja (pogona) vanjskog spremnika sastoje se od dvaju dijelova. Prvi dio naslova korisnik može proizvoljno mijenjati u skladu sa svojim potrebama. Drugi dio naslova koji se nalazi u zagradama je rezerviran, a njime se služi operacijski sustav za komunikaciju s pojedinim uređajima.
Windows imenuje uređaje vanjskog spremnika na sljedeći način:
- C: – glavni disk na kojem je obično instaliran operacijski sustav (čvrsti disk ili SSD)
- D: do Z: – redom ostali diskovi i ostali uređaji vanjskog spremnika (optički diskovi, USB memorijski štapić, memorijske kartice itd.).
Ako dvostruko kliknete na bilo koji uređaj, prikazat će se njegov sadržaj – mape i datoteke koje se na njemu nalaze. Kad biste dvostruko kliknuli na neku mapu, u prozoru bi se prikazao njezin sadržaj – mape i datoteke unutar nje. I tako redom.

DATOTEKA I MAPA
Datoteka (File) je zapis u kojem se nalaze podatci spremljeni na disku računala pod određenim imenom. Primjeri su datoteka npr. tekstni dokument napravljen programom za obradu teksta (slika 23. – Sadržaj.docx) ili slika napravljena programom za crtanje.

Mapa (Folder) je mjesto na disku gdje se datoteke i druge mape grupiraju po nekoj zajedničkoj osobini. Npr. sve datoteke za četvrti broj školskog lista možemo spremiti u jednu mapu (slika 24a.) da ih ne moramo tražiti po disku i da se ne pomiješaju s datotekama za npr. treći broj. Kao i datoteka, mapa ima svoje ime. Ako je mapa prazna, njezina ikona izgleda kao na slici 24b. (prazna mapa).

Osim datoteka mapa može sadržavati druge mape koje nazivamo podmape (Subfolder).

Želite li znati koliko određena mapa sadržava podmapa i datoteka, ne morate ulaziti u nju: desnom tipkom miša kliknete na mapu i u skočnom izborniku odaberete naredbu Svojstva. Otvorit će se dijaloški prozor u kojem ćete doznati razne detalje i svojstva odabrane mape (slika 25.).

2.3. NAVIGACIJA KROZ SADRŽAJ
Prozor programa Eksplorer za datoteke podijeljen je na dva dijela: lijevo je navigacijsko okno, desno je okvir u kojem se prikazuje sadržaj ako kliknete na stavke iz navigacijskog okna.

Ako dvostruko kliknete na mapu u navigacijskom oknu, ona će se proširiti, tj. prikazat će se sve njezine podmape. Dvostrukim klikom na proširenu mapu ona će se sažeti. Dakle, u navigacijskom oknu možete dobiti pregledan prikaz strukture pojedine mape i njezinih podmapa (slika 26.).

Strelica ispred mape signalizira je li mapa proširena ili je sažeta:
- strelica „>” – sažeta mapa. Klikom na strelicu ili dvostrukim klikom na naziv mapa će se proširiti.
- strelica „v” – proširena mapa. Klikom na strelicu ili dvostrukim klikom na naziv mapa će se sažeti.
Neke mape u navigacijskom oknu nemaju strelicu ispred naziva – to znači da te mape nemaju nijednu podmapu.

2.4. PRIKAZ SADRŽAJA
Na slici 27. prikazana je mapa korisnika Netko. Osim dviju podmapa u mapi je i 20 datoteka. To znamo po broju koji piše u lijevom kutu statusne trake prozora programa Eksplorer za datoteke (Broj stavki: 22, slika 27a.).

U desnom kutu statusne trake nalazi se izbornik dvaju najčešćih načina prikaza sadržaja mape (slika 27b.):
- prikaz Detalji nudi niz informacija o datotekama: naziv, datum zadnje izmjene, vrstu i veličinu datoteke. Klikom na zaglavlje pojedinog stupca datoteke se sortiraju uzlazno/silazno. Nedostatak tog prikaza jest što ne vidimo stvarni sadržaj spremljen u datoteci.
- prikaz Velike ikone: datoteke su prikazane u obliku minijatura (slika 28.) koje nagovješćuju ili prikazuju sadržaj datoteke. Nedostatak tog prikaza jest to što zauzima puno prostora i što osim naziva datoteke ne nudi druge informacije.
Izbornik svih raspoloživih prikaza sadržaja nalazi se na vrpci programa u kartici Prikaz (slika 29.): Vrlo velike ikone, Velike ikone, Srednje ikone, Male ikone, Popis, Detalji, Pločice, Sadržaj.

PRETRAŽIVANJE
Želite li privremeno filtrirati popis po nazivu ili dijelu naziva datoteke, to možete učiniti u okviru Pretraži. Na slici 30. vidljive su samo četiri datoteke nakon što smo zadali da se prikažu samo one datoteke koje u nazivu imaju riječ Aisha. Da biste zatvorili taj privremeni način prikaza sadržaja mape, kliknite na gumb Zatvori pretraživanje.

2.5. POSTUPCI S MAPAMA I DATOTEKAMA
Primjer: postali ste urednik školskog lista i na računalu morate što učinkovitije organizirati datoteke kako bi vaši suradnici, tj. drugi učenici brzo i lako dolazili do potrebnog sadržaja.

Stvaranje mapa i datoteka: najprije ćete stvoriti glavnu mapu za školski list. Treba promisliti kamo je postaviti. Ako je stvorite u jednoj od korisničkih mapa koje Windows rezervira za vaš korisnički račun, to neće biti dobro – kada se drugi korisnici prijave u sustav sa svojim korisničkim računom, neće moći doći do te mape. Zato ćete mapu školskog lista stvoriti na disku C:.

Preimenovanje mapa i datoteka: obavlja se desnim klikom miša na mapu ili datoteku i izborom naredbe Preimenuj u skočnom izborniku. Preimenovanje se može dogoditi i slučajno! Ako dvostrukim klikom odlučite otvoriti neku mapu ili datoteku, može se dogoditi da se umjesto otvaranja aktivira preimenovanje. Uzrok je tomu pogrešna brzina dvostrukog klika, tj. prevelika pauza između dva klika. Kada mišem otvarate mapu, kliknite na ikonu mape, ne na njezin naziv – tako ćete izbjeći slučajno uključivanje preimenovanja. Ako ipak želite preimenovati: najprije kliknete (najbolje na ikonu) da biste označili mapu ili datoteku, pričekate sekundu, pa kliknete na njezin naziv.

Brisanje mapa i datoteka: mape ili datoteke brišu se označivanjem njihova naziva i pritiskom na tipku Delete na tipkovnici. Također, možete pozvati skočni izbornik i odabrati naredbu Izbriši. Windows vas neće pitati jeste li sigurni da želite izbrisati mapu ili datoteku. Zašto? Mapa ili datoteka nakon brisanja neće nestati s diska, nego će je Windows poslati u mapu sustava Koš za smeće. Tamo će se nalaziti neko vrijeme – za slučaj da se predomislite ili da vam kasnije ipak zatreba.
Važno: brisanje podataka samo privremeno uklanja podatke s diska. Brisanje je zapravo premještanje u mapu Koš za smeće.

Mapa Koš za smeće ima ograničen kapacitet. Kada se prepuni, Windows će je sam isprazniti, ali tek toliko da stane novopristiglo „smeće”. Koš za smeće možete i sami isprazniti: kliknite desnom tipkom miša na ikonu Koš za smeće i u skočnom izborniku izaberite naredbu Isprazni koš za smeće.
Važno: pražnjenje Koša za smeće uzrokuje nepovratno brisanje podataka.

Premještanje i kopiranje mapa i datoteka: mape i datoteke vrlo se jednostavno premještaju s mjesta na mjesto postupkom povuci i spusti (slika 34.):
- kliknite na mapu/datoteku lijevom tipkom miša
- ne otpuštajući lijevu tipku, pomičite miš prema odredišnoj, ciljnoj mapi u koju želite premjestiti označeni sadržaj
- kada stignete na odredište, otpustite lijevu tipku miša.
Ako pak želite kopirati mapu ili datoteku, postupak je isti, jedino što za vrijeme prenošenja treba držati pritisnutu tipku Ctrl na tipkovnici. Ako tijekom kopiranja otpustite tipku Ctrl, kopiranje će se automatski pretvoriti u naredbu premještanja. Postupak premještanja i kopiranja uvijek možete prekinuti tipkom Esc na tipkovnici.

Označivanje više ikona: želite li označiti više ikona mapa i/ili datoteka, upotrijebit ćete postupak označivanja lasom. Izgleda kao da u omču lasa „hvatate” ikone. Postavite pokazivač miša uz lijevi donji kut prve ikone, pritisnite lijevu tipku miša i dok je držite pritisnutom, povlačite miš dijagonalno u suprotni kut. Oko označenih ikona iscrta se plavi prozirni pravokutnik (slika 35.). Nakon što otpustite lijevu tipku miša, ikone su označene, tj. odabrane.

Označivanje na preskok: kliknite mišem na prvu ikonu i dok držite pritisnutu tipku Ctrl na tipkovnici, kliknite na ostale koje želite označiti. Na kraju otpustite tipku Ctrl.

Pojmovnik: datoteka (File) – zapis s podatcima spremljen na disku pod određenim imenom. Mapa (Folder) – mjesto na disku gdje se grupiraju datoteke i druge mape. Podmapa (Subfolder) – mapa unutar mape. Eksplorer za datoteke (File Explorer) – program za pregledavanje sadržaja računala. Navigacijsko okno – lijevi dio prozora Eksplorera sa strukturom mapa.

PONOVIMO – ORGANIZACIJA SADRŽAJA
Ovaj PC → Eksplorer za datoteke: navigacijsko okno, sistemske mape, uređaji. C: glavni disk; D: do Z: ostali uređaji. Datoteka i mapa (podmapa). Prikazi: Detalji i Velike ikone. Pretraži. Preimenuj (desni klik), Izbriši (Delete → Koš za smeće; pražnjenje koša je nepovratno). Premještanje: povuci i spusti; kopiranje: uz držanje Ctrl; prekid: Esc. Označivanje lasom i na preskok (Ctrl).
`,
  pitanja: [
    { p: "Koji se program pokreće dvostrukim klikom na ikonu Ovaj PC?", o: "Eksplorer za datoteke (File Explorer), koji otvara virtualnu mapu Ovaj PC." },
    { p: "Od koja se tri dijela sastoji prikaz Ovaj PC?", o: "Navigacijsko okno, glavne sistemske mape korisnika i uređaji vanjskog spremnika." },
    { p: "Kako Windows imenuje diskove?", o: "C: je glavni disk (obično s operacijskim sustavom), a ostali diskovi i uređaji (DVD, USB štapić, memorijske kartice) dobivaju redom slova D: do Z:." },
    { p: "Što je datoteka?", o: "Zapis s podatcima spremljen na disku pod određenim imenom, npr. tekstni dokument ili slika." },
    { p: "Što je mapa, a što podmapa?", o: "Mapa (Folder) je mjesto na disku gdje se grupiraju datoteke i mape; podmapa (Subfolder) je mapa unutar druge mape." },
    { p: "Kako saznati koliko mapa sadržava datoteka bez ulaženja u nju?", o: "Desni klik na mapu → Svojstva." },
    { p: "Što znači strelica ispred mape u navigacijskom oknu?", o: "„>” – mapa je sažeta, „v” – proširena; mapa bez strelice nema podmapa." },
    { p: "Koja je prednost i nedostatak prikaza Detalji?", o: "Prikazuje naziv, datum izmjene, vrstu i veličinu (može sortirati), ali ne vidimo sadržaj datoteke." },
    { p: "Koji je nedostatak prikaza Velike ikone?", o: "Zauzima puno prostora i osim naziva ne nudi druge informacije." },
    { p: "Gdje piše koliko je stavki u mapi?", o: "U lijevom kutu statusne trake prozora Eksplorera za datoteke (Broj stavki)." },
    { p: "Kako preimenovati datoteku?", o: "Desni klik → Preimenuj, ili klik na ikonu, pričekati sekundu i kliknuti na naziv." },
    { p: "Zašto se može dogoditi slučajno preimenovanje?", o: "Zbog prevelike pauze između dva klika pri dvostrukom kliku; zato treba klikati na ikonu, a ne na naziv." },
    { p: "Kamo ide izbrisana datoteka?", o: "U mapu Koš za smeće – brisanje je zapravo premještanje u koš." },
    { p: "Što se događa kad isprazniš Koš za smeće?", o: "Podatci se nepovratno brišu." },
    { p: "Kako se kopira datoteka tehnikom povuci i spusti?", o: "Isto kao premještanje, ali za vrijeme prenošenja treba držati pritisnutu tipku Ctrl." },
    { p: "Kojom se tipkom prekida premještanje ili kopiranje?", o: "Tipkom Esc." },
    { p: "Kako se označi više ikona odjednom?", o: "Lasom (povući miš dijagonalno preko ikona) ili na preskok – klikati ikone dok držiš tipku Ctrl." },
    { p: "Zašto mapu školskog lista stvaramo na disku C:, a ne u korisničkoj mapi?", o: "Jer drugi korisnici sa svojim računom ne bi mogli doći do mape u našoj korisničkoj mapi." }
  ]
},
{
  id: "inf5-pohranjivanje-podataka",
  cjelina: "2. Osnove rada s računalom",
  naslov: "2.4 Pohranjivanje podataka u računalu – bit i bajt",
  stranice: "31–33",
  tekst: `
UVOD
Operacijski sustav Windows postoji u više od sto jezičnih inačica. Kako računalo pamti sve te silne naredbe i to još na sto različitih jezika? Računalu to uopće nije problem – ono ionako razumije samo jedan jezik – jezik brojeva.

Ishod: istražiti kako računalo pohranjuje podatke.

RAČUNALO POZNAJE SAMO 0 I 1
Osobno računalo digitalni je uređaj. To znači da računalo sve podatke, riječi, naredbe, slike, glazbu itd. obrađuje i sprema u obliku brojeva. I to ne bilo kojih, nego brojeva čije su znamenke samo nula (0) i jedinica (1).

Sklopovi u računalu napravljeni su tako da rade na način prekidača, tj. sklopki koje ili propuštaju ili ne propuštaju električnu struju. Nema treće mogućnosti, odnosno stanja. Usporedimo to s običnim prekidačem za svjetlo (slika 36.): struja ne prolazi, žarulja ne svijetli – 0; struja prolazi, žarulja svijetli – 1. Podatak o stanju sklopke možemo predstaviti binarnim zapisom (0 i 1). Ta dva stanja predstavljaju jedan bit podataka. Slično tomu radi i pamti računalo. Da bi moglo rabiti podatke, računalo ih mora pretvoriti (kodirati) u bitove, tj. u nule i jedinice.
Važno: računalo poznaje samo znamenke 0 i 1.

BIT
Za pohranjivanje podataka računalo rabi memorijske sklopove koji imaju (samo) dva stanja – uključeno ili isključeno. Spremnik u računalu možemo zamisliti kao niz malenih sklopki (prekidača) koje mogu biti u dva stanja, pa mogu upamtiti, tj. pohraniti jedan bit podataka. Svi spremnici računala izrađeni su od takvih malih sklopova, samo što ih svaki spremnik ima jako puno. Današnja računala imaju spremnike sastavljene od više bilijuna jednobitnih sklopki.

Jedan bit vrlo je mala količina podataka. Ako bismo htjeli slova predstaviti jednim bitom, to bismo mogli učiniti samo za dva slova (npr. A i B). Rabeći dva bita mogu se dobiti četiri kombinacije nula i jedinica: 00, 01, 10 i 11 – to bi bilo dovoljno samo za četiri slova. Uz pomoć tri bita moguće je napisati osam zapisa: 000, 001, 010, 011, 100, 101, 110 i 111. Međutim, ni to nije dovoljno za slova naše abecede.

BAJT
Za predstavljanje većeg broja različitih podataka neophodan je veći broj bitova. Dogovoreno je da se kao veća jedinica koristi bajt (engl. byte) sastavljen od 8 bitova. Osam bitova daje 256 kombinacija nula i jedinica, pa tako omogućuje 256 različitih zapisa. To je dovoljno za sva velika i mala slova abecede, brojeve, interpunkcijske i aritmetičke znakove te za još neke posebne znakove.
Najveći broj koji možemo prikazati jednim bajtom jest 11111111 (dekadski 255), dok je najmanji broj 00000000 (dekadski 0).
Važno: jedan znak = 1 bajt.

KÔD I ASCII
Kako bi računala međusobno mogla lakše komunicirati i razmjenjivati podatke, svi podatci koji se obrađuju u računalu prevode se u nizove bitova. Svako slovo ili znak s tipkovnice predstavljen je svojom jedinstvenom kombinacijom bitova, takozvanim kodom. Koji znak treba zapisati kojom od kombinacija nula i jedinica, određeno je standardom za kodiranje odnosno kodnim standardom. Jedan od najraširenijih međunarodnih kodova jest kôd ASCII.

Dio ASCII tablice (tablica 1.): A – 65 – 01000001; B – 66 – 01000010; C – 67 – 01000011; D – 68 – 01000100; E – 69 – 01000101; F – 70 – 01000110; G – 71 – 01000111; H – 72 – 01001000; I – 73 – 01001001; J – 74 – 01001010; K – 75 – 01001011; L – 76 – 01001100; M – 77 – 01001101; N – 78 – 01001110; O – 79 – 01001111; P – 80 – 01010000. (Cijela tablica nalazi se na kraju udžbenika.)

MJERNE JEDINICE ZA KOLIČINU MEMORIJE
Svaka datoteka zauzima određeno mjesto u spremniku računala. Datoteke zauzimaju prostor izražen u jedinicama za kapacitet spremnika. Osnovna jedinica za kapacitet spremnika jest bajt. Veće mjere (tablica 2.):
- 1 KB (kilobajt) = 1024 bajta
- 1 MB (megabajt) = 1024 kilobajta
- 1 GB (gigabajt) = 1024 megabajta
- 1 TB (terabajt) = 1024 gigabajta.
Pozor! Veća jedinica ima 1024 manje jedinice.

Koliko je informacija potrebno za pohranu teksta? Primjer s riječju „spremnik” (tablica 3. – zauzetost spremnika i broja stranica tekstom): 1 riječ – 0 stranica A4 – 8 B; 2 riječi – 0 stranica – 17 B; 804 riječi – 1 stranica – 7,06 KB; 15300 riječi – 20 stranica – 134 KB; 168000 riječi – 210 stranica – 1,4 MB.

Vježba 11. Istražite koliko je bitova potrebno da bi se binarnim zapisom predstavila, tj. zapisala sva slova naše abecede.
Vježba 12. Istražite koliko riječi kao što su informatika, računalo i druge stane u datoteku od 100 KB (tekst pišite u programu Blok za pisanje).

Pojmovnik: digitalni uređaj – uređaj koji sve podatke obrađuje i sprema u obliku brojeva. Binarni zapis – zapis samo znamenkama 0 i 1. Bit – najmanja količina podataka; jedno od dvaju stanja (0 ili 1). Bajt (byte) – niz od 8 bitova. Kôd – jedinstvena kombinacija bitova za neki znak. ASCII – jedan od najraširenijih međunarodnih kodova.

PONOVIMO – POHRANJIVANJE PODATAKA
Računalo je digitalni uređaj i poznaje samo 0 i 1. Bit = jedno od dva stanja (0 ili 1). Bajt = 8 bitova = 256 kombinacija; jedan znak = 1 bajt; najveći broj u bajtu 11111111 (255). Kodni standard ASCII (npr. A = 65 = 01000001). 1 KB = 1024 B, 1 MB = 1024 KB, 1 GB = 1024 MB, 1 TB = 1024 GB.
`,
  pitanja: [
    { p: "Zašto kažemo da je računalo digitalni uređaj?", o: "Jer sve podatke (riječi, slike, glazbu…) obrađuje i sprema u obliku brojeva, i to samo znamenkama 0 i 1." },
    { p: "Koje znamenke poznaje računalo?", o: "Samo 0 i 1." },
    { p: "Kako je sklop u računalu sličan prekidaču za svjetlo?", o: "Ima samo dva stanja: struja ne prolazi (0) ili prolazi (1)." },
    { p: "Što je bit?", o: "Najmanja količina podataka – jedno od dvaju stanja, 0 ili 1." },
    { p: "Koliko kombinacija daju dva bita, a koliko tri?", o: "Dva bita – 4 kombinacije (00, 01, 10, 11); tri bita – 8 kombinacija." },
    { p: "Što je bajt?", o: "Niz od 8 bitova; daje 256 različitih kombinacija." },
    { p: "Koliko bajtova zauzima jedan znak?", o: "1 bajt." },
    { p: "Koji je najveći broj koji se može zapisati jednim bajtom?", o: "11111111, što je dekadski 255 (najmanji je 00000000 = 0)." },
    { p: "Što je kôd, a što kodni standard?", o: "Kôd je jedinstvena kombinacija bitova za neki znak; kodni standard određuje koji se znak zapisuje kojom kombinacijom." },
    { p: "Koji je jedan od najraširenijih kodova?", o: "Kôd ASCII." },
    { p: "Koji je ASCII broj i binarni kôd slova A?", o: "65, binarno 01000001." },
    { p: "Koja je osnovna jedinica za kapacitet spremnika?", o: "Bajt." },
    { p: "Koliko bajtova ima 1 KB?", o: "1024 bajta." },
    { p: "Poredaj jedinice od najmanje do najveće.", o: "Bajt, kilobajt (KB), megabajt (MB), gigabajt (GB), terabajt (TB) – svaka veća ima 1024 manje." }
  ]
}
];

if (typeof module !== "undefined" && module.exports) { module.exports = LEKCIJE_INF5; }
