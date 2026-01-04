var INITIAL_QUESTIONS = [];

INITIAL_QUESTIONS.push({
  otazka: "Co poskytují Stock servery:",
  odpovedi: {
    1: "časové řady vývoje akcií",
    2: "zpoplatněná anotovaná multimédia",
    3: "sdílení videí ze sociálních sítí",
    4: "volně stáhnutelná alba obrázků",
  },
  spravne: { 1: 0, 2: 1, 3: 0, 4: 0 },
  explanation:
    "Stock (media) servery typicky prodávají/licencují multimediální obsah a často k němu poskytují metadata/anotace (tagy, popisy) pro vyhledávání a katalogizaci.",
});

INITIAL_QUESTIONS.push({
  otazka: "Dotaz (query) je:",
  odpovedi: {
    1: "Navigace ve struktuře databáze (webu)",
    2: "Explicitní formulace jednorázového záměru vyhledávání",
    3: "SQL příkaz obsahující predikát LIKE",
    4: "Postupná filtrace relevantních dokumentů a proudu dokumentů",
  },
  spravne: { 1: 0, 2: 1, 3: 0, 4: 0 },
  explanation:
    "Query je jednorázová (ad-hoc) explicitní formulace informační potřeby. Navigace nebo dlouhodobé filtrování jsou jiné režimy (browsing/filtering).",
});

INITIAL_QUESTIONS.push({
  otazka:
    "V kontextu vyhledávání v multimediálních databázích termínem Benchmarking označujeme:",
  odpovedi: {
    1: "platformu vyhodnocování kvality vyhledávacího systému vzhledem k nějaké anotované „golden-standard“ kolekci",
    2: "uživatelská anketa zaměřená na hodnocení kvality webového vyhledávače",
    3: "měření P-R křivky na nějakém systému",
    4: "výkonnostní (rychlostní) srovnání dvou vyhledávačů",
  },
  spravne: { 1: 1, 2: 0, 3: 0, 4: 0 },
  explanation:
    "Benchmarking je systematické vyhodnocování (typicky včetně gold/ground-truth kolekce a metodiky), ne jen dílčí metrika nebo čistě rychlostní porovnání.",
});

INITIAL_QUESTIONS.push({
  otazka:
    "Přesnost (precision) a úplnost (recall) vyhledávání se reálně chovají tak, že:",
  odpovedi: {
    1: "přesnost lze spočítat z úplnosti",
    2: "když roste přesnost, roste i úplnost",
    3: "chování přesností a úplnosti nelze odhadovat",
    4: "když roste přesnost, klesá úplnost, a naopak",
  },
  spravne: { 1: 0, 2: 0, 3: 0, 4: 1 },
  explanation:
    "V praxi mezi precision a recall často existuje trade-off: zpřísněním výběru obvykle zvýšíte precision, ale ztratíte část relevantních (klesne recall), a naopak.",
});

INITIAL_QUESTIONS.push({
  otazka:
    "Podobnostní vyhledávání (vyhledávání podle podobnosti; similarity search) je:",
  odpovedi: {
    1: "technika klasifikace objektů do tříd pomocí podobnostní matice",
    2: "vyhledávací model založený na ad-hoc shlukování podobných objektů a jejich následném filtrování",
    3: "geometrická interpretace vyhledávacích problémů ve vektorovém prostoru",
    4: "vyhledávací model založený na univerzu deskriptorů multimediálních objektů a funkcí ohodnocující podobnost libovolných dvou deskriptorů z univerza",
  },
  spravne: { 1: 0, 2: 0, 3: 0, 4: 1 },
  explanation:
    "Similarity search stojí na reprezentaci objektů deskriptory a na (dis)similarity funkci mezi dvěma deskriptory; dotaz pak vrací objekty „nejpodobnější“ dotazu.",
});

INITIAL_QUESTIONS.push({
  otazka: "Funkce podobnosti je:",
  odpovedi: {
    1: "algoritmus, který nalezne pro dotazový deskriptor podobné deskriptory z databáze",
    2: "funkce ohodnocující danou databázi stupněm podobnosti všech uložených deskriptorů",
    3: "libovolná funkce vracející pro dva deskriptory z univerze podobnostní skóre",
    4: "metrická vzdálenost sloužící jako podobnost",
  },
  spravne: { 1: 0, 2: 0, 3: 1, 4: 0 },
  explanation:
    "Similarity function je definice skóre pro dvojici objektů/deskriptorů. Algoritmus vyhledávání je až nadstavba, metrika je jen speciální případ podobnosti/vzdálenosti.",
});

INITIAL_QUESTIONS.push({
  otazka: "Nemetrické vzdálenosti, narozdíl od metrických:",
  odpovedi: {
    1: "dovolují modelovat robustnější podobnosti",
    2: "fungují dobře pouze ve vysokorozměrných prostorech",
    3: "jsou indexovatelnější",
    4: "vyžadují od doménových expertů větší matematické znalosti",
  },
  spravne: { 1: 1, 2: 0, 3: 0, 4: 0 },
  explanation:
    "Nemetriky dovolují porušit axiomy metriky (např. trojúhelníkovou nerovnost) a tím lépe modelovat doménově „smysluplnou“ podobnost, byť hůře indexovatelnou.",
});

INITIAL_QUESTIONS.push({
  otazka:
    "Dynamic time warping distance (DTW) se používá pro měření podobnosti na:",
  odpovedi: {
    1: "vektorech",
    2: "řetězcích",
    3: "časových řadách",
    4: "množinách",
  },
  spravne: { 1: 0, 2: 0, 3: 1, 4: 0 },
  explanation:
    "DTW je určené pro posloupnosti/časové řady, protože umí zarovnat dvě sekvence při lokálním zrychlení/zpomalení (time warp).",
});

INITIAL_QUESTIONS.push({
  otazka:
    "Earth mover&#039;s distance (EMD) je vhodná pro modelování podobnosti na histogramech, když:",
  odpovedi: {
    1: "histogramy reprezentují obraz omezený na barevný prostor RGB",
    2: "nestačí pouhá korelace dimenzí (sloupců), ale řeší se „nejmenší přesun &#039;masy&#039; mezi histogramy“",
    3: "modelujeme biochemickou podobnost vzorků",
    4: "nevíme jaké korelace vyplnit do matice kvadratické formy (QFD)",
  },
  spravne: { 1: 0, 2: 1, 3: 0, 4: 0 },
  explanation:
    "EMD chápe histogram jako „hromadu materiálu“ a měří minimální práci potřebnou k přesunu masy z jednoho histogramu do druhého, což je vhodné, když mezi biny existuje přirozená „blízkost“.",
});

INITIAL_QUESTIONS.push({
  otazka: "SIFT je",
  odpovedi: {
    1: "detektor a deskriptor lokálních vlastností v obrázcích",
    2: "metoda rozpoznávání obrázku založená na Fourierově transformaci (FT)",
    3: "technika segmentace obrazu na homogenní textury",
    4: "algoritmus pro extrakci globálních vlastností z obrázku",
  },
  spravne: { 1: 1, 2: 0, 3: 0, 4: 0 },
  explanation:
    "SIFT detekuje stabilní zájmové body a pro každý bod vytváří lokální deskriptor invariantní vůči škále/rotaci (v určité míře).",
});

INITIAL_QUESTIONS.push({
  otazka:
    "Matice pro výpočet QFD (quadratic form distance) pro histogramy barev obsahuje",
  odpovedi: {
    1: "vzdálenosti průměru všech barev vyskytujících se v obrázcích",
    2: "korelace mezi reprezentanty barev vyskytujícími se v obrázcích",
    3: "vzdálenosti k několika pevně daným centroidům barev",
    4: "korelace mezi všemi barvami vyskytujícími se v obrázcích",
  },
  spravne: { 1: 0, 2: 1, 3: 0, 4: 0 },
  explanation:
    "QFD využívá matici podobností/korelací mezi biny (typicky mezi reprezentanty barev/binů), aby zohlednila jejich vzájemnou příbuznost.",
});

INITIAL_QUESTIONS.push({
  otazka:
    "Termín „query-by-humming“ při vyhledávání např. hudební skladby znamená:",
  odpovedi: {
    1: "že jako dotaz je použito audio zapískané/zazpívané uživatelem",
    2: "totéž co „query-by-example“",
    3: "že dotazem je zkomprimovaný audio soubor",
    4: "že jako dotaz je použit audio soubor nějaké skladby",
  },
  spravne: { 1: 1, 2: 0, 3: 0, 4: 0 },
  explanation:
    "Query-by-humming znamená, že uživatel zadá dotaz „pobrukováním“; systém pak hledá skladby podobné zadané melodické kontuře.",
});

INITIAL_QUESTIONS.push({
  otazka: "M-strom je:",
  odpovedi: {
    1: "inspirován R-stromem, využívá hiearchické hnízdění metrických regionů a není vyvážený",
    2: "inspirován PM-stromem, využívá hiearchické hnízdění metrických regionů a je vyvážený",
    3: "inspirován PM-stromem, využívá hiearchické hnízdění metrických regionů a není vyvážený",
    4: "inspirován R-stromem, využívá hiearchické hnízdění metrických regionů a je vyvážený",
  },
  spravne: { 1: 0, 2: 0, 3: 0, 4: 1 },
  explanation:
    "M-tree je metrický strom inspirovaný R-tree: používá hierarchii metrických regionů (koule/regiony v metrice) a je navržen jako vyvážený index.",
});

INITIAL_QUESTIONS.push({
  otazka: "T-chyba (T-error) vyžaduje:",
  odpovedi: {
    1: "proporce trojic v datové sadě splňujících trojúhelníkovou nerovnost",
    2: "proporce dvojic v datové sadě splňujících trojúhelníkovou nerovnost",
    3: "proporce trojic v datové sadě porušujících trojúhelníkovou nerovnost",
    4: "proporce dvojic v datové sadě porušujících trojúhelníkovou nerovnost",
  },
  spravne: { 1: 0, 2: 0, 3: 1, 4: 0 },
  explanation:
    "T-error kvantifikuje míru porušení trojúhelníkové nerovnosti, což je vlastnost definovaná nad trojicemi objektů.",
});

INITIAL_QUESTIONS.push({
  otazka: "Metrické přístupové metody (metric access methods) jsou:",
  odpovedi: {
    1: "datové struktury a algoritmy umožňující rychlé vyhledávání v metrickém modelu podobnostního vyhledávání",
    2: "stromové indexy odvozené od B-stromu",
    3: "prostorové indexy využívající vektorové podobnosti",
    4: "algoritmy pro podobnostní hashování",
  },
  spravne: { 1: 1, 2: 0, 3: 0, 4: 0 },
  explanation:
    "Metric access methods jsou indexační struktury pro podobnostní vyhledávání v obecné metrice; typicky využívají lower boundy a (pokud platí) trojúhelníkovou nerovnost.",
});

INITIAL_QUESTIONS.push({
  otazka: "Mezi metrické přístupové metody (metric access methods) nepatří:",
  odpovedi: {
    1: "D-index",
    2: "mvp-tree",
    3: "LAESA",
    4: "R-tree",
  },
  spravne: { 1: 0, 2: 0, 3: 0, 4: 1 },
  explanation:
    "R-tree je prostorový index pro (typicky) vektorová data a MBR obálky; není to metrická přístupová metoda ve smyslu similarity search nad obecnou metrikou.",
});

INITIAL_QUESTIONS.push({
  otazka: "Nevýhoda měření výkonu metrického indexu reálným časem je",
  odpovedi: {
    1: "závislost na platformě, optimalizaci, operačním systému a hardware",
    2: "nemá nevýhody",
    3: "nelze použít va paralelním prostředí",
    4: "nemožnost objetivně porovnat s jiným indexem",
  },
  spravne: { 1: 1, 2: 0, 3: 0, 4: 0 },
  explanation:
    "Reálný čas je silně ovlivněn HW/SW stackem (CPU, paměť, OS, kompilátor, cache, I/O), takže snižuje přenositelnost a férové srovnání.",
});

INITIAL_QUESTIONS.push({
  otazka: "AESA je",
  odpovedi: {
    1: "binární strom využívající dělení prostoru (zobecněnými) nadrovinami",
    2: "n-ární strom využívající dělení prostoru (zobecněnými) nadrovinami",
    3: "tabulka vzdáleností mezi všemi objekty databáze a vybranými pivoty",
    4: "tabulka vzdáleností mezi všemi dvojicemi objektů v databázi",
  },
  spravne: { 1: 0, 2: 0, 3: 0, 4: 1 },
  explanation:
    "AESA (Approximating/Advanced ESA) je založena na předpočtu vzdáleností mezi všemi dvojicemi objektů (plná distance matrix), což umožňuje agresivní eliminaci kandidátů.",
});

INITIAL_QUESTIONS.push({
  otazka: "Mezi axiomy metriky (metric postulates) nepatří:",
  odpovedi: {
    1: "symetrie (symmetry)",
    2: "reflexivita (reflexivity)",
    3: "asociativita (associativity)",
    4: "trojúhelníková nerovnost (triengle inequality)",
  },
  spravne: { 1: 0, 2: 0, 3: 1, 4: 0 },
  explanation:
    "Asociativita není axiom metriky. Mezi axiomy patří nezápornost/identita nerozlišitelných, symetrie a trojúhelníková nerovnost.",
});

INITIAL_QUESTIONS.push({
  otazka: "Globální pivoti jsou:",
  odpovedi: {
    1: "tvořeny za účelem vytváření indexu",
    2: "dynamické objekty (příslušné různým částem indexu)",
    3: "statické objekty (platné po celý život indexu)",
    4: "dynamické objekty, ale v přůbehu jednoho dotazu fixovány jako statické",
  },
  spravne: { 1: 0, 2: 0, 3: 1, 4: 0 },
  explanation:
    "Globální pivoti jsou zvoleni jednou (a-priori) a platí pro celý index po dobu jeho životnosti; na rozdíl od lokálních pivotů vázaných na části struktury.",
});

INITIAL_QUESTIONS.push({
  otazka: "Úplnost vyhledávání (retrieval recall) označuje:",
  odpovedi: {
    1: "pravděpodobnost, že objekt ve výsledku dotazu je relevantní",
    2: "pravděpodobnost, že objekt relevantní k dotazu je v jeho výsledku",
    3: "počet iterací při vyhledávání pomocí uživatelské zpětné vazby",
    4: "stupeň 1 na stupnici 1-5 uživatelské spokojenosti s výsledkem dotazu",
  },
  spravne: { 1: 0, 2: 1, 3: 0, 4: 0 },
  explanation:
    "Recall měří, jakou část všech relevantních objektů systém skutečně vrátil ve výsledku dotazu.",
});

INITIAL_QUESTIONS.push({
  otazka:
    "Co je virtuální/implicitní graf v kontextu brouzdání (browsing) v multimédiích?",
  odpovedi: {
    1: "nejkratší cesta v grafu, kde uzly jsou multimédia a hrany podobnosti mezi nimi",
    2: "série dotazů v multimediálním prostoru tvořící cestu virtuálním grafem",
    3: "graf vytížení uzlů sítě hostující multimediální obsah, tvořené peer-to-peer architekturou",
    4: "hiearchie multimediálních kategorií, modelovaná explicitně",
  },
  spravne: { 1: 0, 2: 1, 3: 0, 4: 0 },
  explanation:
    "Implicitní/virtuální graf je konceptuální navigace realizovaná jako sekvence dotazů a přechodů mezi výsledky, nikoli nutně explicitně uložený graf.",
});

INITIAL_QUESTIONS.push({
  otazka: "Booleovský model vyhledávání je založen na:",
  odpovedi: {
    1: "uspořádání dokumentů podle podobnosti k dotazu",
    2: "binárních vektorech a Hammingově vzdálenosti",
    3: "bitových řetězcích a operacích AND, OR a XOR",
    4: "reprezentaci obsahu dokumentů množinou termů a na dotazování booleovskými výrazy a termy",
  },
  spravne: { 1: 0, 2: 0, 3: 0, 4: 1 },
  explanation:
    "Boolean IR reprezentuje dokumenty množinou termů a dotaz je booleovský výraz nad termy (AND/OR/NOT), který určuje splnění/nesplnění.",
});

INITIAL_QUESTIONS.push({
  otazka:
    "Co je explicitní graf v kontextu brouzdání (browsing) v multimédiích?",
  odpovedi: {
    1: "hiearchie multimediálních kategorií, modelovaná explicitně",
    2: "graf tvořený uzly a hranami",
    3: "graf sociálních komunit sdílející podobný multimediální obsah",
    4: "série ad-hoc dotazů. tvořící řetěz",
  },
  spravne: { 1: 1, 2: 0, 3: 0, 4: 0 },
  explanation:
    "Explicitní graf znamená, že navigační struktura (např. hierarchie kategorií) je přímo modelovaná a uložená, na rozdíl od implicitního grafu tvořeného sérií dotazů.",
});

INITIAL_QUESTIONS.push({
  otazka: "Výpočet Earth mover&#039;s distance (EMD) má časovou složitost:",
  odpovedi: {
    1: "O(2^n)",
    2: "O(n)",
    3: "O(n^2)",
    4: "O(n.log(n))",
  },
  spravne: { 1: 1, 2: 0, 3: 0, 4: 0 },
  explanation:
    "EMD se typicky redukuje na (nákladný) optimalizační problém typu transportation/min-cost flow, který je výrazně dražší než běžné Lp metriky; proto se uvádí velmi vysoká (až exponenciální) složitost.",
});

INITIAL_QUESTIONS.push({
  otazka: "Vektorový model vyhledávání je založen na:",
  odpovedi: {
    1: "binárních vektorech a Hammingově vzdálenosti",
    2: "teorii fuzzy množin",
    3: "vektorovém paralelismu jednotek GPU (v grafických kartách)",
    4: "reprezentaci obsahu dokumentů a dotazů vektory, a vektorové míře sloužící jako podobnost",
  },
  spravne: { 1: 0, 2: 0, 3: 0, 4: 1 },
  explanation:
    "Vektorový model reprezentuje dokument i dotaz jako vážené vektory termů a porovnává je pomocí podobnosti (např. kosinové).",
});

INITIAL_QUESTIONS.push({
  otazka: "Vektorový model vyhledávání je založen na:",
  odpovedi: {
    1: "fuzzy logice a teorii fuzzy množin",
    2: "Booleovské logice a teorii kategorií",
    3: "Booleovské algebře a teorii množin",
    4: "geometrizaci vyhledávacího problému",
  },
  spravne: { 1: 0, 2: 0, 3: 0, 4: 1 },
  explanation:
    "Vektorový model je geometrická interpretace: dokumenty a dotazy jsou body/vektory v prostoru a relevance je dána jejich geometrickou blízkostí/podobností.",
});

INITIAL_QUESTIONS.push({
  otazka: "Mezi nevýhody LSI nepatří",
  odpovedi: {
    1: "drahé zpracování matice",
    2: "redukce dimenze",
    3: "těžká vyjádřitelnost konceptů",
    4: "hustá matice",
  },
  spravne: { 1: 0, 2: 1, 3: 0, 4: 0 },
  explanation:
    "Redukce dimenze je naopak klíčová vlastnost/výhoda LSI (komprese do latentních konceptů). Nevýhody jsou spíše výpočetní náročnost a hustota reprezentace.",
});

INITIAL_QUESTIONS.push({
  otazka: "Zrychlení v LSI modelu lze zajistit",
  odpovedi: {
    1: "invertovaným indexem a využitím pouze několika důležitých konceptů",
    2: "invertovaným indexem",
    3: "využitím pouze důležitých konceptů",
    4: "invertovaným idnexem nebo využitím pouze několika důležitých konceptů",
  },
  spravne: { 1: 0, 2: 0, 3: 1, 4: 0 },
  explanation:
    "LSI dotazy v latentním prostoru bývají husté, takže invertovaný index se typicky nehodí; zrychlení se dosahuje omezením na několik nejdůležitějších latentních konceptů (nižší k).",
});

INITIAL_QUESTIONS.push({
  otazka: "Editační vzdálenost (edit distance) slouží k měření podobností:",
  odpovedi: {
    1: "vektorů, kde měří nejmenší tzv. „vektorový edit“",
    2: "řetězů, kde spočítá nejmenší počet operací nutných ke konverzi jednoho řetězce do druhého",
    3: "množin, kde spočítá nejmenší počet množinových operací nutných k transformaci jedné množiny do druhé",
    4: "téhož co DTW (je to pouze jiný název pro DTW)",
  },
  spravne: { 1: 0, 2: 1, 3: 0, 4: 0 },
  explanation:
    "Edit distance (Levenshtein aj.) je definovaná nad řetězci jako minimální počet edit operací (insert/delete/substitute) pro transformaci jednoho řetězce na druhý.",
});

INITIAL_QUESTIONS.push({
  otazka: "Pro vektorový model dotazování neplatí, že:",
  odpovedi: {
    1: "obsahuje logické spojky",
    2: "obsahuje váhy jednotlivých termů dotazu",
    3: "uživatel může zadat váhy všech termů v dotazu shodně",
    4: "výsledek je založen na frakvenci výskytu termů v dokumentu a dotazu",
  },
  spravne: { 1: 1, 2: 0, 3: 0, 4: 0 },
  explanation:
    "Vektorový model nepoužívá logické spojky jako základní mechanismus (to je Boolean model); místo toho pracuje s váženými termy a podobností vektorů.",
});

INITIAL_QUESTIONS.push({
  otazka: "Vážení podle tf-idf schématu:",
  odpovedi: {
    1: "je populární technika konstrukce vah termů ve vektorovém modelu",
    2: "je implementace Booleovského modelu založená na prohledávání komprimovaného indexu",
    3: "je kompresní metoda obrazu, založená na tzv. vážení regionů",
    4: "technika konstrukce vah termů ve vektorovém modelu vhodná pouze pro malé dimenze",
  },
  spravne: { 1: 1, 2: 0, 3: 0, 4: 0 },
  explanation:
    "tf-idf je standardní schéma vážení termů ve vektorovém modelu: zohledňuje četnost v dokumentu (tf) a vzácnost v kolekci (idf).",
});

INITIAL_QUESTIONS.push({
  otazka:
    "Noty u podobnostního skóre monofóní melodie (monophonie melody) jsou modelovány:",
  odpovedi: {
    1: "svojí výškou",
    2: "v 2D prostoru pomocí výšky a pozice v čase",
    3: "v 2D prostoru pomocí výšky a pozice v čase a navíc používá váhy",
    4: "pozicí v notovém zápisu",
  },
  spravne: { 1: 0, 2: 0, 3: 1, 4: 0 },
  explanation:
    "Monofonní melodie se přirozeně modeluje jako posloupnost v čase; reprezentace proto typicky zahrnuje výšku tónu i časovou pozici a často i váhy (např. důležitost/délku).",
});

INITIAL_QUESTIONS.push({
  otazka:
    "Podobnostní přístup pro symbolicky reprezentované polyfonní melodie je aplikovatelný na:",
  odpovedi: {
    1: "pouze MIDI soubory",
    2: "pouze WAV soubory",
    3: "libovolný ze zde uvedených audio souborů",
    4: "pouze MP3 soubory",
  },
  spravne: { 1: 1, 2: 0, 3: 0, 4: 0 },
  explanation:
    "Symbolická reprezentace polyfonie (noty, události, kanály) je typická pro MIDI; WAV/MP3 jsou primárně signálové (audio) formáty bez explicitních symbolických not.",
});

INITIAL_QUESTIONS.push({
  otazka: "Standard MPEG7 popisuje:",
  odpovedi: {
    1: "definice deskriptorů a nástroje k jejich extrakci",
    2: "definice deskriptorů bez popisu algoritmů jejich extrakce",
    3: "definice deskriptorů a definice podobností nad nimi",
    4: "definice deskriptorů a algoritmy pro jejich získání",
  },
  spravne: { 1: 0, 2: 1, 3: 0, 4: 0 },
  explanation:
    "MPEG-7 standardizuje deskriptory a schémata popisu obsahu; typicky nenařizuje konkrétní algoritmy extrakce (ponechává je implementaci).",
});

INITIAL_QUESTIONS.push({
  otazka: "TV-modifikátor (TV-modifier) je:",
  odpovedi: {
    1: "striktně konkávní SP modifikátor, což zajišťuje vyšší hodnotu T-chyby (T-error)",
    2: "striktně konvexní SP modifikátor, což zajišťuje vyšší hodnotu T-chyby (T-error)",
    3: "striktně konkávní SP modifikátor, což zajišťuje nízkou hodnotu T-chyby (T-error)",
    4: "striktně konvexní SP modifikátor, což zajišťuje nízkou hodnotu T-chyby (T-error)",
  },
  spravne: { 1: 0, 2: 1, 3: 0, 4: 0 },
  explanation:
    "TV-modifier je definován jako striktně konvexní SP modifikátor; konvexní tvar typicky zvyšuje porušování trojúhelníkové nerovnosti, tedy vede k vyšší T-chybě.",
});

INITIAL_QUESTIONS.push({
  otazka: "Termín Retrieval Effectiveness znamená",
  odpovedi: {
    1: "efektivita vyhledávače ve smyslu kvality výsledku vyhledávání",
    2: "efektivita vyhledávače ve smyslu rychlosti vyhledávání",
    3: "efektivita vyhledávače ve smyslu úrovně prezentace výsledků",
    4: "efektivita vyhledávače ve smyslu kvality ovládání GUI",
  },
  spravne: { 1: 1, 2: 0, 3: 0, 4: 0 },
  explanation:
    "Retrieval effectiveness se vztahuje ke kvalitě výsledků (relevance, spokojenost uživatele), nikoli k rychlosti nebo UI.",
});

INITIAL_QUESTIONS.push({
  otazka: "Termín Retrieval Efficiency znamená",
  odpovedi: {
    1: "efektivita vyhledávače ve smyslu rychlosti vyhledávání",
    2: "efektivita vyhledávače ve smyslu úrovně prezentace výsledků",
    3: "efektivita vyhledávače ve smyslu kvality ovládání GUI",
    4: "efektivita vyhledávače ve smyslu kvality výsledku vyhledávání",
  },
  spravne: { 1: 1, 2: 0, 3: 0, 4: 0 },
  explanation:
    "Retrieval efficiency se týká nákladů/výkonu vyhledávání (čas, výpočetní práce), tj. rychlosti a efektivity zpracování dotazu.",
});

INITIAL_QUESTIONS.push({
  otazka: "Vysoká vnitřní dimenze (intrinsic dimensionality) značí že:",
  odpovedi: {
    1: "data netvoří shluky (clustery) a tedy jsou špatně strukturovaná",
    2: "data tvoří shluky a tedy jsou dobře indexovatelná",
    3: "data netvoří shluky a tedy jsou dobře indexovatelná",
    4: "datová sada je dobře strukturovaná, protože vnitřní dimenze odpovídá vnější",
  },
  spravne: { 1: 1, 2: 0, 3: 0, 4: 0 },
  explanation:
    "Vysoká intrinsic dimensionality obvykle znamená, že data jsou „rozplizlá“ bez výrazné struktury/shluků, což zhoršuje indexovatelnost a eliminaci kandidátů.",
});

INITIAL_QUESTIONS.push({
  otazka: "Lower-bounding je:",
  odpovedi: {
    1: "odvození výpočetně levné metriky z výpočetně drahé nemetriky",
    2: "mapování z metrického do vektorového prostoru",
    3: "obecný mechanismus pro efektivní podobnostní vyhledávání",
    4: "metoda redukce dimenze vektorového prostoru",
  },
  spravne: { 1: 0, 2: 0, 3: 1, 4: 0 },
  explanation:
    "Lower-bounding je princip: použít levně spočitatelný dolní odhad vzdálenosti k bezpečné eliminaci objektů bez výpočtu drahé vzdálenosti.",
});

INITIAL_QUESTIONS.push({
  otazka:
    "Podobnost zachovávající modifikátor (similarity preserving modifier) je:",
  odpovedi: {
    1: "rostoucí funkce f pro kterou f(0) = 0",
    2: "klesající funkce f pro kterou f(0) &lt; 0",
    3: "rostoucí funkce f pro kterou f(0) &lt; 0",
    4: "klesající funkce f pro kterou f(0) = 0",
  },
  spravne: { 1: 1, 2: 0, 3: 0, 4: 0 },
  explanation:
    "Aby modifikátor zachoval pořadí podobností/vzdáleností, musí být monotonně rostoucí; a mapování 0→0 zachovává identitu shodných objektů.",
});

INITIAL_QUESTIONS.push({
  otazka:
    "Uživatelská zpětná vazba (user relevance feedback) ve vyhledávačích znamená:",
  odpovedi: {
    1: "odeslání webového formuláře s popisem chyby",
    2: "manuální vybírání relevantních objektů z databáze",
    3: "označení korektnosti odpovědi uživatelem",
    4: "vyhledávání několika dotazy najednou",
  },
  spravne: { 1: 0, 2: 0, 3: 1, 4: 0 },
  explanation:
    "Relevance feedback znamená, že uživatel označí (ne)relevantní výsledky; systém na základě toho upraví dotaz/model a zpřesní další vyhledávání.",
});

INITIAL_QUESTIONS.push({
  otazka: "Termínem False dismissal (false drop) označujeme:",
  odpovedi: {
    1: "objekt, který se měl dostat do výsledku, ale není vůbec v databázi",
    2: "duplicita objektu ve výsledku dotazu",
    3: "objekt ve výsledku dotazu, který se tam neměl dostat",
    4: "objekt v databázi, který se měl dostat do výsledku dotazu, ale nedostal",
  },
  spravne: { 1: 0, 2: 0, 3: 0, 4: 1 },
  explanation:
    "False dismissal/false drop je relevantní objekt, který měl být ve výsledku (podle ground-truth), ale systém ho nevrátil (false negative).",
});

INITIAL_QUESTIONS.push({
  otazka: "Invertovaný index:",
  odpovedi: {
    1: "má řidší matici než index neinvertovaný",
    2: "umožňuje určit zda dokument má být ve výsledku bez nutnosti projít celou matici",
    3: "neobsahuje v matici všechny dokumenty",
    4: "je uplatnitelný pouze ve vektorovém modelu vyhledávání",
  },
  spravne: { 1: 0, 2: 1, 3: 0, 4: 0 },
  explanation:
    "Inverted index mapuje term → seznam dokumentů; pro dotaz proto procházíte jen relevantní postings listy místo celé term–dokument matice.",
});

INITIAL_QUESTIONS.push({
  otazka:
    "Kvadratická forma (quadratic form distance, QFD) je vhotná pro modelování podobnosti na vektorech když:",
  odpovedi: {
    1: "počet dimenzí vektoru odpovídá druhé mocnině celého čísla",
    2: "dimenze prostoru se předpokládají nekorelované, tj. nezávislé",
    3: "dimenze prostoru se předpokládájí korelované, např. histogram na homogenní doméně",
    4: "chceme podobnost modelovat zcela přesně",
  },
  spravne: { 1: 0, 2: 0, 3: 1, 4: 0 },
  explanation:
    "QFD využívá matici korelací mezi dimenzemi, takže je vhodná, když dimenze nejsou nezávislé (např. histogramy, kde sousední biny jsou „podobné“).",
});

INITIAL_QUESTIONS.push({
  otazka: "Longest common subsequence (LCS) je výhodná , protože:",
  odpovedi: {
    1: "je výpočetně levnější než L<sub>p</sub>",
    2: "představuje robustní zarovnání díky lokálnímu natahování/zkracování (time warp)",
    3: "umožňuje lokální zarovnání, tj. zarovnání pouze podposloupností (subsequence)",
    4: "je to opravdu podobnost, nikoliv vzdálenost",
  },
  spravne: { 1: 0, 2: 0, 3: 1, 4: 0 },
  explanation:
    "LCS vyhledává společnou podposloupnost, takže umožňuje lokální (subsequence) zarovnání a toleruje vynechání symbolů bez nutnosti globálního zarovnání celé sekvence.",
});

INITIAL_QUESTIONS.push({
  otazka: "Výpočet L<sub>p</sub> vzdálenosti má časovou složitost:",
  odpovedi: {
    1: "O(pn<sup>2</sup>)",
    2: "O(n<sup>2</sup>)",
    3: "O(n)",
    4: "O(nlogn)",
  },
  spravne: { 1: 0, 2: 0, 3: 1, 4: 0 },
  explanation:
    "Lp vzdálenost mezi dvěma n-rozměrnými vektory je součet (resp. agregace) po dimenzích, tedy lineární v počtu dimenzí O(n).",
});

INITIAL_QUESTIONS.push({
  otazka: "L<sub>p</sub> (Minkowského vzdálenosti):",
  odpovedi: {
    1: "je třída vektorových vzdáleností, které uvažují nezávislé dimenze",
    2: "jsou obecně použitelné metriky",
    3: "je třída vektorových vzdáleností, které uvažují vzájemně korelované dimenze",
    4: "je třída řetězcových vzdáleností, sloužících ke globálnímu zarovnání sekvencí",
  },
  spravne: { 1: 1, 2: 0, 3: 0, 4: 0 },
  explanation:
    "Minkowského Lp normy agregují rozdíly po dimenzích bez explicitního modelování korelací mezi dimenzemi, tedy typicky předpokládají nezávislé dimenze.",
});

INITIAL_QUESTIONS.push({
  otazka: "Dynamic time warping (DTW) je výhodná, protože:",
  odpovedi: {
    1: "není metrická narozdíl od L<sub>p</sub>",
    2: "představuje robustní zarovnávání díky lokálnímu natahování/zkracování (time warp)",
    3: "umožňuje lokální zarovnání, tj. zarovnání pouze podposloupností (subsequence)",
    4: "je výpočetně levnější než L<sub>p</sub>",
  },
  spravne: { 1: 0, 2: 1, 3: 0, 4: 0 },
  explanation:
    "DTW umožňuje lokálně deformovat časovou osu a najít nejlepší zarovnání dvou sekvencí, čímž je robustní vůči rozdílnému tempu/průběhu.",
});

INITIAL_QUESTIONS.push({
  otazka: "Mezi typické vhodné vlastnosti pro popis obrázku nepatří:",
  odpovedi: {
    1: "invariance vůči zvětšení/zmenšení (scale)",
    2: "invariance vůči posunu (translation)",
    3: "invariance vůči kvantizaci (quantization)",
    4: "invariance vůči rotaci (rotation)",
  },
  spravne: { 1: 0, 2: 0, 3: 1, 4: 0 },
  explanation:
    "Užitečné deskriptory bývají invariantní vůči geometrickým transformacím (posun, rotace, škála). „Invariance vůči kvantizaci“ není typický požadavek na vizuální popis.",
});

INITIAL_QUESTIONS.push({
  otazka: "SURF je:",
  odpovedi: {
    1: "technika seqmentace obrazu na homogenní textury",
    2: "algoritmus pro extrakci globálních vlastností z obrázku",
    3: "detektor a deskriptor lokálních vlastností v obrázcích",
    4: "metoda rozpoznávání obrázku založena na Fourierově transformaci (FT)",
  },
  spravne: { 1: 0, 2: 0, 3: 1, 4: 0 },
  explanation:
    "SURF (Speeded-Up Robust Features) je metoda pro detekci zájmových bodů a tvorbu lokálních deskriptorů, navržená jako rychlejší alternativa k SIFT.",
});

INITIAL_QUESTIONS.push({
  otazka: "Extrakce vlastností (feature extraction) je:",
  odpovedi: {
    1: "model a procedura tvorby zjednodušené reprezentace multimediálního objektu, použíté pro vyhledávání",
    2: "výběr několika vlastností multimédia za účelem jeho komprese",
    3: "výběr pouze takových vlastností mutimédia, které uživatel označí zpětnou vazbou (relevance feedback)",
    4: "většinou diskrétní Fourierova transformace (DFT)",
  },
  spravne: { 1: 1, 2: 0, 3: 0, 4: 0 },
  explanation:
    "Feature extraction převádí objekt (obraz, audio, video) na deskriptor/vektor vlastností, který je vhodný pro indexaci a podobnostní vyhledávání.",
});

INITIAL_QUESTIONS.push({
  otazka: "PM-tree obohacuje M-tree o:",
  odpovedi: {
    1: "globální pivoty, čímž zvětšuje regiony a tedy zlepšuje filtrování",
    2: "globální pivoty, čímž zmenšuje regiony a tedy zlepšuje filtrování",
    3: "lokální pivoty, čímž zmenšuje regiony a tedy zlepšuje filtrování",
    4: "lokální pivoty, čímž zvětšuje regiony a tedy zlepšuje filtrování",
  },
  spravne: { 1: 0, 2: 1, 3: 0, 4: 0 },
  explanation:
    "PM-tree přidává globální pivoty a jejich vzdálenosti, čímž zpřesňuje odhady (lower boundy) a typicky zmenšuje efektivní vyhledávací regiony, tedy zlepšuje filtrování.",
});

INITIAL_QUESTIONS.push({
  otazka: "Vnitřní dimenze (intrinsic dimensionality) je:",
  odpovedi: {
    1: "typ fraktální dimenze na metrickém prostoru",
    2: "průměrný poloměr shluků identifikovaných v databázi",
    3: "odhad dimenze vektorového L<sub>p</sub>",
    4: " statistický ukazatel odvozený z distribuce vzdáleností v databázi, sloužící jako indikátor indexovatelnosti databáze pod danou metirkou",
  },
  spravne: { 1: 0, 2: 0, 3: 0, 4: 1 },
  explanation:
    "Intrinsic dimensionality je statistický indikátor odvozený z rozdělení vzdáleností (např. z μ a σ) a používá se k odhadu, jak dobře půjde data indexovat v dané metrice.",
});

INITIAL_QUESTIONS.push({
  otazka: "Základní jednotkou nákladů v rámci metrického indexování je:",
  odpovedi: {
    1: "přístup na disk",
    2: "realtime",
    3: "počet výpočtů vzdálenostní metriky",
    4: "přístup do paměti",
  },
  spravne: { 1: 0, 2: 0, 3: 1, 4: 0 },
  explanation:
    "V metrickém vyhledávání bývá dominantní náklad výpočet (drahé) vzdálenosti; proto se výkon často měří počtem distance computations.",
});

INITIAL_QUESTIONS.push({
  otazka: "TG-modifikátor (TG-modifier) je:",
  odpovedi: {
    1: "striktně konvexní SP modifikátor, což zajišťuje vyšší hodnotu T-chyby (T-error)",
    2: "striktně konkávní SP modifikátor, což zajišťuje vyšší hodnotu T-chyby (T-error)",
    3: "striktně konvexní SP modifikátor, což zajišťuje nízkou hodnotu T-chyby (T-error)",
    4: "striktně konkávní SP modifikátor, což zajišťuje nízkou hodnotu T-chyby (T-error)",
  },
  spravne: { 1: 0, 2: 0, 3: 0, 4: 1 },
  explanation:
    "TG-modifier je striktně konkávní SP modifikátor; konkávní tvar typicky „zjemňuje“ vzdálenosti a vede k nižší T-chybě (méně porušení trojúhelníkové nerovnosti).",
});

INITIAL_QUESTIONS.push({
  otazka: "Výhody Booleovského modelu:",
  odpovedi: {
    1: "jednoduchost, rozšiřitelnost a efektivní implementace",
    2: "velmi efektivní model, přesnost a úplnost se blíží 100",
    3: "uspořádání výsledku, dotaz příkladem, snadný relevance feedback",
    4: "lze snadno kontrolovat velikost výsledku dotazu",
  },
  spravne: { 1: 1, 2: 0, 3: 0, 4: 0 },
  explanation:
    "Boolean model je konceptuálně jednoduchý, dobře implementovatelný (např. inverted index) a snadno rozšiřitelný o další operátory či restrikce.",
});

INITIAL_QUESTIONS.push({
  otazka: "Nevýhody Booleovského modelu jsou:",
  odpovedi: {
    1: "Složitost modelu a neefektivní implementace",
    2: "Neuspořádanost výsledku dotazu",
    3: "Nemožnost použití invertovaného indexu",
    4: "Reprezentace dokumentu indexem",
  },
  spravne: { 1: 0, 2: 1, 3: 0, 4: 0 },
  explanation:
    "Boolean model typicky neřadí výsledky dle relevance (výsledek je množina splňujících), což je praktická nevýhoda oproti ranking modelům.",
});

INITIAL_QUESTIONS.push({
  otazka: "Mezi nevýhody Booleovského modelu dotazování nepatří:",
  odpovedi: {
    1: "omezená vyjadřovací schopnost",
    2: "setřídění výstupu ",
    3: "efektivita vyhodnocení řídkých dotazů",
    4: "regulace počtu vrázených dokumentů",
  },
  spravne: { 1: 0, 2: 0, 3: 1, 4: 0 },
  explanation:
    "Efektivní vyhodnocení řídkých dotazů je spíše výhoda (zejména s invertovaným indexem), nikoli nevýhoda.",
});

INITIAL_QUESTIONS.push({
  otazka: "Term je:",
  odpovedi: {
    1: "Ukončovací znak dokumentu (CR LF)",
    2: "Oddělovač tokenů",
    3: "Stop slovo",
    4: "Slovo (případně fráze), vyskytující se v dokumentu",
  },
  spravne: { 1: 0, 2: 0, 3: 0, 4: 1 },
  explanation:
    "Term je jednotka indexace (slovo nebo fráze), která se vyskytuje v dokumentech a používá se v dotazu i reprezentaci dokumentu.",
});

INITIAL_QUESTIONS.push({
  otazka: "Server pro ukládání a sdílení multimédií (hosting server):",
  odpovedi: {
    1: "podporuje vyhledávání multimédií na základě obsahu nebo textového popisu",
    2: "vyhledává pouze webové stránky, na kterých jsou videa a obrázky",
    3: "vždy obsahuje jak uložení (hostování) multimédií, tak vyhledávací funkce",
    4: "podporuje vyhledávání multimédií pouze na základě textového popisu",
  },
  spravne: { 1: 1, 2: 0, 3: 0, 4: 0 },
  explanation:
    "Hosting server typicky umožňuje uložit multimédia a následně je vyhledávat buď textově (metadata), nebo i obsahově (deskriptory), dle funkcí systému.",
});

INITIAL_QUESTIONS.push({
  otazka:
    "Invertovaný index je u boolevského modelu dotazování obzvláště efektivní pro:",
  odpovedi: {
    1: "sady obsahující málo dokumentů",
    2: "dotazy obsahující mnoho termů",
    3: "dotazy s málo termy",
    4: "dotazy neobsahující negaci",
  },
  spravne: { 1: 0, 2: 0, 3: 1, 4: 0 },
  explanation:
    "U krátkých (řídkých) dotazů stačí projít jen několik postings listů, takže se vyhodnocení výrazně zrychlí oproti procházení celé matice.",
});

INITIAL_QUESTIONS.push({
  otazka: "Podobnostní operátor narozdíl od dotazu",
  odpovedi: {
    1: "je často parametrizovaný a vrací velikou odpověď",
    2: "není často parametrizovaný a vrací velkou odpověď",
    3: "je často parametrizovaný a vrací malou odpověď",
    4: "není často parametrizovaný a vrací malou odpověď",
  },
  spravne: { 1: 0, 2: 1, 3: 0, 4: 0 },
  explanation:
    "Podobnostní operátory (kNN/range) často vrací mnoho kandidátů a samy o sobě nejsou nutně detailně parametrizované jako složité dotazy; typicky dávají „velkou odpověď“.",
});

INITIAL_QUESTIONS.push({
  otazka: "Dotaz na k nejbližších sousedů (k nearest neighbors query, kNN):",
  odpovedi: {
    1: "vybere předem neurčený počet objektů do vzdálenosti k",
    2: "vybere k nejpodobnějších objektů k objektu dotazu",
    3: "se vyhodnocuje top-k operátorem",
    4: "je omezen na euklidovský vektorový prostor",
  },
  spravne: { 1: 0, 2: 1, 3: 0, 4: 0 },
  explanation:
    "kNN vrací přesně K objektů s nejmenší vzdáleností (nejvyšší podobností) k dotazu; počet výsledků je tedy předem určen.",
});

INITIAL_QUESTIONS.push({
  otazka: "kNN dotaz (range query)",
  odpovedi: {
    1: "je vhodný pro dotazování nad objekty u kterých uživatel zná sémantiku extrahovaných vektorů a sémantiku podobnostní funkce",
    2: "je vhodný pro dotazování nad objekty u kterých uživatel nezná sémantiku extrahovaných vektorů",
    3: "je vhodný pro dotazování nad objekty u kterých uživatel zná sémantiku extrahovaných vektorů",
    4: "je vhodný pro dotazování nad objekty u kterách uživatel nezná sémantiku extrahovaných vektorů a sémantiku podobnostní funkce",
  },
  spravne: { 1: 0, 2: 0, 3: 0, 4: 1 },
  explanation:
    "kNN/range dotazy jsou vhodné i tehdy, když uživatel přesně nezná význam deskriptorů a funkce podobnosti; stačí mu intuitivní „najdi podobné“ bez explicitního prahu/interpretace.",
});

INITIAL_QUESTIONS.push({
  otazka: "Content-based retrieval označuje:",
  odpovedi: {
    1: "vyhledávání struktury v obsahu multimédia",
    2: "získávání dat filtrací webu",
    3: "vyhledávání přímo podle obsahu multimédia",
    4: "vyhledávání podle textového popisu multimédia",
  },
  spravne: { 1: 0, 2: 0, 3: 1, 4: 0 },
  explanation:
    "Content-based retrieval znamená využít vizuální/akustický obsah (deskriptory z dat) místo toho, aby se systém spoléhal pouze na textové anotace.",
});

INITIAL_QUESTIONS.push({
  otazka: "Výpočet Hausdorff distance má časovou složitost:",
  odpovedi: {
    1: "O(nlogn)",
    2: "O(n<sup>2</sup>)",
    3: "O(n<sup>2</sup>).O(d), kde O(d) je složitost ground distance",
    4: "O(n)",
  },
  spravne: { 1: 0, 2: 0, 3: 1, 4: 0 },
  explanation:
    "Hausdorff nad množinami typicky vyžaduje pro každý prvek hledat nejbližší prvek v druhé množině (kvadratický počet porovnání) a každé porovnání stojí výpočet ground distance O(d).",
});

INITIAL_QUESTIONS.push({
  otazka: "Hausdorff distance je:",
  odpovedi: {
    1: "obecná množinová vzdálenost, kde pro podobnost elementů množin se využívá tzv. ground distance",
    2: "vzdálenost měřící (normovanou) velikost průniku dvou množin",
    3: "obecná vektorová vzdálenost, kde pro podobnost soužadnic vektorů se používá jednoduchá norma |.|<sub>2</sub>",
    4: "vzdálenost bodů ve vektorovém prostoru podle tzv. Hausdorffovy neriemannovské geometrie",
  },
  spravne: { 1: 1, 2: 0, 3: 0, 4: 0 },
  explanation:
    "Hausdorff je vzdálenost mezi dvěma množinami bodů/objektů; potřebuje definovanou ground distance mezi jednotlivými prvky, přes kterou se skládá množinová vzdálenost.",
});

INITIAL_QUESTIONS.push({
  otazka:
    "Výpočet kvadratické formy (quadratic form distance, QDF) má časovou složitost:",
  odpovedi: {
    1: "O(n<sup>2</sup>)",
    2: "O(nlogn)",
    3: "O(n)",
    4: "O(n<sup>3</sup>)",
  },
  spravne: { 1: 1, 2: 0, 3: 0, 4: 0 },
  explanation:
    "QFD používá matici korelací mezi dimenzemi, což vede na výpočet typu v^T A v, který je obecně kvadratický v počtu dimenzí O(n^2).",
});

INITIAL_QUESTIONS.push({
  otazka: "Keyframe je:",
  odpovedi: {
    1: "základní prvek pro konstrukci video deskriptoru",
    2: "nejreprezentativnější obrázek z video klipu, sumarizující jeho obsah",
    3: "reprezentativní obrázek z kolekce obrázků",
    4: "obraz reprezentující střed shluku obrázků",
  },
  spravne: { 1: 1, 2: 0, 3: 0, 4: 0 },
  explanation:
    "Keyframe je klíčový snímek používaný k reprezentaci video obsahu a jako vstup pro extrakci video deskriptorů/feature pipeline.",
});

INITIAL_QUESTIONS.push({
  otazka: "MPEG7 audio definuje:",
  odpovedi: {
    1: "pouze nízkoúrovňové (low-level) diskriptory",
    2: "nízko, středně (mid-level) a vysokoúrovňové deskriptory",
    3: "pouze vysokoúrovňové (high-level) deskriptory",
    4: "nízko i vysoko úrovňové deskriptory",
  },
  spravne: { 1: 0, 2: 0, 3: 0, 4: 1 },
  explanation:
    "MPEG-7 audio popisuje jak nízkoúrovňové rysy (např. spektrální charakteristiky), tak i vyšší úrovně popisu; neomezuje se jen na jednu úroveň.",
});

INITIAL_QUESTIONS.push({
  otazka: "Zájmový bod (interest point) je:",
  odpovedi: {
    1: "bod/region v obraze, který je dobře definovaný, nese informaci o svém okolí a je stabilní",
    2: "bodové hodnocení obrázku uživatelem",
    3: "každý pixel na hraně segmentu (v segmentovaném obraze)",
    4: "bod/region v obraze, který je zajímavý pro uživatele ",
  },
  spravne: { 1: 1, 2: 0, 3: 0, 4: 0 },
  explanation:
    "Interest point je lokální struktura (bod/region) stabilní vůči rušení a transformacím, vhodná pro detekci a popis lokálních vlastností (SIFT/SURF).",
});

INITIAL_QUESTIONS.push({
  otazka: "Metrický model podobnostního vyhledávání je:",
  odpovedi: {
    1: "obecný model indexování čehokoliv na internetu, co lze vyhledat podle podobnosti",
    2: "založen na univerzu (množině) deskriptorů a metrické vzdálenosti sloužící jako podobnost deskriptorů",
    3: "množina metrických vzdáleností pro podobnostní vyhledávání multimédií",
    4: "speciální případ vektorového podobnostního modelu",
  },
  spravne: { 1: 0, 2: 1, 3: 0, 4: 0 },
  explanation:
    "Metrický model je definován univerzem objektů/deskriptorů a metrickou vzdáleností d(·,·), která určuje jejich (ne)podobnost a umožňuje metrické indexování.",
});

INITIAL_QUESTIONS.push({
  otazka: "Termín Retrieval efficiency znamená:",
  odpovedi: {
    1: "Míru úspornosti reprezentace dotazu",
    2: "Míru výkonu, měřící rychlost odezvy dotazu",
    3: "Míru kvality, měřící uživatelskou spokojenost s výsledkem dotazu",
    4: "Míru rychlosti, s jakou uživatel formuluje dotaz",
  },
  spravne: { 1: 0, 2: 1, 3: 0, 4: 0 },
  explanation:
    "Retrieval efficiency se měří výkonově (čas/latence, náklady), tj. jak rychle a za jakou cenu systém odpoví na dotaz.",
});

INITIAL_QUESTIONS.push({
  otazka: "PAC jsou:",
  odpovedi: {
    1: "pravděpodobně podobnostní dotazy",
    2: "permanentně aproximativní dotazy",
    3: "pravděpodobně přibližně korektní dotazy",
    4: "nic takového neexistuje",
  },
  spravne: { 1: 0, 2: 0, 3: 1, 4: 0 },
  explanation:
    "PAC je zkratka pro „Probably Approximately Correct“ – výsledky jsou s vysokou pravděpodobností přibližně správné (aproximativní vyhledávání s garancemi).",
});

INITIAL_QUESTIONS.push({
  otazka: "Metoda FastMap",
  odpovedi: {
    1: "nepoužívá kosinovu a Pythagorovu větu",
    2: "je rychlá metoda používající náhodné projekce do vektorového prostoru",
    3: "je metoda mapování obecných metrických dat do euklidovského prostoru",
    4: "je omezena pouze na mapování dat v euklidovském prostoru",
  },
  spravne: { 1: 0, 2: 0, 3: 1, 4: 0 },
  explanation:
    "FastMap je technika pro embedding: mapuje obecná metrická data do (nízko-dimenzionálního) euklidovského prostoru tak, aby se přibližně zachovaly vzdálenosti.",
});

INITIAL_QUESTIONS.push({
  otazka: "Aproximativní vyhledávání je výhodné, když",
  odpovedi: {
    1: "neznáme přesnou sémantiku vzdálenostní funkce",
    2: "chceme výrazně rychlejší vyhledávání i za cenu velkého snížení přesnosti vyhledávání",
    3: "známe přesnou sémantiku vzdálenostní funkce",
    4: "chceme výrazně rychlejší vyhledávání za cenu malého snížení přesnosti vyhledávání",
  },
  spravne: { 1: 0, 2: 0, 3: 0, 4: 1 },
  explanation:
    "Aproximace dává smysl, když chcete výrazně zrychlit dotazy při kontrolovatelném (malém) poklesu přesnosti/relevance – typicky kompromis výkon vs. kvalita.",
});

// === Missing / extra questions from the new HTML notes https://fit-wiki.cz/%C5%A1kola/p%C5%99edm%C4%9Bty/mi-vmw/vmw_zkouska_vsechny_zname_otazky ===
// (Wrong answers marked as "made up" are plausible distractors, but not guaranteed to be real exam options.)

INITIAL_QUESTIONS.push({
  otazka: "Termín Retrieval Effectiveness znamená:",
  ai: true,
  odpovedi: {
    1: "efektivita vyhledávače ve smyslu kvality výsledku vyhledávání",
    2: "efektivita vyhledávače ve smyslu rychlosti vyhledávání", // made up (this is retrieval efficiency)
    3: "efektivita vyhledávače ve smyslu kvality ovládání GUI", // made up
    4: "efektivita vyhledávače ve smyslu úspornosti indexu", // made up
  },
  spravne: { 1: 1, 2: 0, 3: 0, 4: 0 },
  explanation:
    "Effectiveness hodnotí kvalitu výsledků (relevance), nikoli čas, UI ani velikost indexu.",
});

INITIAL_QUESTIONS.push({
  otazka: "Hausdorff distance:",
  odpovedi: {
    1: "měří „nejvzdálenějšího nejbližšího souseda“, pro všechny prvky A se spočítají vzdálenosti k nejbližšímu sousedu v B a vezme se maximum, multi-reprezentace (sada objektů příslušející jednomu dokumentu), expensive O(mn)*O(ground dist.)",
    2: "Nebyli moznosti na FW",
  },
  spravne: { 1: 1, 2: 0 },
  explanation:
    "Hausdorff vzdálenost je založená na maximu z nejbližších vzdáleností (farthest nearest neighbor), což přesně popisuje odpověď 1; navíc je výpočetně náročná kvůli párovým ground distance výpočtům.",
});

INITIAL_QUESTIONS.push({
  otazka: "Složitost QFD, pre D dimenzionálny deskriptor:",
  odpovedi: {
    1: "O(D^2)",
    2: "O(DlogD)", // made up
    3: "O(D)", // made up
    4: "O(D^3)", // made up
  },
  spravne: { 1: 1, 2: 0, 3: 0, 4: 0 },
  explanation:
    "QFD pracuje s korelační maticí mezi dimenzemi, takže výpočet obecně zahrnuje kvadratický počet kombinací dimenzí, tj. O(D^2).",
});

INITIAL_QUESTIONS.push({
  otazka: "Na co se používá „text-based retrieval“?",
  ai: true,
  odpovedi: {
    1: "vyhledávání multimédií pouze podle textové anotace (metadat) a textových signálů",
    2: "vyhledávání multimédií přímo podle vizuálního/akustického obsahu bez anotace", // made up (content-based)
    3: "vyhledávání pouze podle podobnosti histogramů barev", // made up
    4: "vyhledávání pouze podle komprese/kodeku (např. MPEG)", // made up
  },
  spravne: { 1: 1, 2: 0, 3: 0, 4: 0 },
  explanation:
    "Text-based retrieval používá text (metadata, okolní text, anotace) jako primární signál; naopak vyhledávání podle obsahu je content-based.",
});

INITIAL_QUESTIONS.push({
  otazka: "Na co se používá „content-based retrieval“?",
  ai: true,
  odpovedi: {
    1: "K vyhledávání multimédií podle skutečného obsahu (vizuálního/akustického) pomocí deskriptorů a modelů, nezávisle na textové anotaci.",
    2: "K vyhledávání multimédií výhradně podle textové anotace (metadat) bez použití obsahu.",
    3: "K vyhledávání pouze podle komprese a kodeku (např. JPEG/MPEG) bez analýzy obsahu.",
    4: "K vyhledávání pouze booleovským dotazem nad invertovaným indexem.",
  },
  spravne: { 1: 1, 2: 0, 3: 0, 4: 0 },
  explanation:
    "Content-based retrieval porovnává objekty přes jejich deskriptory (feature vectors) extrahované z obsahu (obraz/audio/video), nikoli primárně přes text.",
});

INITIAL_QUESTIONS.push({
  otazka: "Co je to dotaz (query) ve vyhledávání?",
  ai: true,
  odpovedi: {
    1: "Explicitní formulace jednorázového (one-shot) záměru vyhledávání.",
    2: "Formulace fixního (stálého) záměru nad dynamickým obsahem (subscription/filtering).",
    3: "Proces komprese indexu za účelem rychlejšího vyhledávání.",
    4: "Metoda hodnocení kvality vyhledávání pomocí precision/recall.",
  },
  spravne: { 1: 1, 2: 0, 3: 0, 4: 0 },
  explanation:
    "Query je jednorázový explicitní požadavek; standing požadavek je filtering/subscription a precision/recall patří do vyhodnocování.",
});

INITIAL_QUESTIONS.push({
  otazka: "Co je filtrace (filtering) ve vyhledávání?",
  ai: true,
  odpovedi: {
    1: "formulace fixního (stálého) vyhledávacího záměru nad dynamickým obsahem (např. proud dokumentů)",
    2: "explicitní formulace jednorázového (one-shot) vyhledávacího záměru", // made up (to je dotaz/query)
    3: "použití pouze negace v booleovském dotazu", // made up
    4: "proces komprese indexu pro rychlejší dotazy", // made up
  },
  spravne: { 1: 1, 2: 0, 3: 0, 4: 0 },
  explanation:
    "Filtering/subscription je dlouhodobý, fixní informační záměr aplikovaný na měnící se data; není to jednorázový dotaz.",
});

INITIAL_QUESTIONS.push({
  otazka: "Co je to vyhledávání filtrováním?",
  ai: true,
  odpovedi: {
    1: "dlouhodobé (standing) dotazování nad průběžně přicházejícími daty / dynamickou databází",
    2: "to samé co jednorázové dotazování (ad-hoc query)", // made up
    3: "RSS jako jediný způsob filtrování", // made up
    4: "vyhledávání omezené pouze na metrické indexy", // made up
  },
  spravne: { 1: 1, 2: 0, 3: 0, 4: 0 },
  explanation:
    "Vyhledávání filtrováním je režim se „stálým“ dotazem, který se průběžně aplikuje na nové položky (stream/dynamická DB).",
});

INITIAL_QUESTIONS.push({
  otazka: "Anotace multimédia znamená:",
  ai: true,
  odpovedi: {
    1: "slovní/textový popis (metadata) multimediálního objektu",
    2: "komprimovanou binární reprezentaci multimédia (např. JPEG bitstream)", // made up
    3: "množinu SIFT/SURF deskriptorů", // made up
    4: "hash multimédia určený pro deduplikaci", // made up
  },
  spravne: { 1: 1, 2: 0, 3: 0, 4: 0 },
  explanation:
    "Anotace je textový popis/tagy/metadatové informace připojené k objektu; deskriptory či hash jsou jiné typy reprezentace.",
});

INITIAL_QUESTIONS.push({
  otazka: "Jak typicky vyhledává webový vyhledávač multimédia?",
  ai: true,
  odpovedi: {
    1: "kombinací textových signálů (okolní text, user annotation, anchor text, název souboru) a případně i obsahových metod",
    2: "výhradně content-based retrieval bez jakékoliv textové informace", // made up
    3: "výhradně podle MIME typu a velikosti souboru", // made up
    4: "výhradně pomocí DTW nad audio stopou videa", // made up
  },
  spravne: { 1: 1, 2: 0, 3: 0, 4: 0 },
  explanation:
    "V praxi webové vyhledávače často kombinují různé textové signály kolem multimédia (metadata/okolní text) a někdy i obsahové rysy; čistě content-based je spíše výjimka.",
});

INITIAL_QUESTIONS.push({
  otazka: "Co je False hit (false alarm)?",
  ai: true,
  odpovedi: {
    1: "objekt je ve výsledku testovacího systému, ale není ve výsledku referenčního (ground-truth) systému",
    2: "objekt je v databázi, ale není vůbec indexovatelný", // made up
    3: "objekt se ve výsledku vyskytne dvakrát (duplicita)", // made up
    4: "objekt je relevantní a byl správně nalezen", // made up
  },
  spravne: { 1: 1, 2: 0, 3: 0, 4: 0 },
  explanation:
    "False hit/false alarm je falešně pozitivní výsledek: systém něco vrátí, ale podle ground-truth to ve výsledku být nemělo.",
});

INITIAL_QUESTIONS.push({
  otazka: "Co je False drop (false dismissal)?",
  ai: true,
  odpovedi: {
    1: "objekt není ve výsledku testovacího systému, ale ve výsledku referenčního (ground-truth) systému je",
    2: "objekt je ve výsledku testovacího systému, ale není relevantní", // made up (to je false hit / false positive)
    3: "objekt není v databázi a proto nemůže být vrácen", // made up
    4: "objekt je relevantní a byl vždy nalezen", // made up
  },
  spravne: { 1: 1, 2: 0, 3: 0, 4: 0 },
  explanation:
    "False drop/false dismissal je falešně negativní: relevantní položka (v ground-truth) ve výsledku testovaného systému chybí.",
});

INITIAL_QUESTIONS.push({
  otazka: "Top-K – kolik výsledků zobrazí?",
  ai: true,
  odpovedi: {
    1: "zobrazí právě K nejlépe ohodnocených (nejpodobnějších) výsledků",
    2: "zobrazí všechny výsledky do vzdálenosti K", // made up (to je range query s prahem)
    3: "zobrazí náhodných K výsledků", // made up
    4: "zobrazí K výsledků pouze v booleovském modelu", // made up
  },
  spravne: { 1: 1, 2: 0, 3: 0, 4: 0 },
  explanation:
    "Top-K operátor vrací přesně K nejlepších podle skóre/podobnosti; „do vzdálenosti K“ je naopak range query s prahem.",
});

INITIAL_QUESTIONS.push({
  otazka:
    "U kterých textových modelů vyhledávání se typicky používá invertovaný index?",
  ai: true,
  odpovedi: {
    1: "pouze booleovský model", // made up
    2: "pouze vektorový model", // made up
    3: "jak booleovský, tak vektorový model",
    4: "žádný – invertovaný index se nepoužívá v textovém vyhledávání", // made up
  },
  spravne: { 1: 0, 2: 0, 3: 1, 4: 0 },
  explanation:
    "Inverted index je standardní implementace jak pro Boolean (postings listy pro termy), tak pro vektorový model (postings s váhami/TF-IDF).",
});

INITIAL_QUESTIONS.push({
  otazka: "Query-by-example znamená:",
  ai: true,
  odpovedi: {
    1: "dotaz je tvořen přímo ukázkovým dokumentem/objektem (příklad), podle kterého se hledají podobné",
    2: "dotaz je tvořen pouze booleovským výrazem AND/OR/NOT", // made up
    3: "dotaz je vždy textová anotace multimédia", // made up
    4: "dotaz je vždy shluk (cluster) objektů a hledají se shluky", // made up
  },
  spravne: { 1: 1, 2: 0, 3: 0, 4: 0 },
  explanation:
    "U query-by-example je dotaz přímo exemplář (obrázek, audio klip, dokument), vůči němuž se hledají podobné objekty.",
});

INITIAL_QUESTIONS.push({
  otazka: "Co je to kodek?",
  ai: true,
  odpovedi: {
    1: "složenina „kodér + dekodér“ (coder/decoder)",
    2: "pouze kompresní algoritmus bez dekódování", // made up
    3: "databázový index pro multimédia", // made up
    4: "síťový protokol pro streamování (např. HTTP)", // made up
  },
  spravne: { 1: 1, 2: 0, 3: 0, 4: 0 },
  explanation:
    "Codec (coder/decoder) zahrnuje jak kódování (kompresi), tak dekódování (dekompresi/rekonstrukci) média.",
});

INITIAL_QUESTIONS.push({
  otazka: "Co je to MIME?",
  ai: true,
  odpovedi: {
    1: "Multipurpose Internet Mail Extensions; standard pro označování internet media types (např. Content-Type)",
    2: "kompresní standard pro obrázky (náhrada JPEG)", // made up
    3: "metrická vzdálenost nad histogramy", // made up
    4: "souborový systém pro multimediální databáze", // made up
  },
  spravne: { 1: 1, 2: 0, 3: 0, 4: 0 },
  explanation:
    "MIME je standard pro popis typu obsahu (media type) v internetových protokolech (např. HTTP hlavička Content-Type).",
});

INITIAL_QUESTIONS.push({
  otazka: "Co je to range query?",
  ai: true,
  odpovedi: {
    1: "vrací předem neurčený počet objektů do zadaného prahu vzdálenosti (radius) od dotazu",
    2: "vrací přesně K nejbližších sousedů", // made up (to je kNN)
    3: "vrací objekty s nejvyšším tf-idf pro daný term", // made up
    4: "vrací pouze objekty z jedné stránky B-stromu", // made up
  },
  spravne: { 1: 1, 2: 0, 3: 0, 4: 0 },
  explanation:
    "Range query je definována prahem r: vrací všechny objekty s d(q,o) ≤ r, takže počet výsledků není dopředu znám.",
});

INITIAL_QUESTIONS.push({
  otazka: "Co jsou lokální pivoti?",
  ai: true,
  odpovedi: {
    1: "dynamické objekty volené během indexace (typicky pro konkrétní část indexu) pro konstrukci lower boundů",
    2: "statické objekty platné po celý život indexu (globální pivoti)", // made up
    3: "náhodně volené dotazy uživatele během browsing session", // made up
    4: "centroidy barev v RGB prostoru používané jen pro histogramy", // made up
  },
  spravne: { 1: 1, 2: 0, 3: 0, 4: 0 },
  explanation:
    "Lokální pivoty jsou vázané na část indexu (např. cluster/region) a volí se při konstrukci pro zlepšení lower boundů lokálně, na rozdíl od globálních pivotů.",
});

INITIAL_QUESTIONS.push({
  otazka: "Co je browsing v kontextu multimediálního vyhledávání?",
  ai: true,
  odpovedi: {
    1: "iterativní průzkum prostoru pomocí série dotazů / navigace nad výsledky (typicky similarity-based)",
    2: "jednorázový booleovský dotaz nad invertovaným indexem", // made up
    3: "offline tvorba deskriptorů bez dotazování", // made up
    4: "pouze stahování multimédií bez vyhledávání", // made up
  },
  spravne: { 1: 1, 2: 0, 3: 0, 4: 0 },
  explanation:
    "Browsing je interaktivní a iterativní: uživatel prochází prostor výsledků a opakovaně upřesňuje/naviguje pomocí dalších dotazů či kliknutí.",
});

INITIAL_QUESTIONS.push({
  otazka:
    "TG vs TV (modifikátory) – jaký je rozdíl z hlediska tvaru a T-chyby?",
  ai: true,
  odpovedi: {
    1: "TG je striktně konkávní SP modifikátor (nižší T-error), TV je striktně konvexní SP modifikátor (vyšší T-error)",
    2: "TG je striktně konvexní a vždy snižuje T-error více než TV", // made up
    3: "TG i TV jsou metriky a vždy zachovávají trojúhelníkovou nerovnost", // made up
    4: "TG i TV jsou pouze normalizace tf-idf vah", // made up
  },
  spravne: { 1: 1, 2: 0, 3: 0, 4: 0 },
  explanation:
    "Rozdíl je v tvaru SP modifikátoru: konkávní (TG) typicky redukuje T-error, zatímco konvexní (TV) T-error zvyšuje kvůli častějšímu porušení trojúhelníkové nerovnosti.",
});

INITIAL_QUESTIONS.push({
  otazka: "Co znamená tf (term frequency) v tf-idf?",
  ai: true,
  odpovedi: {
    1: "četnost výskytu termu v konkrétním dokumentu (případně její normalizace)",
    2: "počet dokumentů v kolekci", // made up
    3: "inverse document frequency", // made up
    4: "počet různých termů v dotazu", // made up
  },
  spravne: { 1: 1, 2: 0, 3: 0, 4: 0 },
  explanation:
    "tf je lokální četnost termu v dokumentu; čím častěji se term v dokumentu vyskytuje, tím větší má obvykle váhu (po případné normalizaci).",
});

INITIAL_QUESTIONS.push({
  otazka: "Co znamená idf (inverse document frequency) v tf-idf?",
  ai: true,
  odpovedi: {
    1: "míra vzácnosti termu v kolekci; typicky roste, když termu klesá document frequency (df)",
    2: "četnost výskytu termu v konkrétním dokumentu", // made up
    3: "čas potřebný pro výpočet invertovaného indexu", // made up
    4: "pravděpodobnost relevance dokumentu bez ohledu na dotaz", // made up
  },
  spravne: { 1: 1, 2: 0, 3: 0, 4: 0 },
  explanation:
    "idf potlačuje velmi časté termy v kolekci a zvýrazňuje vzácné; typicky idf = log(N/df), kde df je počet dokumentů obsahujících term.",
});

INITIAL_QUESTIONS.push({
  otazka:
    "Normalizovaný term i v dokumentu j se ve vektorovém modelu využije typicky k čemu?",
  ai: true,
  odpovedi: {
    1: "k výpočtu váhy termu (např. složka tf nebo tf-idf) v reprezentaci dokumentu",
    2: "k přímému určení pořadí dokumentů bez podobnostní funkce", // made up
    3: "k vytvoření metrické vzdálenosti bez znalosti dotazu", // made up
    4: "k detekci zájmových bodů v obraze (interest points)", // made up
  },
  spravne: { 1: 1, 2: 0, 3: 0, 4: 0 },
  explanation:
    "Ve vektorovém modelu se normalizovaná TF používá jako komponenta váhy termu v dokumentu; následně se s tímto vektorem počítá podobnost k dotazu.",
});

INITIAL_QUESTIONS.push({
  otazka: "Co je vnitřní dimenze (intrinsic dimensionality) a co vyjadřuje?",
  ai: true,
  odpovedi: {
    1: "Kvantitativní ukazatel, který měří, jak „dobře“ je daná distribuce rozložená; typicky se udává jako μ² / (2σ²) a vyšší hodnota znamená horší (méně příznivou) distribuci pro vyhledávání/indexaci.",
    2: "Počet atributů (souřadnic) v původním vektorovém prostoru dat; vyšší hodnota vždy znamená lepší distribuci.",
    3: "Míra přesnosti vyhledávání (precision) vypočtená jako μ / σ, kde vyšší hodnota znamená lepší výsledky.",
    4: "Velikost invertovaného indexu vyjádřená jako poměr počtu termů a dokumentů; vyšší hodnota znamená rychlejší dotazy.",
  },
  spravne: { 1: 1, 2: 0, 3: 0, 4: 0 },
  explanation:
    "Intrinsic dimensionality je statistický indikátor z distribuce vzdáleností (např. přes μ a σ). Vysoká hodnota typicky indikuje „nepříznivou“ strukturu dat pro metrické indexování.",
});

INITIAL_QUESTIONS.push({
  otazka: "Co vyjadřuje vzdálenost DTW (Dynamic Time Warping) a k čemu slouží?",
  ai: true,
  odpovedi: {
    1: "Zohledňuje časově lokální změny „frekvence vzorkování“ tím, že lokálně natahuje/zkracuje posloupnosti a hledá zarovnání s nejmenší celkovou cenou (součtem parciálních vzdáleností).",
    2: "Je to prostý Eukleidovský rozdíl dvou posloupností po prvcích bez jakéhokoli časového zarovnání; nepovoluje posuny ani deformace v čase.",
    3: "Měří podobnost pouze podle globálního průměru a rozptylu signálu; ignoruje pořadí prvků v čase.",
    4: "Je to metrický indexační mechanismus, který nahrazuje invertovaný index pro textové dotazy.",
  },
  spravne: { 1: 1, 2: 0, 3: 0, 4: 0 },
  explanation:
    "DTW hledá optimální zarovnání dvou časových řad při povoleném lokálním natahování/zkracování osy času, aby porovnání bylo robustní vůči rozdílnému tempu.",
});

INITIAL_QUESTIONS.push({
  otazka: "Co je invertovaný index (inverted index)?",
  ai: true,
  odpovedi: {
    1: "Struktura, která pro každý term ukládá seznam ID dokumentů (postings list), ve kterých se term vyskytuje; při vyhledávání se procházejí jen seznamy termů z dotazu.",
    2: "Seznam všech termů pro každý dokument; při vyhledávání se vždy prochází celý seznam termů všech dokumentů.",
    3: "Metrický index pro kNN dotazy, který ukládá vzdálenosti dokumentů od pivotů.",
    4: "Datová struktura, která ukládá pouze pořadí Top-K výsledků bez možnosti vyhodnocení dotazu.",
  },
  spravne: { 1: 1, 2: 0, 3: 0, 4: 0 },
  explanation:
    "Inverted index převrací mapování: místo dokument→termy ukládá term→dokumenty. To umožňuje vyhodnocovat dotaz jen nad postings listy termů z dotazu.",
});

INITIAL_QUESTIONS.push({
  otazka:
    "Co vyjadřuje Hausdorffova vzdálenost (Hausdorff distance) mezi dvěma množinami objektů A a B?",
  ai: true,
  odpovedi: {
    1: "Měří „nejvzdálenějšího nejbližšího souseda“: pro každý prvek z A se vezme vzdálenost k jeho nejbližšímu prvku v B a výsledkem je maximum z těchto vzdáleností (analogicky lze uvažovat i opačný směr).",
    2: "Je to průměrná vzdálenost všech dvojic prvků mezi A a B; čím větší průměr, tím menší vzdálenost.",
    3: "Je to vzdálenost definovaná pouze pro jednorozměrné posloupnosti, která lokálně natahuje/zkracuje čas (DTW).",
    4: "Je to textová míra podobnosti založená na tf-idf váhách a kosinové podobnosti.",
  },
  spravne: { 1: 1, 2: 0, 3: 0, 4: 0 },
  explanation:
    "Hausdorff staví na nejbližších sousedech a bere maximum z těchto minim, takže zachytí „nejhorší“ lokální odchylku mezi množinami (farthest nearest neighbor).",
});

