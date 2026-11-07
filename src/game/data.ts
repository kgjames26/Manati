export type KidId = 'nathan'|'timeo'|'nicolas';
export type SuitId = 'arachnid'|'armored'|'titan'|'night'|'solar'|'ocean'|'claw'|'thunder';
export type HeroId = 'web'|'armor'|'giant'|'night'|'solar'|'ocean'|'claw'|'thunder';
export const specialCooldown:Record<SuitId,number>={arachnid:4,armored:5,titan:6.2,night:3.5,solar:4.8,ocean:5.3,claw:4.2,thunder:5.4};
export const kids = [
 {id:'nathan' as const,name:'Nathan',age:4,tag:'Petit mais intrépide',color:'#ffb52e',speed:4.3,jump:7.3,heart:5},
 {id:'timeo' as const,name:'Timéo',age:9,tag:'Vif et inventif',color:'#42d9ff',speed:5.25,jump:7.8,heart:4},
 {id:'nicolas' as const,name:'Nicolas',age:15,tag:'Le stratège',color:'#b68cff',speed:5.8,jump:8.3,heart:4}
];
export const suits = [
 {id:'arachnid' as const,name:'Spider-Man',hero:'web' as const,color:'#e94751',accent:'#1d2e64',power:'Bond propulsé, toile qui immobilise et attire les Zorks'},
 {id:'armored' as const,name:'Iron Man',hero:'armor' as const,color:'#d9443e',accent:'#f0bd55',power:'Propulseurs ascendants, tir répulseur et blindage bref'},
 {id:'titan' as const,name:'Hulk',hero:'giant' as const,color:'#3cbd72',accent:'#6530a1',power:'Super-saut vertical, puis onde de choc au sol'},
 {id:'night' as const,name:'Batman',hero:'night' as const,color:'#354d7a',accent:'#f4cf60',power:'Batarang à distance, bond et descente ralentie'},
 {id:'solar' as const,name:'Superman',hero:'solar' as const,color:'#2868c8',accent:'#e74d53',power:'Rayon thermique perforant et impulsion de vol'},
 {id:'ocean' as const,name:'Aquaman',hero:'ocean' as const,color:'#178fc2',accent:'#f5c648',power:'Ruée aquatique, vague offensive et petit envol'},
 {id:'claw' as const,name:'Wolverine',hero:'claw' as const,color:'#e5b43e',accent:'#263e65',power:'Ruée bondissante et frappe de griffes'},
 {id:'thunder' as const,name:'Thor',hero:'thunder' as const,color:'#3678bd',accent:'#f2c653',power:'Mjolnir lancé et super coup : tempête de foudre'}
];
export type Level = {id:number;act:number;boss:boolean;name:string;biome:string;length:number;platforms:number;enemies:number;gaps:number;color:string;story:string};
const names=['Centre-ville','Le vieux port','Les toits du quartier','La grande avenue','Le parc urbain','La gare centrale','Le quartier des docks','Les ruelles anciennes','Le pont de la rivière','La place des héros','Le métro abandonné','Le boulevard final'];
const biomes=['Bruxelles','Paris','Londres','New York','Tokyo','Rio de Janeiro','Rome','Sydney','Le Caire','Barcelone','Montréal','Amsterdam'];
export const levels:Level[]=Array.from({length:80},(_,i)=>({id:i+1,act:Math.floor(i/10)+1,boss:(i+1)%10===0,name:names[i%12]+(i>=12?` ${Math.floor(i/12)+1}`:''),biome:biomes[i%12],length:112+(i%6)*12,platforms:12+(i%4),enemies:3+(i%5),gaps:3+(i%3),color:['#79a8cb','#8ba3c4','#738998','#e28d78','#df8ca2','#e8ad73','#ca926b','#77bac5','#d7ad70','#d97967','#78a9ce','#72b4b0'][i%12],story:i===0?'Une pluie d’étoiles annonce l’arrivée des Zorks. Les trois frères découvrent un signal de détresse : les héros ont besoin de renfort !':i===79?'Sur le boulevard final, les trois frères repoussent les derniers Zorks. Ensemble, les héros sauvent la Terre !':'Les Zorks avancent. Les garçons et leurs alliés poursuivent leur mission pour défendre la Terre.'}));
export const heroNames:Record<HeroId,string>={web:'Spider-Man',armor:'Iron Man',giant:'Hulk',night:'Batman',solar:'Superman',ocean:'Aquaman',claw:'Wolverine',thunder:'Thor'};
