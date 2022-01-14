class Card{
    constructor(name, cost){
        this.name = name;
        this.cost = cost
    }
}

class Unit extends Card{
    constructor(name, cost, power, res){
        super()
        this.name=name;
        this.cost = cost;
        this.power = power;
        this.res = res
    }

    attack(target){
        target.res -= this.power;
    }
}

class Effect extends Card{
    constructor(name, cost, text,stat) {
        super()
        this.name = name
        this.cost = cost
        this.text = text
        this.stat = stat
        
    }
}


const leo = new Unit("leo",12,32,44)
const  lukas = new Unit("lukas",10,44,44)


leo.attack(lukas)

console.log(lukas)