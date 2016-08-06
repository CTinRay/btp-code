var Instruction = {       
    // noop
    nop: { 
        nArg: 0
    },
    // set addr const 
    set: {
        nArg: 2
    },
    // mov addr addr
    mov: {
        nArg: 2
    },
    // mov address [address]
    mvi: {
        nArg: 2
    },
    // mov [address] address
    imv: {
        nArg: 2
    },
    // adc address const
    adc: {
        nArg: 2
    },
    // cad const address
    cad: {
        nArg: 2
    },
    // sht address address
    sht: {
        nArg: 3
    },
    // add address address address
    add: {
        nArg: 3
    },
    // sub address address address
    sub: {
        nArg: 3
    },
    // and address address address
    and: {
        nArg: 3
    },
    // xor address address address
    xor: {
        nArg: 3
    },
    // jmp pc
    jmp: {
        nArg: 1
    },
    // jmp address pc
    jeq: {
        nArg: 2
    },
    // jmp address pc
    jgt: {
        nArg: 2
    },
    // jmp address pc
    jlt: {
        nArg: 2
    }    
};
