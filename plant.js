const EventEmitter = require('events');

class Plant extends EventEmitter {
    constructor() {
        super();
        this.size = 0;
        this.isPlanted = false;
        this.once('plantSeed', () => {
            this.isPlanted = true;
            this.size = 1;
            console.log(`A seed has now been planted`)
        });
        this.on('bugAttack', () => {
            if(this.isPlanted) {
                this.size--;
                console.log(`The plant size is now ${this.size}`);
            } else {
                console.log(`You must plant a seed first`);
            }
        });
        this.on('water', () => {
            if(this.isPlanted) {
                this.size++;
                console.log(`The plant size is now ${this.size}`);
            } else {
                console.log(`You must plant a seed first`);
            }
        });
        this.on('harvest', () => {
            if(this.isPlanted) {
                console.log(`The final plant size was ${this.size}`);
                newPlant.removeAllListeners();
            } else {
                console.log(`You must plant a seed first`);
            }
        });
    }
}

const newPlant = new Plant()

newPlant.emit('bugAttack');
newPlant.emit('plantSeed');
newPlant.emit('water');
newPlant.emit('bugAttack');
newPlant.emit('harvest');
newPlant.emit('water');
newPlant.emit('plantSeed');