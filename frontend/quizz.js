const questions = ["Le réchauffement climatique concerne l’augmentation du niveau des eaux",
    "Depuis les années 1900 la température annuelle était de 11,44°C à combien pensez-vous qu'était la température annuelle en 2020 ?",
    "L’Agence spatiale européenne mesure aujourd’hui la température au niveau du sol et non plus dans l’air, ce qui crée des faux records de chaleur.",
    "En 2021, quel pourcentage représente les transports de voyageurs en France?",
    "La mortalité causé par la production électrique à base de pétrole est environ 500 fois plus grande que celle causé par la production électrique à base d’éolien, nucléaire ou solaire, a production égale.",
    "D’après vous, parmi les transports terrestres quel est le mode de transport qui consomme le moins d’énergie ?",
    "Les polluants atmosphériques diminuent l'espérance de vie ?",
    "Les épisodes de grand froid, comme le blizzard qui s’est abattu pour la première fois en trente ans sur Los Angeles en février 2023 prouvent que la thèse du réchauffement climatique n’existe pas.",
    "Le GIEC serait un collectif idéologique, qui n’hésite pas à truquer les chiffres pour montrer un réchauffement artificiel de la planète.",
    "Quelle est la consommation moyenne par véhicule en 2021 ?",
    "Les océans en absorbent naturellement une grande partie du CO2.",
    "Les températures observées depuis 1850 sont les plus hautes depuis :",
    "Parmi ces options, qui est négativement impactée par les émissions de CO2 ? (plusieurs choix possibles ! )",
    "Que signifie le sigle GIEC ?",
    "Les voitures électriques polluent plus que les voitures thermiques",
    "Quelle masse de déchets nucléaires haute activité est produite en moyenne en France chaque année ?",
    "Les scientifiques estiment qu’il faisait déjà très chaud à la fin du XIXᵉ siècle, ce qui prouverait selon eux l’absence de lien entre réchauffement et activité industrielle humaine.",
    "Savez vous quel est l'impact des transports routiers sur les émissions de gaz à effet de serre ?"
];
const rep = [[2, "Vrai", "Faux"], [4, "11,20°C", "11,44°C", "12,36°C", "13,60°C"], [2, "Vrai", "Faux"], [3, "59,7% de la consommation totale de l’énergie des transports", "40.3 % de la consommation totale de l’énergie des transports", "91,9% de la consommation totale de l’énergie des transports"], [3, "Faux, c'est plus", "Vrai", "Faux, c'est moins"], [4, "La Moto", "L'avion", "Le train", "Les utilitaires lourds"], [2, "Vrai", "Faux"], [2, "Vrai", "Faux"], [2, "Vrai", "Faux"], [3, "11 Tonnes eq CO2", "14 tonnes eq CO2", "8 tonnes eq CO2"], [2, "Vrai", "Faux"], [4, "Aujourd'hui", "Le debut de la decenie", "Le debut du millénaire", "Les temperatures sont en baisse"], [3, "La circulation des courants marins", "Les mollusques", "Les moyennes de températures sur Terre"], [4, "Groupe d’Intervention Écologique Cataclysmique", "Groupe  d’Innovation pour l'Écologie et le Climat", "Groupe d’experts Intergouvernemental sur l’Evolution du Climat", "Ca ne veut rien dire"], [3, "Oui", "Non", "Ca dépend"], [3, "60 kg par habitants soit l’équivalent en volume de 2O porte container rempli par ans", "3 kg par habitants soit l'équivalent en volume d’un porte container rempli par  ans", "5g par habitants, soit l’équivalent en volume de  4 container au total par ans"], [2, "Vrai", "Faux"],[3,"24%","33%","42%"]]

const sol = ["1","4","2","1","1","3","1","2","2","1","1","3","1, 2, 3","3","3","3","2","3"];

const explique = ["Le réchauffement climatique ne concerne que l’augmentation des températures. Ce n’est pas la fréquence des catastrophes naturelles qui augmente avec le temps, c’est juste la violence",
"Une augmentation de plus de deux degrée est considérable !",
"La publication virale vient du Climate Science Journal, une organisation climatosceptique britannique. L’ESA a bien publié le 13 juillet une carte des fortes chaleurs dans le sud de l’Europe basée sur les températures au sol, elle n’y annonce pas de nouveaux records ni de modification de sa méthode. L’agence y évoque d’ailleurs à la fois la température de surface de la terre et la température de l’air.",
"Le transport individuel constitue l'essentiel de la consommation d'énergie dans les transports de voyageurs (91,9 %). Avec 257,9 TWh, sa consommation d'énergie croît par rapport à 2020 (+ 6,2 %), sans toutefois retrouver son niveau d'avant-crise (- 11,3 % par rapport à 2019).",
"A production égale, le pétrole tue environ en fait 610 fois plus que le nucléaire, l’éolien ou le solaire ! Ces chiffres étonnant s'expliquent par la mortalité due à la pollution causé par les centrales thermiques : elle peut causer de nombreuses maladies notamment respiratoires, qui finissent par causer la mort. Note : la mortalité lié au nucléaire inclus les accidents de tchernobyl et fukushima",
"Le train permet de déplacer plus des personnes pour moins d'énergie",
"Ils peuvent entraîner des difficultés respiratoires, notamment aux individus qui ont une santé fragile.",
"Cet argument se base sur une confusion très fréquente entre météo et climat, soit l’évolution des phénomènes atmosphériques à court terme d’un côté et à long terme de l’autre. Qu’il fasse très froid un mardi n’empêche pas que, en moyenne, le mois, l’année ou la décennie aient été largement plus chauds que les précédents. En 2022 en France, par exemple, 21 jours ont été anormalement froids, contre 125 jours anormalement chauds.",
"En 2010, après une étude détaillée de toutes les assertions conspirationnistes basées sur ces correspondances professionnelles,une commission d’enquête indépendante – The Independent Climate Change Email Review – relève qu’elle n’a trouvé « aucune preuve de conduite qui puisse affaiblir les conclusions des rapports du GIEC ». Elle convient que les scientifiques du CRU auraient pu, voire dû être plus transparents, mais affirme que « leur rigueur et leur honnêteté n’est pas mise en doute. »",
"Cet quantité de CO2 n'est pas négligable",
"C’est vrai, les océans « consomment » une partie du CO₂ présent dans l’atmosphère. On estime que les océans absorbent 30% des émissions humaines de gaz carbonique. Mais contrairement à ce que montre une étude très citée par les climatosceptiques, le phénomène a ses limites. De plus la capacité d’absorption des océans est elle-même menacée par le changement climatique : comme l’explique une étude française en océanographie de 2015, « une augmentation de 2 °C ou 3 °C de la température des eaux de surface diminue la solubilité du CO₂ de quelques pourcents, et donc la capacité de l’océan à absorber le gaz carbonique ».",
"...",
"Et oui, il y avais un piege : toutes les reponses etaient correctes",
"Pas plus d'explications a donner",
"Selon le pays et notamment sa source d'énergie, ainsi que la durée d’utilisation, une voiture électrique peut être plus polluante qu’une voiture thermique. En effet, les voitures électriques sont plus polluantes à fabriquer mais produisent beaucoup moins de CO2 à l'usage. Selon la source d'énergie, elles deviennent plus ou moins rapidement meilleures pour l’environnement. Par exemple, en Norvège, qui possède une énergie très décarbonée, il suffit de rouler seulement 13 500 km avant que sa voiture électrique pollue moins qu’une voiture thermique équivalente. En pologne, ou une grande partie de l’énergie provient du charbon, il faut rouler environ 130 000 km avant qu’elle soient moins polluante qu’une thermique.",
"Aussi étonnant que cela puisse sembler, en moyenne, 5 g (le poids d’une pièce de 20 centimes)  de déchets nucléaires de haute activité par habitant sont produits en France chaque année. En effet, 96% du combustible nucléaire est recyclé en nouveau combustible, et la très grande majorité des déchets nucléaires sont des déchets de faible activité. De plus, près de la moitié de la production de déchets nucléaire ne vient pas de la production d’énergie mais des autres secteurs, telles que la médecine nucléaire ou certains procédés industriels.",
"Premièrement, la température moyenne de 37°C entre mi-août et mi-septembre 1895 à Paris est fausse. Entre le 15 août et le 15 septembre 1895, celle-ci était de 20,3°C, selon les relevés de la station de Paris Montsouris communiqués par Météo-France. Même en faisant la moyenne des températures maximales de chaque journée dans la capitale : celle-ci n’était que de 27,1°C. Seule une journée semble se rapprocher des 37°C mentionnés : le 7 septembre 1895, où la température maximale a été de 36,2°C.",
"Et oui !"
]

let indice = 0;
display(indice);

function next() {
    if (indice < (rep.length - 1)) {
        indice++;
        erase();
        display(indice);
    }
    else {
        erase();
        document.getElementById("qText").textContent = "Vous avez atteint la fin du quizz !";
        document.getElementById("soluce").textContent = "Solution a la question précedente : " + soluce[i-1];
    }

}
function erase() {
    document.getElementById("questionNum").textContent = "";

    document.getElementById("qText").textContent = "";

    for (let step = 1; step < 5; step++) {
        var test = "rep" + step;
        document.getElementById(test).textContent = "";
    }
}

function display(i) {
    document.getElementById("questionNum").textContent = i + 1;

    document.getElementById("qText").textContent = questions[i];

    

    for (let step = 1; step < rep[i][0] + 1; step++) {
        var test = "rep" + step;
        document.getElementById(test).textContent = step + ") "+ rep[i][step];
    }
    if (i > 0) {
        document.getElementById("soluce").textContent = "Solution a la question précedente : " + sol[i-1];
        document.getElementById("explique").textContent = "Explication: " + explique[i-1];
    }
    

}

