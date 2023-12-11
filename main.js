class Card {
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    };
};

class Unit extends Card {
    constructor(name, cost, power, res){
        super(name, cost);
        this.power = power;
        this.res = res;
        /* let player = null; */
    }
    atack(target){
        target.power -= this.power;
        target.res -= this.power;
    };
};




class Effect extends Card{
    constructor(name, cost, magnitud){
        super(name, cost);
        this.magnitud = magnitud;
    };
    increaseOrDecreaseStat(target){
        target.power += (this.magnitud);
        target.res += (this.magnitud);
    };
    play( target ) {
        if( target instanceof Unit ) {
            this.increaseOrDecreaseStat(target);
        } else {
            throw new Error( "Target must be a unit!" );
        }
    };

};

//* Effect
const difficultAlgorithm = new Effect("Algoritmo difícil", 2, 3) 
const unhandledPromiseRejecti = new Effect("Rechazo de promesa no controlado", 1, -2) //! Para reducir pasamos un valor negativo
const pairProgramming = new Effect("Programación en pareja", 3, 2)

//* 1 Turno:
//  El jugador 1 convoca a "Ninja Cinturón Rojo"
const ninjaRedBelt = new Unit("Ninja Cinturón Rojo", 3, 3, 4);
// El jugador 1 juega "Algoritmo duro" en "Ninja Cinturón Rojo"
difficultAlgorithm.play(ninjaRedBelt);

//* 2 Turno:
// El jugador 2 convoca a "Ninja Cinturón Negro"
const ninjaBlackBelt = new Unit("Ninja Cinturón Negro", 4, 5, 4);
// El jugador 2 juega "Rechazo de promesa no controlada" en "Ninja Cinturón Rojo"
unhandledPromiseRejecti.play(ninjaRedBelt);

//* 3 Turno:
// El jugador 1 juega "Programación en pareja" en "Ninja Cinturón Rojo"
pairProgramming.play(ninjaRedBelt);
// El jugador 1 tiene el ataque "Ninja Cinturón Rojo" "Ninja Cinturón Negro"
ninjaRedBelt.atack(ninjaBlackBelt);

console.log(ninjaBlackBelt);
console.log(ninjaRedBelt);
