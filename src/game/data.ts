export type KidId = 'nathan'|'timeo'|'nicolas';
export type SuitId = 'arachnid'|'armored'|'titan'|'night'|'solar'|'ocean'|'claw';
export type HeroId = 'web'|'armor'|'giant'|'night'|'solar'|'ocean'|'claw';
export const kids = [
 {id:'nathan' as const,name:'Nathan',age:4,tag:'Petit mais intrépide',color:'#ffb52e',speed:4.3,jump:7.3,heart:5},
 {id:'timeo' as const,name:'Timéo',age:9,tag:'Vif et inventif',color:'#42d9ff',speed:5.25,jump:7.8,heart:4},
 {id:'nicolas' as const,name:'Nicolas',age:15,tag:'Le stratège',color:'#b68cff',speed:5.8,jump:8.3,heart:4}
];
export const suits = [
 {id:'arachnid' as const,name:'Tisseur',hero:'web' as const,color:'#e94751',accent:'#1d2e64',power:'Filet éclair : immobilise les ennemis proches'},
 {id:'armored' as const,name:'Armure stellaire',hero:'armor' as const,color:'#d9443e',accent:'#f0bd55',power:'Bouclier d’énergie : protège quelques secondes'},
 {id:'titan' as const,name:'Titan émeraude',hero:'giant' as const,color:'#3cbd72',accent:'#6530a1',power:'Super saut : bondit plus haut'},
 {id:'night' as const,name:'Justicier nocturne',hero:'night' as const,color:'#354d7a',accent:'#f4cf60',power:'Cape planante : chute ralentie'},
 {id:'solar' as const,name:'Héros solaire',hero:'solar' as const,color:'#e74d53',accent:'#f4c949',power:'Rayon solaire : repousse les ennemis'},
 {id:'ocean' as const,name:'Gardien des océans',hero:'ocean' as const,color:'#178fc2',accent:'#f5c648',power:'Vague bleue : traverse les obstacles'},
 {id:'claw' as const,name:'Fauve indomptable',hero:'claw' as const,color:'#d79a36',accent:'#355d47',power:'Rage héroïque : frappe puissante'}
];
export type Level = {name:string; biome:string; length:number; platforms:number; enemies:number; gaps:number; color:string; story:string};
const names=['Le jardin des étoiles','La forêt des météores','Le canyon rouge','La ville suspendue','Les mines de cristal','Le volcan endormi','La baie des ombres','Le désert électrique','La forteresse lunaire','Le pont des nuages','La station orbitale','Le cœur du vaisseau'];
const biomes=['Prairie céleste','Forêt lumineuse','Canyon flamboyant','Métropole du futur','Grottes de cristal','Volcan des anciens','Archipel astral','Dunes cosmiques','Citadelle alien','Mer de nuages','Orbites terrestres','Vaisseau mère'];
export const levels:Level[]=Array.from({length:80},(_,i)=>({name:names[i%12]+(i>=12?` ${Math.floor(i/12)+1}`:''),biome:biomes[i%12],length:86+(i%6)*10,platforms:8+(i%4),enemies:2+(i%5),gaps:2+(i%3),color:['#6cce91','#42b8a0','#e99559','#6388d9','#a98ee8','#eb795c'][i%6],story:i===0?'Une pluie d’étoiles annonce l’arrivée des Zorks. Les trois frères découvrent un signal de détresse : les héros ont besoin de renfort !':i===23?'Le cœur du vaisseau mère est tout proche. Ensemble, les héros vont sauver la Terre !':'Les Zorks avancent. Les garçons et leurs alliés poursuivent leur mission pour défendre la Terre.'}));
export const heroNames:Record<HeroId,string>={web:'Tisseur',armor:'Armure stellaire',giant:'Titan émeraude',night:'Justicier nocturne',solar:'Héros solaire',ocean:'Gardien des océans',claw:'Fauve indomptable'};
