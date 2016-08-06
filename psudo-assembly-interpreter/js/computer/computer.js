var Computer = Computer || {};

Computer.init = function(romId, ramId, pcId){
    Computer.rom = Computer.Memory(romId);
    Computer.ram = Computer.Memory(ramId);
    Computer.pc = document.getElementById(pcId);
    Computer.pc.value = 0;
    Computer.running = false;
};

Computer.cycle = function(){
    let cmd = Computer.rom.read(Number(Computer.pc.value)).split(' ');
    let op = cmd[0];
    let args = cmd.slice(1);
    Computer.pc.value = Instruction[op].exe(Number(Computer.pc.value), Computer.ram, args);
};

Computer.run = function(){
    if( !Computer.running ){
        Computer.running = true;
        Computer.worker();
    }
};

Computer.worker = function(){
    if(Computer.running){
        Computer.cycle();
        setTimeout(Computer.worker, Config.cycleInterval);
    }
};

Computer.stop = function(){
    Computer.running = false;
};
