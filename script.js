//PART 1
const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
      name: "Leo",
      type: "Cat",
      companion: {
        name: "Frank",
        type: "Flea",
        inventory: ["small hat", "sunglasses"],
      },
    },
    roll(mod = 0) {
      const result = Math.floor(Math.random() * 20) + 1 + mod;
      console.log(`${this.name} rolled a ${result}.`);
    },
  };
  
  console.log(adventurer.roll());
  
  class Character {
    static MAX_HEALTH = 100;
    constructor(name) {
      this.name = name;
      this.health = 100;
      this.inventory = [];
    }
    roll(mod = 0) {
      const result = Math.floor(Math.random() * 20) + 1 + mod;
      console.log(`${this.name} rolled a ${result}.`);
      return result
    }
  }
  
  class Adventurer extends Character {
    static ROLES = ["Fighter", "Healer", "Wizard"];
  
    constructor(name, role) {
      super(name);
      if (!Adventurer.ROLES.includes(role)) {
        throw ("This role is invalid")
      }
      this.role = role;
      this.inventory.push("bedroll", "50 gold coins");
      this.level = 1;
    }
  
    scout() {
      console.log(`${this.name} is scouting ahead...`);
      super.roll();
    }
  
    duel(opponent){
      // console.log(myRoll)
      // console.log(opponentRoll)
      
      while(this.health > 50 && opponent.health > 50 ){
        const myRoll = this.roll()
        const opponentRoll = opponent.roll()
        if(myRoll > opponentRoll){
          opponent.health -= 1
        } else if( myRoll < opponentRoll) {
          this.health -= 1
        } else {
          this.health -= 1;
          opponent.health -= 1;
          console.log("You both rolled the same number. You both lose a health point ") 
        }
        console.log(`${this.name}'s Health is ${this.health}  || ${opponent.name}'s Health is ${opponent.health}`)
        console.log("================================")
      }
      console.log( this.health > 50 ? `Winner of the duel: ${this.name}` : `Winner of the duel: ${opponent.name}`)
    }
  }
  
  class Companion extends Character {
    constructor(name, type) {
      super(name);
      this.type = type;
    }
    follow(adventurer) {
      console.log(`${this.name} is following ${adventurer.name}`);
    }
  }
  
  class AdventurerFactory {
    constructor(role) {
      this.role = role;
      this.adventurers = [];
    }
    generate(name) {
      const newAdventurer = new Adventurer(name, this.role);
      this.adventurers.push(newAdventurer);
    }
    findByIndex(index) {
      return this.adventurers[index];
    }
    findByName(name) {
      return this.adventurers.find((a) => a.name === name);
    }
  }
  
  const healers = new AdventurerFactory("Healer");
  
  healers.generate("Robin");
  
  // const robin = new Character("Robin")
  // robin.inventory = ["sword", "potion", "artifact"];
  // robin.companion = new Character("Leo");
  // robin.companion.type = "Cat";
  // robin.companion.companion = new Character("Frank");
  // robin.companion.companion.type = "Flea";
  // robin.companion.companion.inventory = ["small hat", "sunglasses"];
  
  // const robin = new Adventurer("Robin", "Scout");
  
  // const wen = new Adventurer("Wen", "Gatherer")
  const wen = new Adventurer("Wen", "Fighter")
  const max = new Adventurer("Max", "Wizard")
  
  const leo = new Companion("Leo", "Cat");
  
  const frank = new Companion("Frank", "flea");
  
  // robin.scout();
  // robin.companion = leo;
  // robin.companion.companion = frank;
  // robin.companion.follow(robin);
  // robin.companion.companion.follow(leo);
  
  // console.log(healers.adventurers)
  
  //PART 6
  max.duel(wen)