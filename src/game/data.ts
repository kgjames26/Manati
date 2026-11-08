export type KidId = string;
export type BirthDate = readonly [year:number,month:number,day:number];
export function ageFromBirthDate([year,month,day]:BirthDate,now=new Date()):number{
 const beforeBirthday=now.getMonth()+1<month||(now.getMonth()+1===month&&now.getDate()<day);
 return now.getFullYear()-year-(beforeBirthday?1:0);
}
export type Kid={id:KidId;name:string;birthDate:BirthDate;age:number;color:string;hairColor:string;skinColor:string;glasses:boolean;sex:'garçon'|'fille';relation?:string;style:string;height:number;speed:number;jump:number;heart:number;strength:number;heroCooldown:number;}
type KidSeed=Omit<Kid,'age'>;
const kidSeeds:KidSeed[]=[
 {id:'nathan',name:'Nathan',birthDate:[2022,9,9],color:'#ffb52e',hairColor:'#e6bd57',skinColor:'#f2c4a0',glasses:false,sex:'garçon',relation:'Le petit frère',style:'Sweat bleu ciel et baskets jaunes',height:.72,speed:4.3,jump:7.3,heart:6,strength:.9,heroCooldown:13},
 {id:'timeo',name:'Timéo',birthDate:[2017,3,15],color:'#42d9ff',hairColor:'#d9ad44',skinColor:'#efc29f',glasses:true,sex:'garçon',relation:'Le grand frère',style:'Veste turquoise, lunettes rondes',height:.88,speed:5.25,jump:7.8,heart:5,strength:1.05,heroCooldown:12},
 {id:'nicolas',name:'Ludo',birthDate:[1987,6,25],color:'#b68cff',hairColor:'#503522',skinColor:'#d9a17d',glasses:false,sex:'garçon',relation:'Le père',style:'Veste urbaine bordeaux et jean',height:1.12,speed:5.8,jump:8.3,heart:4,strength:1.28,heroCooldown:15},
 {id:'leni',name:'Leni',birthDate:[2015,1,1],color:'#76c8ff',hairColor:'#e6c15c',skinColor:'#f1c5a1',glasses:false,sex:'garçon',style:'Blouson bleu et pantalon graphite',height:1.02,speed:5.3,jump:8.1,heart:5,strength:1.08,heroCooldown:12},
 {id:'rose',name:'Rose',birthDate:[2019,1,1],color:'#ff91b4',hairColor:'#c84b32',skinColor:'#f4c6a7',glasses:false,sex:'fille',style:'Veste rose framboise et jupe-short',height:.82,speed:4.9,jump:8.4,heart:6,strength:.94,heroCooldown:11},
 {id:'olivier',name:'Olivier',birthDate:[1989,1,1],color:'#55cba6',hairColor:'#493324',skinColor:'#d6a07a',glasses:false,sex:'garçon',style:'Chemise vert sapin, pantalon cargo',height:1.1,speed:5.45,jump:7.7,heart:5,strength:1.3,heroCooldown:14},
 {id:'maya',name:'Maya',birthDate:[2018,4,12],color:'#c68aff',hairColor:'#33251f',skinColor:'#9f6547',glasses:false,sex:'fille',style:'Sweat prune et baskets menthe',height:.83,speed:5.1,jump:8.8,heart:5,strength:.91,heroCooldown:10},
 {id:'sami',name:'Sami',birthDate:[2014,8,3],color:'#4fd4ce',hairColor:'#211b19',skinColor:'#a96c4d',glasses:true,sex:'garçon',style:'Veste sportive turquoise',height:1.04,speed:5.7,jump:8.1,heart:5,strength:1.12,heroCooldown:13},
 {id:'ines',name:'Inès',birthDate:[2017,2,19],color:'#f38b67',hairColor:'#4c2d24',skinColor:'#f0c5a5',glasses:false,sex:'fille',style:'Gilet corail et pantalon marine',height:.87,speed:5.2,jump:8.5,heart:5,strength:1.02,heroCooldown:11},
 {id:'adam',name:'Adam',birthDate:[2020,11,5],color:'#ffc45d',hairColor:'#65472c',skinColor:'#e1ae88',glasses:false,sex:'garçon',style:'Sweat soleil et short confortable',height:.76,speed:4.6,jump:8.2,heart:6,strength:.92,heroCooldown:12},
 {id:'zoe',name:'Zoé',birthDate:[2016,5,23],color:'#ff79a8',hairColor:'#e0b84d',skinColor:'#f7d4b2',glasses:true,sex:'fille',style:'Veste rose vif et legging',height:.92,speed:5.4,jump:8.7,heart:5,strength:.97,heroCooldown:10},
 {id:'youssef',name:'Youssef',birthDate:[2013,7,18],color:'#6e9eff',hairColor:'#211b18',skinColor:'#75472f',glasses:false,sex:'garçon',style:'Veste cobalt et pantalon noir',height:1.07,speed:5.8,jump:8.2,heart:5,strength:1.17,heroCooldown:14},
 {id:'chloe',name:'Chloé',birthDate:[2021,3,8],color:'#f5a8d3',hairColor:'#c65a3e',skinColor:'#f1c4a1',glasses:false,sex:'fille',style:'Cardigan lilas et baskets blanches',height:.7,speed:4.5,jump:7.9,heart:6,strength:.86,heroCooldown:10},
 {id:'elias',name:'Elias',birthDate:[2011,10,2],color:'#60c2a4',hairColor:'#3a2b20',skinColor:'#c88b64',glasses:false,sex:'garçon',style:'Blouson kaki léger et jean',height:1.13,speed:5.65,jump:8.5,heart:5,strength:1.23,heroCooldown:13},
 {id:'aya',name:'Aya',birthDate:[2016,12,6],color:'#d99aff',hairColor:'#171516',skinColor:'#8d5039',glasses:false,sex:'fille',style:'Hoodie violet et pantalon large',height:.91,speed:5.35,jump:8.6,heart:5,strength:1.03,heroCooldown:11},
 {id:'hugo',name:'Hugo',birthDate:[2010,6,14],color:'#ff875d',hairColor:'#c49b55',skinColor:'#f0c8a5',glasses:false,sex:'garçon',style:'Veste orange et baskets montantes',height:1.15,speed:5.9,jump:8.4,heart:4,strength:1.26,heroCooldown:15},
 {id:'lina',name:'Lina',birthDate:[2012,9,29],color:'#ed78b6',hairColor:'#241d1a',skinColor:'#bd805f',glasses:true,sex:'fille',style:'Veste magenta et pantalon anthracite',height:1.08,speed:5.5,jump:8.9,heart:5,strength:1.09,heroCooldown:10},
 {id:'noe',name:'Noé',birthDate:[2018,1,25],color:'#82d87a',hairColor:'#78502f',skinColor:'#e7b68d',glasses:false,sex:'garçon',style:'Sweat vert feuille et short bleu',height:.84,speed:5,jump:8.3,heart:6,strength:.95,heroCooldown:12},
 {id:'jade',name:'Jade',birthDate:[2013,4,4],color:'#53d4b1',hairColor:'#572d23',skinColor:'#f3d1b1',glasses:false,sex:'fille',style:'Veste menthe et jean bleu',height:1.04,speed:5.45,jump:8.6,heart:5,strength:1.08,heroCooldown:11},
 {id:'malo',name:'Malo',birthDate:[2019,8,17],color:'#ffa848',hairColor:'#b77d3d',skinColor:'#f2c19a',glasses:false,sex:'garçon',style:'Gilet caramel et baskets vertes',height:.79,speed:4.8,jump:8.1,heart:6,strength:.9,heroCooldown:13},
 {id:'amara',name:'Amara',birthDate:[2011,2,11],color:'#a987ff',hairColor:'#211716',skinColor:'#573526',glasses:false,sex:'fille',style:'Veste prune et pantalon sport',height:1.12,speed:5.7,jump:8.8,heart:5,strength:1.2,heroCooldown:10},
 {id:'lucas',name:'Lucas',birthDate:[2009,12,21],color:'#5dbdff',hairColor:'#55412d',skinColor:'#e4b58f',glasses:true,sex:'garçon',style:'Bomber bleu acier et baskets',height:1.17,speed:5.75,jump:8.2,heart:4,strength:1.3,heroCooldown:15},
 {id:'nina',name:'Nina',birthDate:[2015,7,7],color:'#ff7080',hairColor:'#a64230',skinColor:'#edbb98',glasses:false,sex:'fille',style:'Veste rouge cerise et jupe-short',height:.97,speed:5.3,jump:8.7,heart:5,strength:1.04,heroCooldown:10},
 {id:'malik',name:'Malik',birthDate:[2012,3,2],color:'#e1bb5c',hairColor:'#181616',skinColor:'#3e2924',glasses:false,sex:'garçon',style:'Veste jaune sable et pantalon cargo',height:1.09,speed:5.55,jump:8.4,heart:5,strength:1.2,heroCooldown:14},
 {id:'louise',name:'Louise',birthDate:[2014,11,16],color:'#f381ba',hairColor:'#a66b3a',skinColor:'#f4d2b2',glasses:true,sex:'fille',style:'Cardigan rose et pantalon prune',height:1.03,speed:5.2,jump:8.5,heart:5,strength:1.02,heroCooldown:10},
 {id:'enzo',name:'Enzo',birthDate:[2017,6,30],color:'#66d2e9',hairColor:'#34231c',skinColor:'#a96b4f',glasses:false,sex:'garçon',style:'Hoodie bleu glacier et pantalon noir',height:.9,speed:5.25,jump:8.25,heart:5,strength:1.06,heroCooldown:12},
 {id:'sacha',name:'Sacha',birthDate:[2010,1,10],color:'#9ec772',hairColor:'#b18a53',skinColor:'#f1c6a4',glasses:false,sex:'garçon',style:'Blouson sauge et baskets bordeaux',height:1.14,speed:5.8,jump:8.1,heart:5,strength:1.24,heroCooldown:13}
];
export const kids:Kid[]=kidSeeds.map(seed=>({...seed,get age(){return ageFromBirthDate(seed.birthDate)}}));
export const specialCooldown:Record<SuitId,number>={arachnid:4,armored:5,titan:6.2,night:3.5,solar:4.8,ocean:5.3,claw:4.2,thunder:5.4,wonder:4.2,flash:3.8,antman:5.2,psychic:4.6};
export type SuitId = 'arachnid'|'armored'|'titan'|'night'|'solar'|'ocean'|'claw'|'thunder'|'wonder'|'flash'|'antman'|'psychic';
export type HeroId = 'web'|'armor'|'giant'|'night'|'solar'|'ocean'|'claw'|'thunder'|'wonder'|'flash'|'antman'|'psychic';
export const suits = [
 {id:'arachnid' as const,name:'Spider-Man',hero:'web' as const,color:'#e94751',accent:'#1d2e64',power:'Bond propulsé, toile qui immobilise et attire les Zorks'},
 {id:'armored' as const,name:'Iron Man',hero:'armor' as const,color:'#d9443e',accent:'#f0bd55',power:'Propulseurs ascendants, tir répulseur et blindage bref'},
 {id:'titan' as const,name:'Hulk',hero:'giant' as const,color:'#3cbd72',accent:'#6530a1',power:'Super-saut vertical, puis onde de choc au sol'},
 {id:'night' as const,name:'Batman',hero:'night' as const,color:'#354d7a',accent:'#f4cf60',power:'Batarang à distance, bond et descente ralentie'},
 {id:'solar' as const,name:'Superman',hero:'solar' as const,color:'#2868c8',accent:'#e74d53',power:'Rayon thermique perforant et impulsion de vol'},
 {id:'ocean' as const,name:'Aquaman',hero:'ocean' as const,color:'#178fc2',accent:'#f5c648',power:'Ruée aquatique, vague offensive et petit envol'},
 {id:'claw' as const,name:'Wolverine',hero:'claw' as const,color:'#e5b43e',accent:'#263e65',power:'Ruée bondissante et frappe de griffes'},
 {id:'thunder' as const,name:'Thor',hero:'thunder' as const,color:'#3678bd',accent:'#f2c653',power:'Mjolnir lancé et super coup : tempête de foudre'},
 {id:'wonder' as const,name:'Wonder Woman',hero:'wonder' as const,color:'#bd3749',accent:'#f3c755',power:'Lasso doré : fouet précis, capture et grand tourbillon'},
 {id:'flash' as const,name:'Flash',hero:'flash' as const,color:'#dc3c3a',accent:'#ffe66c',power:'Éclair-éclair : frappe éclair qui traverse puis revient'},
 {id:'antman' as const,name:'Ant-Man',hero:'antman' as const,color:'#a8303a',accent:'#e7c47b',power:'Change de taille : 50 % pour se faufiler, 300 % pour écraser'},
 {id:'psychic' as const,name:'Sans costume',hero:'psychic' as const,color:'#43b8bc',accent:'#b69aff',power:'Télépathie : pensée guidée, vague mentale et confusion des Zorks'}
];
export type Level = {id:number;act:number;boss:boolean;name:string;biome:string;length:number;platforms:number;enemies:number;gaps:number;color:string;story:string};
const names=['Centre-ville','Le vieux port','Les toits du quartier','La grande avenue','Le parc urbain','La gare centrale','Le quartier des docks','Les ruelles anciennes','Le pont de la rivière','La place des héros','Le métro abandonné','Le boulevard final'];
const biomes=['Bruxelles','Paris','Londres','New York','Tokyo','Rio de Janeiro','Rome','Sydney','Le Caire','Barcelone','Montréal','Amsterdam'];
export const actNames=['Le signal des étoiles','Les villes assiégées','Le réseau souterrain','Les toits en feu','La riposte des gardiens','La faille Zork','La dernière ligne','Le ciel de la Terre'];
export const actStories=['Un signal venu de l’espace attire les Zorks vers les grandes villes. Ludo, leur père, accompagne Nathan et Timéo pour suivre sa trace et affronter leur premier chef.','Les envahisseurs prennent les ports et les avenues. Ludo et ses fils repoussent leur armée avant qu’elle ne s’installe.','Les Zorks creusent sous les villes pour couper les communications. Guidés par leur père, Nathan et Timéo traversent les tunnels et neutralisent leurs machines.','Les envahisseurs gagnent les hauteurs. La famille passe par les toits et déjoue les armes volantes.','Les villes reprennent espoir. Nathan, Timéo, leur père Ludo et leurs alliés lancent une contre-attaque coordonnée.','Une faille s’ouvre au-dessus de la Terre et déverse une nouvelle escouade Zork. La famille doit fermer le passage.','Les Zorks convergent vers leur base et mobilisent leurs plus puissants chefs. Ludo et ses fils défendent les derniers quartiers.','La bataille atteint le ciel. Nathan et Timéo, épaulés par leur père Ludo, réunissent les héros pour chasser les Zorks et protéger la planète.'];
export const levels:Level[]=Array.from({length:80},(_,i)=>({id:i+1,act:Math.floor(i/10)+1,boss:true,name:names[i%12]+(i>=12?` ${Math.floor(i/12)+1}`:''),biome:biomes[i%12],length:Math.ceil((112+(i%6)*12)/2*1.2),platforms:12+(i%4),enemies:3+(i%5),gaps:3+(i%3),color:['#79a8cb','#8ba3c4','#738998','#e28d78','#df8ca2','#e8ad73','#ca926b','#77bac5','#d7ad70','#d97967','#78a9ce','#72b4b0'][i%12],story:i===79?'Sur le boulevard final, Nathan et Timéo affrontent le commandant Zork avec leur père Ludo. Ensemble, ils unissent leurs pouvoirs pour fermer la faille et sauver la Terre.':actStories[Math.floor(i/10)]}));
export const heroNames:Record<HeroId,string>={web:'Spider-Man',armor:'Iron Man',giant:'Hulk',night:'Batman',solar:'Superman',ocean:'Aquaman',claw:'Wolverine',thunder:'Thor',wonder:'Wonder Woman',flash:'Flash',antman:'Ant-Man',psychic:'Télépathe'};
