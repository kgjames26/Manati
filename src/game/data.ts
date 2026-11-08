export type KidId = 'nathan'|'timeo'|'nicolas';
export type BirthDate = readonly [year:number,month:number,day:number];
export function ageFromBirthDate([year,month,day]:BirthDate,now=new Date()):number{
 const beforeBirthday=now.getMonth()+1<month||(now.getMonth()+1===month&&now.getDate()<day);
 return now.getFullYear()-year-(beforeBirthday?1:0);
}
export type SuitId = 'arachnid'|'armored'|'titan'|'night'|'solar'|'ocean'|'claw'|'thunder'|'wonder'|'flash'|'antman'|'psychic';
export type HeroId = 'web'|'armor'|'giant'|'night'|'solar'|'ocean'|'claw'|'thunder'|'wonder'|'flash'|'antman'|'psychic';
export const specialCooldown:Record<SuitId,number>={arachnid:4,armored:5,titan:6.2,night:3.5,solar:4.8,ocean:5.3,claw:4.2,thunder:5.4,wonder:4.2,flash:3.8,antman:5.2,psychic:4.6};
export const kids = [
 {id:'nathan' as const,name:'Nathan',birthDate:[2022,9,9] as const,get age(){return ageFromBirthDate(this.birthDate)},color:'#ffb52e',speed:4.3,jump:7.3,heart:6},
 {id:'timeo' as const,name:'Timéo',birthDate:[2017,3,15] as const,get age(){return ageFromBirthDate(this.birthDate)},color:'#42d9ff',speed:5.25,jump:7.8,heart:5},
 {id:'nicolas' as const,name:'Ludo',birthDate:[1987,6,25] as const,get age(){return ageFromBirthDate(this.birthDate)},color:'#b68cff',speed:5.8,jump:8.3,heart:4}
];
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
 {id:'flash' as const,name:'Flash',hero:'flash' as const,color:'#f3123c',accent:'#fff20a',power:'Éclair-éclair : frappe éclair qui traverse puis revient'},
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
