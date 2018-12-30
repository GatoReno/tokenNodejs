class Player{

    //todo lo que resiba este const será la clase persona
    constructor(nombre,edad
        //mail,role,vida,ataq,def,vel,resist,magP,magAtaq,magDef){
    ){
        this.nombre = nombre ;
        this.edad = edad;
       // role = this.rola;
        //vida = this.vida;
        //ataq = this.ataq;
        //def = this.def;
        //vel = this.vel;
        //resist = this.resist;
        //magP = this.mag;
        //magAtaq = this.magAtaq;
        //magDef = this.magDef;
    }

    mostrarAtaque(){
        console.log(`la edad es de ${this.nombre}`)
    }
}


let px = new Player('kyo',21);//,"rogue",10,"ataque",0,0,0,0,0,0);
let px2 = new Player('',0)
px2.mostrarAtaque();
px.mostrarAtaque();