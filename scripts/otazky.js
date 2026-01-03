var otazky = [];

otazky.push({
    otazka: "Co poskytují Stock servery:",
    odpovedi: {
        1: "časové řady vývoje akcií", 
        2: "zpoplatněná anotovaná multimédia", 
        3: "sdílení videí ze sociálních sítí", 
        4: "volně stáhnutelná alba obrázků"
    },
    spravne: {1: 0, 2: 1, 3: 0, 4: 0}
});

otazky.push({
    otazka: "Dotaz (query) je:",
    odpovedi: {
        1: "Navigace ve struktuře databáze (webu)", 
        2: "Explicitní formulace jednorázového záměru vyhledávání", 
        3: "SQL příkaz obsahující predikát LIKE", 
        4: "Postupná filtrace relevantních dokumentů a proudu dokumentů"
    },
    spravne: {1: 0, 2: 1, 3: 0, 4: 0}
});

otazky.push({
    otazka: "V kontextu vyhledávání v multimediálních databázích termínem Benchmarking označujeme:",
    odpovedi: {
        1: "platformu vyhodnocování kvality vyhledávacího systému vzhledem k nějaké anotované „golden-standard“ kolekci", 
        2: "uživatelská anketa zaměřená na hodnocení kvality webového vyhledávače", 
        3: "měření P-R křivky na nějakém systému", 
        4: "výkonnostní (rychlostní) srovnání dvou vyhledávačů"
    },
    spravne: {1: 1, 2: 0, 3: 0, 4: 0}
});

otazky.push({
    otazka: "Přesnost (precision) a úplnost (recall) vyhledávání se reálně chovají tak, že:",
    odpovedi: {
        1: "přesnost lze spočítat z úplnosti", 
        2: "když roste přesnost, roste i úplnost", 
        3: "chování přesností a úplnosti nelze odhadovat", 
        4: "když roste přesnost, klesá úplnost, a naopak"
    },
    spravne: {1: 0, 2: 0, 3: 0, 4: 1}
});

otazky.push({
    otazka: "Podobnostní vyhledávání (vyhledávání podle podobnosti; similarity search) je:",
    odpovedi: {
        1: "technika klasifikace objektů do tříd pomocí podobnostní matice", 
        2: "vyhledávací model založený na ad-hoc shlukování podobných objektů a jejich následném filtrování", 
        3: "geometrická interpretace vyhledávacích problémů ve vektorovém prostoru", 
        4: "vyhledávací model založený na univerzu deskriptorů multimediálních objektů a funkcí ohodnocující podobnost libovolných dvou deskriptorů z univerza"
    },
    spravne: {1: 0, 2: 0, 3: 0, 4: 1}
});

otazky.push({
    otazka: "Funkce podobnosti je:",
    odpovedi: {
        1: "algoritmus, který nalezne pro dotazový deskriptor podobné deskriptory z databáze", 
        2: "funkce ohodnocující danou databázi stupněm podobnosti všech uložených deskriptorů", 
        3: "libovolná funkce vracející pro dva deskriptory z univerze podobnostní skóre", 
        4: "metrická vzdálenost sloužící jako podobnost"
    },
    spravne: {1: 0, 2: 0, 3: 1, 4: 0}
});

otazky.push({
    otazka: "Nemetrické vzdálenosti, narozdíl od metrických:",
    odpovedi: {
        1: "dovolují modelovat robustnější podobnosti", 
        2: "fungují dobře pouze ve vysokorozměrných prostorech", 
        3: "jsou indexovatelnější", 
        4: "vyžadují od doménových expertů větší matematické znalosti"
    },
    spravne: {1: 1, 2: 0, 3: 0, 4: 0}
});

otazky.push({
    otazka: "Dynamic time warping distance (DTW) se používá pro měření podobnosti na:",
    odpovedi: {
        1: "vektorech", 
        2: "řetězcích", 
        3: "časových řadách", 
        4: "množinách"
    },
    spravne: {1: 0, 2: 0, 3: 1, 4: 0}
});

otazky.push({
    otazka: "Earth mover&#039;s distance (EMD) je vhodná pro modelování podobnosti na histogramech, když:",
    odpovedi: {
        1: "histogramy reprezentují obraz omezený na barevný prostor RGB", 
        2: "nestačí pouhá korelace dimenzí (sloupců), ale řeší se „nejmenší přesun &#039;masy&#039; mezi histogramy“", 
        3: "modelujeme biochemickou podobnost vzorků", 
        4: "nevíme jaké korelace vyplnit do matice kvadratické formy (QFD)"
    },
    spravne: {1: 0, 2: 1, 3: 0, 4: 0}
});

otazky.push({
    otazka: "SIFT je",
    odpovedi: {
        1: "detektor a deskriptor lokálních vlastností v obrázcích", 
        2: "metoda rozpoznávání obrázku založená na Fourierově transformaci (FT)", 
        3: "technika segmentace obrazu na homogenní textury", 
        4: "algoritmus pro extrakci globálních vlastností z obrázku"
    },
    spravne: {1: 1, 2: 0, 3: 0, 4: 0}
});

otazky.push({
    otazka: "Matice pro výpočet QFD (quadratic form distance) pro histogramy barev obsahuje",
    odpovedi: {
        1: "vzdálenosti průměru všech barev vyskytujících se v obrázcích", 
        2: "korelace mezi reprezentanty barev vyskytujícími se v obrázcích", 
        3: "vzdálenosti k několika pevně daným centroidům barev", 
        4: "korelace mezi všemi barvami vyskytujícími se v obrázcích"
    },
    spravne: {1: 0, 2: 1, 3: 0, 4: 0}
});

otazky.push({
    otazka: "Termín „query-by-humming“ při vyhledávání např. hudební skladby znamená:",
    odpovedi: {
        1: "že jako dotaz je použito audio zapískané/zazpívané uživatelem", 
        2: "totéž co „query-by-example“", 
        3: "že dotazem je zkomprimovaný audio soubor", 
        4: "že jako dotaz je použit audio soubor nějaké skladby"
    },
    spravne: {1: 1, 2: 0, 3: 0, 4: 0}
});

otazky.push({
    otazka: "M-strom je:",
    odpovedi: {
        1: "inspirován R-stromem, využívá hiearchické hnízdění metrických regionů a není vyvážený", 
        2: "inspirován PM-stromem, využívá hiearchické hnízdění metrických regionů a je vyvážený", 
        3: "inspirován PM-stromem, využívá hiearchické hnízdění metrických regionů a není vyvážený", 
        4: "inspirován R-stromem, využívá hiearchické hnízdění metrických regionů a je vyvážený"
    },
    spravne: {1: 0, 2: 0, 3: 0, 4: 1}
});

otazky.push({
    otazka: "T-chyba (T-error) vyžaduje:",
    odpovedi: {
        1: "proporce trojic v datové sadě splňujících trojúhelníkovou nerovnost", 
        2: "proporce dvojic v datové sadě splňujících trojúhelníkovou nerovnost", 
        3: "proporce trojic v datové sadě porušujících trojúhelníkovou nerovnost", 
        4: "proporce dvojic v datové sadě porušujících trojúhelníkovou nerovnost"
    },
    spravne: {1: 0, 2: 0, 3: 1, 4: 0}
});

otazky.push({
    otazka: "Metrické přístupové metody (metric access methods) jsou:",
    odpovedi: {
        1: "datové struktury a algoritmy umožňující rychlé vyhledávání v metrickém modelu podobnostního vyhledávání", 
        2: "stromové indexy odvozené od B-stromu", 
        3: "prostorové indexy využívající vektorové podobnosti", 
        4: "algoritmy pro podobnostní hashování"
    },
    spravne: {1: 1, 2: 0, 3: 0, 4: 0}
});

otazky.push({
    otazka: "Mezi metrické přístupové metody (metric access methods) nepatří:",
    odpovedi: {
        1: "D-index", 
        2: "mvp-tree", 
        3: "LAESA", 
        4: "R-tree"
    },
    spravne: {1: 0, 2: 0, 3: 0, 4: 1}
});

otazky.push({
    otazka: "Nevýhoda měření výkonu metrického indexu reálným časem je",
    odpovedi: {
        1: "závislost na platformě, optimalizaci, operačním systému a hardware", 
        2: "nemá nevýhody", 
        3: "nelze použít va paralelním prostředí", 
        4: "nemožnost objetivně porovnat s jiným indexem"
    },
    spravne: {1: 1, 2: 0, 3: 0, 4: 0}
});

otazky.push({
    otazka: "AESA je",
    odpovedi: {
        1: "binární strom využívající dělení prostoru (zobecněnými) nadrovinami", 
        2: "n-ární strom využívající dělení prostoru (zobecněnými) nadrovinami", 
        3: "tabulka vzdáleností mezi všemi objekty databáze a vybranými pivoty", 
        4: "tabulka vzdáleností mezi všemi dvojicemi objektů v databázi"
    },
    spravne: {1: 0, 2: 0, 3: 0, 4: 1}
});

otazky.push({
    otazka: "Mezi axiomy metriky (metric postulates) nepatří:",
    odpovedi: {
        1: "symetrie (symmetry)", 
        2: "reflexivita (reflexivity)", 
        3: "asociativita (associativity)", 
        4: "trojúhelníková nerovnost (triengle inequality)"
    },
    spravne: {1: 0, 2: 0, 3: 1, 4: 0}
});

otazky.push({
    otazka: "Globální pivoti jsou:",
    odpovedi: {
        1: "tvořeny za účelem vytváření indexu", 
        2: "dynamické objekty (příslušné různým částem indexu)", 
        3: "statické objekty (platné po celý život indexu)", 
        4: "dynamické objekty, ale v přůbehu jednoho dotazu fixovány jako statické"
    },
    spravne: {1: 0, 2: 0, 3: 1, 4: 0}
});

otazky.push({
    otazka: "Úplnost vyhledávání (retrieval recall) označuje:",
    odpovedi: {
        1: "pravděpodobnost, že objekt ve výsledku dotazu je relevantní", 
        2: "pravděpodobnost, že objekt relevantní k dotazu je v jeho výsledku", 
        3: "počet iterací při vyhledávání pomocí uživatelské zpětné vazby", 
        4: "stupeň 1 na stupnici 1-5 uživatelské spokojenosti s výsledkem dotazu"
    },
    spravne: {1: 0, 2: 1, 3: 0, 4: 0}
});

otazky.push({
    otazka: "Co je virtuální/implicitní graf v kontextu brouzdání (browsing) v multimédiích?",
    odpovedi: {
        1: "nejkratší cesta v grafu, kde uzly jsou multimédia a hrany podobnosti mezi nimi", 
        2: "série dotazů v multimediálním prostoru tvořící cestu virtuálním grafem", 
        3: "graf vytížení uzlů sítě hostující multimediální obsah, tvořené peer-to-peer architekturou", 
        4: "hiearchie multimediálních kategorií, modelovaná explicitně"
    },
    spravne: {1: 0, 2: 1, 3: 0, 4: 0}
});

otazky.push({
    otazka: "Booleovský model vyhledávání je založen na:",
    odpovedi: {
        1: "uspořádání dokumentů podle podobnosti k dotazu", 
        2: "binárních vektorech a Hammingově vzdálenosti", 
        3: "bitových řetězcích a operacích AND, OR a XOR", 
        4: "reprezentaci obsahu dokumentů množinou termů a na dotazování booleovskými výrazy a termy"
    },
    spravne: {1: 0, 2: 0, 3: 0, 4: 1}
});

otazky.push({
    otazka: "Co je explicitní graf v kontextu brouzdání (browsing) v multimédiích?",
    odpovedi: {
        1: "hiearchie multimediálních kategorií, modelovaná explicitně", 
        2: "graf tvořený uzly a hranami", 
        3: "graf sociálních komunit sdílející podobný multimediální obsah", 
        4: "série ad-hoc dotazů. tvořící řetěz"
    },
    spravne: {1: 1, 2: 0, 3: 0, 4: 0}
});

otazky.push({
    otazka: "Výpočet Earth mover&#039;s distance (EMD) má časovou složitost:",
    odpovedi: {
        1: "O(2^n)", 
        2: "O(n)", 
        3: "O(n^2)", 
        4: "O(n.log(n))"
    },
    spravne: {1: 1, 2: 0, 3: 0, 4: 0}
});

otazky.push({
    otazka: "Vektorový model vyhledávání je založen na:",
    odpovedi: {
        1: "binárních vektorech a Hammingově vzdálenosti", 
        2: "teorii fuzzy množin", 
        3: "vektorovém paralelismu jednotek GPU (v grafických kartách)", 
        4: "reprezentaci obsahu dokumentů a dotazů vektory, a vektorové míře sloužící jako podobnost"
    },
    spravne: {1: 0, 2: 0, 3: 0, 4: 1}
});

otazky.push({
    otazka: "Vektorový model vyhledávání je založen na:",
    odpovedi: {
        1: "fuzzy logice a teorii fuzzy množin", 
        2: "Booleovské logice a teorii kategorií", 
        3: "Booleovské algebře a teorii množin", 
        4: "geometrizaci vyhledávacího problému"
    },
    spravne: {1: 0, 2: 0, 3: 0, 4: 1}
});

otazky.push({
    otazka: "Mezi nevýhody LSI nepatří",
    odpovedi: {
        1: "drahé zpracování matice", 
        2: "redukce dimenze", 
        3: "těžká vyjádřitelnost konceptů", 
        4: "hustá matice"
    },
    spravne: {1: 0, 2: 1, 3: 0, 4: 0}
});

otazky.push({
    otazka: "Zrychlení v LSI modelu lze zajistit",
    odpovedi: {
        1: "invertovaným indexem a využitím pouze několika důležitých konceptů", 
        2: "invertovaným indexem", 
        3: "využitím pouze důležitých konceptů", 
        4: "invertovaným idnexem nebo využitím pouze několika důležitých konceptů"
    },
    spravne: {1: 0, 2: 0, 3: 1, 4: 0}
});

otazky.push({
    otazka: "Editační vzdálenost (edit distance) slouží k měření podobností:",
    odpovedi: {
        1: "vektorů, kde měří nejmenší tzv. „vektorový edit“", 
        2: "řetězů, kde spočítá nejmenší počet operací nutných ke konverzi jednoho řetězce do druhého", 
        3: "množin, kde spočítá nejmenší počet množinových operací nutných k transformaci jedné množiny do druhé", 
        4: "téhož co DTW (je to pouze jiný název pro DTW)"
    },
    spravne: {1: 0, 2: 1, 3: 0, 4: 0}
});

otazky.push({
    otazka: "Pro vektorový model dotazování neplatí, že:",
    odpovedi: {
        1: "obsahuje logické spojky", 
        2: "obsahuje váhy jednotlivých termů dotazu", 
        3: "uživatel může zadat váhy všech termů v dotazu shodně", 
        4: "výsledek je založen na frakvenci výskytu termů v dokumentu a dotazu"
    },
    spravne: {1: 1, 2: 0, 3: 0, 4: 0}
});

otazky.push({
    otazka: "Vážení podle tf-idf schématu:",
    odpovedi: {
        1: "je populární technika konstrukce vah termů ve vektorovém modelu", 
        2: "je implementace Booleovského modelu založená na prohledávání komprimovaného indexu", 
        3: "je kompresní metoda obrazu, založená na tzv. vážení regionů", 
        4: "technika konstrukce vah termů ve vektorovém modelu vhodná pouze pro malé dimenze"
    },
    spravne: {1: 1, 2: 0, 3: 0, 4: 0}
});

otazky.push({
    otazka: "Noty u podobnostního skóre monofóní melodie (monophonie melody) jsou modelovány:",
    odpovedi: {
        1: "svojí výškou", 
        2: "v 2D prostoru pomocí výšky a pozice v čase", 
        3: "v 2D prostoru pomocí výšky a pozice v čase a navíc používá váhy", 
        4: "pozicí v notovém zápisu"
    },
    spravne: {1: 0, 2: 0, 3: 1, 4: 0}
});

otazky.push({
    otazka: "Podobnostní přístup pro symbolicky reprezentované polyfonní melodie je aplikovatelný na:",
    odpovedi: {
        1: "pouze MIDI soubory", 
        2: "pouze WAV soubory", 
        3: "libovolný ze zde uvedených audio souborů", 
        4: "pouze MP3 soubory"
    },
    spravne: {1: 1, 2: 0, 3: 0, 4: 0}
});

otazky.push({
    otazka: "Standard MPEG7 popisuje:",
    odpovedi: {
        1: "definice deskriptorů a nástroje k jejich extrakci", 
        2: "definice deskriptorů bez popisu algoritmů jejich extrakce", 
        3: "definice deskriptorů a definice podobností nad nimi", 
        4: "definice deskriptorů a algoritmy pro jejich získání"
    },
    spravne: {1: 0, 2: 1, 3: 0, 4: 0}
});

otazky.push({
    otazka: "TV-modifikátor (TV-modifier) je:",
    odpovedi: {
        1: "striktně konkávní SP modifikátor, což zajišťuje vyšší hodnotu T-chyby (T-error)", 
        2: "striktně konvexní SP modifikátor, což zajišťuje vyšší hodnotu T-chyby (T-error)", 
        3: "striktně konkávní SP modifikátor, což zajišťuje nízkou hodnotu T-chyby (T-error)", 
        4: "striktně konvexní SP modifikátor, což zajišťuje nízkou hodnotu T-chyby (T-error)"
    },
    spravne: {1: 0, 2: 1, 3: 0, 4: 0}
});

otazky.push({
    otazka: "Termín Retrieval Efficiency znamená",
    odpovedi: {
        1: "efektivita vyhledávače ve smyslu rychlosti vyhledávání", 
        2: "efektivita vyhledávače ve smyslu úrovně prezentace výsledků", 
        3: "efektivita vyhledávače ve smyslu kvality ovládání GUI", 
        4: "efektivita vyhledávače ve smyslu kvality výsledku vyhledávání"
    },
    spravne: {1: 1, 2: 0, 3: 0, 4: 0}
});

otazky.push({
    otazka: "Vysoká vnitřní dimenze (intrinsic dimensionality) značí že:",
    odpovedi: {
        1: "data netvoří shluky (clustery) a tedy jsou špatně strukturovaná", 
        2: "data tvoří shluky a tedy jsou dobře indexovatelná", 
        3: "data netvoří shluky a tedy jsou dobře indexovatelná", 
        4: "datová sada je dobře strukturovaná, protože vnitřní dimenze odpovídá vnější"
    },
    spravne: {1: 1, 2: 0, 3: 0, 4: 0}
});

otazky.push({
    otazka: "Lower-bounding je:",
    odpovedi: {
        1: "odvození výpočetně levné metriky z výpočetně drahé nemetriky", 
        2: "mapování z metrického do vektorového prostoru", 
        3: "obecný mechanismus pro efektivní podobnostní vyhledávání", 
        4: "metoda redukce dimenze vektorového prostoru"
    },
    spravne: {1: 0, 2: 0, 3: 1, 4: 0}
});

otazky.push({
    otazka: "Podobnost zachovávající modifikátor (similarity preserving modifier) je:",
    odpovedi: {
        1: "rostoucí funkce f pro kterou f(0) = 0", 
        2: "klesající funkce f pro kterou f(0) &lt; 0", 
        3: "rostoucí funkce f pro kterou f(0) &lt; 0", 
        4: "klesající funkce f pro kterou f(0) = 0"
    },
    spravne: {1: 1, 2: 0, 3: 0, 4: 0}
});

otazky.push({
    otazka: "Uživatelská zpětná vazba (user relevance feedback) ve vyhledávačích znamená:",
    odpovedi: {
        1: "odeslání webového formuláře s popisem chyby", 
        2: "manuální vybírání relevantních objektů z databáze", 
        3: "označení korektnosti odpovědi uživatelem", 
        4: "vyhledávání několika dotazy najednou"
    },
    spravne: {1: 0, 2: 0, 3: 1, 4: 0}
});

otazky.push({
    otazka: "Termínem False dismissal (false drop) označujeme:",
    odpovedi: {
        1: "objekt, který se měl dostat do výsledku, ale není vůbec v databázi", 
        2: "duplicita objektu ve výsledku dotazu", 
        3: "objekt ve výsledku dotazu, který se tam neměl dostat", 
        4: "objekt v databázi, který se měl dostat do výsledku dotazu, ale nedostal"
    },
    spravne: {1: 0, 2: 0, 3: 0, 4: 1}
});

otazky.push({
    otazka: "Invertovaný index:",
    odpovedi: {
        1: "má řidší matici než index neinvertovaný", 
        2: "umožňuje určit zda dokument má být ve výsledku bez nutnosti projít celou matici", 
        3: "neobsahuje v matici všechny dokumenty", 
        4: "je uplatnitelný pouze ve vektorovém modelu vyhledávání"
    },
    spravne: {1: 0, 2: 1, 3: 0, 4: 0}
});

otazky.push({
    otazka: "Kvadratická forma (quadratic form distance, QFD) je vhotná pro modelování podobnosti na vektorech když:",
    odpovedi: {
        1: "počet dimenzí vektoru odpovídá druhé mocnině celého čísla", 
        2: "dimenze prostoru se předpokládají nekorelované, tj. nezávislé", 
        3: "dimenze prostoru se předpokládájí korelované, např. histogram na homogenní doméně", 
        4: "chceme podobnost modelovat zcela přesně"
    },
    spravne: {1: 0, 2: 0, 3: 1, 4: 0}
});

otazky.push({
    otazka: "Longest common subsequence (LCS) je výhodná , protože:",
    odpovedi: {
        1: "je výpočetně levnější než L<sub>p</sub>", 
        2: "představuje robustní zarovnání díky lokálnímu natahování/zkracování (time warp)", 
        3: "umožňuje lokální zarovnání, tj. zarovnání pouze podposloupností (subsequence)", 
        4: "je to opravdu podobnost, nikoliv vzdálenost"
    },
    spravne: {1: 0, 2: 0, 3: 1, 4: 0}
});

otazky.push({
    otazka: "Výpočet L<sub>p</sub>",
    odpovedi: {
        1: "O(pn<sup>2</sup>)", 
        2: "O(n<sup>2</sup>)", 
        3: "O(n)", 
        4: "O(nlogn)"
    },
    spravne: {1: 0, 2: 0, 3: 1, 4: 0}
});

otazky.push({
    otazka: "L<sub>p</sub> (Minkowského vzdálenosti):",
    odpovedi: {
        1: "je třída vektorových vzdáleností, které uvažují nezávislé dimenze", 
        2: "jsou obecně použitelné metriky", 
        3: "je třída vektorových vzdáleností, které uvažují vzájemně korelované dimenze", 
        4: "je třída řetězcových vzdáleností, sloužících ke globálnímu zarovnání sekvencí"
    },
    spravne: {1: 1, 2: 0, 3: 0, 4: 0}
});

otazky.push({
    otazka: "Dynamic time warping (DTW) je výhodná, protože:",
    odpovedi: {
        1: "není metrická narozdíl od L<sub>p</sub>", 
        2: "představuje robustní zarovnávání díky lokálnímu natahování/zkracování (time warp)", 
        3: "umožňuje lokální zarovnání, tj. zarovnání pouze podposloupností (subsequence)", 
        4: "je výpočetně levnější než L<sub>p</sub>"
    },
    spravne: {1: 0, 2: 1, 3: 0, 4: 0}
});

otazky.push({
    otazka: "Mezi typické vhodné vlastnosti pro popis obrázku nepatří:",
    odpovedi: {
        1: "invariance vůči zvětšení/zmenšení (scale)", 
        2: "invariance vůči posunu (translation)", 
        3: "invariance vůči kvantizaci (quantization)", 
        4: "invariance vůči rotaci (rotation)"
    },
    spravne: {1: 0, 2: 0, 3: 1, 4: 0}
});

otazky.push({
    otazka: "SURF je:",
    odpovedi: {
        1: "technika seqmentace obrazu na homogenní textury", 
        2: "algoritmus pro extrakci globálních vlastností z obrázku", 
        3: "detektor a deskriptor lokálních vlastností v obrázcích", 
        4: "metoda rozpoznávání obrázku založena na Fourierově transformaci (FT)"
    },
    spravne: {1: 0, 2: 0, 3: 1, 4: 0}
});

otazky.push({
    otazka: "Extrakce vlastností (feature extraction) je:",
    odpovedi: {
        1: "model a procedura tvorby zjednodušené reprezentace multimediálního objektu, použíté pro vyhledávání", 
        2: "výběr několika vlastností multimédia za účelem jeho komprese", 
        3: "výběr pouze takových vlastností mutimédia, které uživatel označí zpětnou vazbou (relevance feedback)", 
        4: "většinou diskrétní Fourierova transformace (DFT)"
    },
    spravne: {1: 1, 2: 0, 3: 0, 4: 0}
});

otazky.push({
    otazka: "PM-tree obohacuje M-tree o:",
    odpovedi: {
        1: "globální pivoty, čímž zvětšuje regiony a tedy zlepšuje filtrování", 
        2: "globální pivoty, čímž zmenšuje regiony a tedy zlepšuje filtrování", 
        3: "lokální pivoty, čímž zmenšuje regiony a tedy zlepšuje filtrování", 
        4: "lokální pivoty, čímž zvětšuje regiony a tedy zlepšuje filtrování"
    },
    spravne: {1: 0, 2: 1, 3: 0, 4: 0}
});

otazky.push({
    otazka: "Vnitřní dimenze (intrinsic dimensionality) je:",
    odpovedi: {
        1: "typ fraktální dimenze na metrickém prostoru", 
        2: "průměrný poloměr shluků identifikovaných v databázi", 
        3: "odhad dimenze vektorového L<sub>p</sub>", 
        4: " statistický ukazatel odvozený z distribuce vzdáleností v databázi, sloužící jako indikátor indexovatelnosti databáze pod danou metirkou"
    },
    spravne: {1: 0, 2: 0, 3: 0, 4: 1}
});

otazky.push({
    otazka: "Základní jednotkou nákladů v rámci metrického indexování je:",
    odpovedi: {
        1: "přístup na disk", 
        2: "realtime", 
        3: "počet výpočtů vzdálenostní metriky", 
        4: "přístup do paměti"
    },
    spravne: {1: 0, 2: 0, 3: 1, 4: 0}
});

otazky.push({
    otazka: "TG-modifikátor (TG-modifier) je:",
    odpovedi: {
        1: "striktně konvexní SP modifikátor, což zajišťuje vyšší hodnotu T-chyby (T-error)", 
        2: "striktně konkávní SP modifikátor, což zajišťuje vyšší hodnotu T-chyby (T-error)", 
        3: "striktně konvexní SP modifikátor, což zajišťuje nízkou hodnotu T-chyby (T-error)", 
        4: "striktně konkávní SP modifikátor, což zajišťuje nízkou hodnotu T-chyby (T-error)"
    },
    spravne: {1: 0, 2: 0, 3: 0, 4: 1}
});

otazky.push({
    otazka: "Výhody Booleovského modelu:",
    odpovedi: {
        1: "jednoduchost, rozšiřitelnost a efektivní implementace", 
        2: "velmi efektivní model, přesnost a úplnost se blíží 100", 
        3: "uspořádání výsledku, dotaz příkladem, snadný relevance feedback", 
        4: "lze snadno kontrolovat velikost výsledku dotazu"
    },
    spravne: {1: 1, 2: 0, 3: 0, 4: 0}
});

otazky.push({
    otazka: "Nevýhody Booleovského modelu jsou:",
    odpovedi: {
        1: "Složitost modelu a neefektivní implementace", 
        2: "Neuspořádanost výsledku dotazu", 
        3: "Nemožnost použití invertovaného indexu", 
        4: "Reprezentace dokumentu indexem"
    },
    spravne: {1: 0, 2: 1, 3: 0, 4: 0}
});

otazky.push({
    otazka: "Mezi nevýhody Booleovského modelu dotazování nepatří:",
    odpovedi: {
        1: "omezená vyjadřovací schopnost", 
        2: "setřídění výstupu ", 
        3: "efektivita vyhodnocení řídkých dotazů", 
        4: "regulace počtu vrázených dokumentů"
    },
    spravne: {1: 0, 2: 0, 3: 1, 4: 0}
});

otazky.push({
    otazka: "Term je:",
    odpovedi: {
        1: "Ukončovací znak dokumentu (CR LF)", 
        2: "Oddělovač tokenů", 
        3: "Stop slovo", 
        4: "Slovo (případně fráze), vyskytující se v dokumentu"
    },
    spravne: {1: 0, 2: 0, 3: 0, 4: 1}
});

otazky.push({
    otazka: "Server pro ukládání a sdílení multimédií (hosting server):",
    odpovedi: {
        1: "podporuje vyhledávání multimédií na základě obsahu nebo textového popisu", 
        2: "vyhledává pouze webové stránky, na kterých jsou videa a obrázky", 
        3: "vždy obsahuje jak uložení (hostování) multimédií, tak vyhledávací funkce", 
        4: "podporuje vyhledávání multimédií pouze na základě textového popisu"
    },
    spravne: {1: 0, 2: 0, 3: 0, 4: 1}
});

otazky.push({
    otazka: "Invertovaný index je u boolevského modelu dotazování obzvláště efektivní pro:",
    odpovedi: {
        1: "sady obsahující málo dokumentů", 
        2: "dotazy obsahující mnoho termů", 
        3: "dotazy s málo termy", 
        4: "dotazy neobsahující negaci"
    },
    spravne: {1: 0, 2: 0, 3: 1, 4: 0}
});

otazky.push({
    otazka: "Podobnostní operátor narozdíl od dotazu",
    odpovedi: {
        1: "je často parametrizovaný a vrací velikou odpověď", 
        2: "není často parametrizovaný a vrací velkou odpověď", 
        3: "je často parametrizovaný a vrací malou odpověď", 
        4: "není často parametrizovaný a vrací malou odpověď"
    },
    spravne: {1: 0, 2: 1, 3: 0, 4: 0}
});

otazky.push({
    otazka: "Dotaz na k nejbližších sousedů (k nearest neighbors query, kNN):",
    odpovedi: {
        1: "vybere předem neurčený počet objektů do vzdálenosti k", 
        2: "vybere k nejpodobnějších objektů k objektu dotazu", 
        3: "se vyhodnocuje top-k operátorem", 
        4: "je omezen na euklidovský vektorový prostor"
    },
    spravne: {1: 0, 2: 1, 3: 0, 4: 0}
});

otazky.push({
    otazka: "kNN dotaz (range query)",
    odpovedi: {
        1: "je vhodný pro dotazování nad objekty u kterých uživatel zná sémantiku extrahovaných vektorů a sémantiku podobnostní funkce", 
        2: "je vhodný pro dotazování nad objekty u kterých uživatel nezná sémantiku extrahovaných vektorů", 
        3: "je vhodný pro dotazování nad objekty u kterých uživatel zná sémantiku extrahovaných vektorů", 
        4: "je vhodný pro dotazování nad objekty u kterách uživatel nezná sémantiku extrahovaných vektorů a sémantiku podobnostní funkce"
    },
    spravne: {1: 0, 2: 0, 3: 0, 4: 1}
});

otazky.push({
    otazka: "Content-based retrieval označuje:",
    odpovedi: {
        1: "vyhledávání struktury v obsahu multimédia", 
        2: "získávání dat filtrací webu", 
        3: "vyhledávání přímo podle obsahu multimédia", 
        4: "vyhledávání podle textového popisu multimédia"
    },
    spravne: {1: 0, 2: 0, 3: 1, 4: 0}
});

otazky.push({
    otazka: "Výpočet Hausdorff distance má časovou složitost:",
    odpovedi: {
        1: "O(nlogn)", 
        2: "O(n<sup>2</sup>)", 
        3: "O(n<sup>2</sup>)O(n2).O(d), kde O(d) je složitost ground distance", 
        4: "O(n)"
    },
    spravne: {1: 0, 2: 0, 3: 1, 4: 0}
});

otazky.push({
    otazka: "Hausdorff distance je:",
    odpovedi: {
        1: "obecná množinová vzdálenost, kde pro podobnost elementů množin se využívá tzv. ground distance", 
        2: "vzdálenost měřící (normovanou) velikost průniku dvou množin", 
        3: "obecná vektorová vzdálenost, kde pro podobnost soužadnic vektorů se používá jednoduchá norma |.|<sub>2</sub>", 
        4: "vzdálenost bodů ve vektorovém prostoru podle tzv. Hausdorffovy neriemannovské geometrie"
    },
    spravne: {1: 1, 2: 0, 3: 0, 4: 0}
});

otazky.push({
    otazka: "Výpočet kvadratické formy (quadratic form distance, QDF) má časovou složitost:",
    odpovedi: {
        1: "O(n<sup>2</sup>)", 
        2: "O(nlogn)", 
        3: "O(n)", 
        4: "O(n<sup>3</sup>)"
    },
    spravne: {1: 1, 2: 0, 3: 0, 4: 0}
});

otazky.push({
    otazka: "Keyframe je:",
    odpovedi: {
        1: "základní prvek pro konstrukci video deskriptoru", 
        2: "nejreprezentativnější obrázek z video klipu, sumarizující jeho obsah", 
        3: "reprezentativní obrázek z kolekce obrázků", 
        4: "obraz reprezentující střed shluku obrázků"
    },
    spravne: {1: 1, 2: 0, 3: 0, 4: 0}
});

otazky.push({
    otazka: "MPEG7 audio definuje:",
    odpovedi: {
        1: "pouze nízkoúrovňové (low-level) diskriptory", 
        2: "nízko, středně (mid-level) a vysokoúrovňové deskriptory", 
        3: "pouze vysokoúrovňové (high-level) deskriptory", 
        4: "nízko i vysoko úrovňové deskriptory"
    },
    spravne: {1: 0, 2: 0, 3: 0, 4: 1}
});

otazky.push({
    otazka: "Zájmový bod (interest point) je:",
    odpovedi: {
        1: "bod/region v obraze, který je dobře definovaný, nese informaci o svém okolí a je stabilní", 
        2: "bodové hodnocení obrázku uživatelem", 
        3: "každý pixel na hraně segmentu (v segmentovaném obraze)", 
        4: "bod/region v obraze, který je zajímavý pro uživatele "
    },
    spravne: {1: 1, 2: 0, 3: 0, 4: 0}
});

otazky.push({
    otazka: "Metrický model podobnostního vyhledávání je:",
    odpovedi: {
        1: "obecný model indexování čehokoliv na internetu, co lze vyhledat podle podobnosti", 
        2: "založen na univerzu (množině) deskriptorů a metrické vzdálenosti sloužící jako podobnost deskriptorů", 
        3: "množina metrických vzdáleností pro podobnostní vyhledávání multimédií", 
        4: "speciální případ vektorového podobnostního modelu"
    },
    spravne: {1: 0, 2: 1, 3: 0, 4: 0}
});

otazky.push({
    otazka: "Termín Retrieval efficiency znamená:",
    odpovedi: {
        1: "Míru úspornosti reprezentace dotazu", 
        2: "Míru výkonu, měřící rychlost odezvy dotazu", 
        3: "Míru kvality, měřící uživatelskou spokojenost s výsledkem dotazu", 
        4: "Míru rychlosti, s jakou uživatel formuluje dotaz"
    },
    spravne: {1: 0, 2: 1, 3: 0, 4: 0}
});

otazky.push({
    otazka: "PAC jsou:",
    odpovedi: {
        1: "pravděpodobně podobnostní dotazy",
        2: "permanentně aproximativní dotazy",
        3: "pravděpodobně přibližně korektní dotazy",
        4: "nic takového neexistuje"
    },
    spravne: {1: 0, 2: 0, 3: 1, 4: 0}
});

otazky.push({
    otazka: "Metoda FastMap",
    odpovedi: {
        1: "nepoužívá kosinovu a Pythagorovu větu",
        2: "je rychlá metoda používající náhodné projekce do vektorového prostoru",
        3: "je metoda mapování obecných metrických dat do euklidovského prostoru",
        4: "je omezena pouze na mapování dat v euklidovském prostoru"
    },
    spravne: {1: 0, 2: 0, 3: 1, 4: 0}
});

otazky.push({
    otazka: "Aproximativní vyhledávání je výhodné, když",
    odpovedi: {
        1: "neznáme přesnou sémantiku vzdálenostní funkce",
        2: "chceme výrazně rychlejší vyhledávání i za cenu velkého snížení přesnosti vyhledávání",
        3: "známe přesnou sémantiku vzdálenostní funkce",
        4: "chceme výrazně rychlejší vyhledávání za cenu malého snížení přesnosti vyhledávání"
    },
    spravne: {1: 0, 2: 0, 3: 0, 4: 1}
});