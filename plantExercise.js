const EventEmitter = require('node:events');

class PlantExercise extends EventEmitter {
    constructor() {
        super();
        this.size = 0;
        this.hasBeenPlanted = false;

        this.addListener();
    }

    addListener(){
        this.on('plantSeed', () => {
            if (!this.hasBeenPlanted){
                this.size = 1;
                this.hasBeenPlanted = true;
                console.log(`Plant planted! Size: ${this.size} in`);
            } else {
                console.log("The seed has already been planted!");
            }
        });

        this.on("water", ()=>{
            if (this.hasBeenPlanted){
                this.size ++;
                console.log(`New size: ${this.size}in`);
            } else {
                console.log("You need to plant the seed first!");
            }
        });

        this.on("bugAttack", ()=>{
            if (this.hasBeenPlanted){
                this.size--;
                console.log(`Bugs shrink the plant! New size: ${this.size}in`);
            } else {
                console.log("Bugs could not eat the unplanted seed!");
            }
        });

        this.on("harvested", ()=>{
            if (this.hasBeenPlanted){
                console.log(`Plant harvested at size: ${this.size}in`);
                this.size = 0;
                this.hasBeenPlanted = false;
                this.removeAllListeners();
            } else {
                console.log("No plant to harvest!");
            }
        });
    }
}

const ben = new PlantExercise();

ben.emit("harvested");
ben.emit("bugAttack");
ben.emit("water");
ben.emit("plantSeed");
ben.emit("water");
ben.emit("water");
ben.emit("bugAttack");
ben.emit("harvested");