const EventEmitter = require('events');

class Robot extends EventEmitter {
    constructor(name) {
        super();
        this.name = name;
        this.isActive = false;
        this.once('activate', () =>{
            this.isActive = true;
            console.log(`${this.name} has been activated`);
        })
        this.on('speak', (said) => {
            if(this.isActive)
                console.log(`${this.name}: ${said}`);
        })
        
    }
}

const curtis = new Robot('Curtis');

curtis.emit('speak', 'hello');
curtis.emit('activate');
curtis.emit('speak', 'hello');
curtis.emit('speak', 'something else');
curtis.emit('speak', 'something else');
curtis.emit('speak', 'something else');
curtis.emit('speak', 'something else');
curtis.emit('activate');
curtis.emit('activate');
curtis.emit('activate');
curtis.emit('activate');


