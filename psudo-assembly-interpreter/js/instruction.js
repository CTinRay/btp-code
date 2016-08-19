var Instruction = {       
    // noop
    hlt: { 
        nArg: 0,
        exe: function(pc, ram, args){
            return pc;
        }
    },
    // set addr const 
    set: {
        nArg: 2,
        exe: function(pc, ram, args){
            ram.write(args[0], args[1]);
            return pc + 1;
        }
    },
    // mov addr addr
    mov: {
        nArg: 2,
        exe: function(pc, ram, args){
            ram.write(args[1], ram.read(args[0]));
            return pc + 1;
        }
    },
    // mvi address [address]
    mvi: {
        nArg: 2,
        exe: function(pc, ram, args){
            ram.write(ram.read(args[1]), ram.read(args[0]));
            return pc + 1;
        }        
    },
    // imv [address] address
    imv: {
        nArg: 2,
        exe: function(pc, ram, args){            
            ram.write(args[1], ram.read(ram.read(args[0])));
            return pc + 1;
        }
    },
    // inc address const
    inc: {
        nArg: 2,
        exe: function(pc, ram, args){
            ram.write(args[0], ram.read(args[0]) + Number(args[1]));
            return pc + 1;
        }
    },
    // sht address address
    sht: {
        nArg: 2,
        exe: function(pc, ram, args){
            ram.write(args[0], ram.read(args[0]) << ram.read(args[1]));
            return pc + 1;
        }
    },
    // add address address address
    add: {
        nArg: 3,
        exe: function(pc, ram, args){
            ram.write(args[0], ram.read(args[1]) + ram.read(args[2]));
            return pc + 1;
        }
    },
    // sub address address address
    sub: {
        nArg: 3,
        exe: function(pc, ram, args){
            ram.write(args[0], ram.read(args[1]) - ram.read(args[2]));
            return pc + 1;
        }
    },
    // and address address address
    and: {        
        nArg: 3,
        exe: function(pc, ram, args){
            ram.write(args[0], ram.read(args[1]) & ram.read(args[2]));
            return pc + 1;
        }
    },
    // xor address address address
    xor: {
        nArg: 3,
        exe: function(pc, ram, args){
            ram.write(args[0], ram.read(args[1]) ^ ram.read(args[2]));
            return pc + 1;
        }
    },
    // jmp pc
    jmp: {
        nArg: 1,
        exe: function(pc, ram, args){
            return args[0];
        }
    },
    // jeq address pc
    jeq: {
        nArg: 2,
        exe: function(pc, ram, args){
            if( ram.read(args[0]) == 0 ){
                return args[1];
            }
            else {
                return pc + 1;
            }
        }
    },
    // jgt address pc
    jgt: {
        nArg: 2,
        exe: function(pc, ram, args){
            if( ram.read(args[0]) > 0 ){
                return args[1];
            }
            else {
                return pc + 1;
            }
        }
    },
    // jlt address pc
    jlt: {
        nArg: 2,
        exe: function(pc, ram, args){
            if( ram.read(args[0]) < 0 ){
                return args[1];
            }
            else {
                return pc + 1;
            }
        }
    }    
};
