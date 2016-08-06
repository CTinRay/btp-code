var Computer = Computer || {};

Computer.init = function(romId, ramId, pcId){
    Computer.rom = Computer.Memory(romId);
    Computer.ram = Computer.Memory(ramId);
    Computer.pc = document.getElementById(pcId);
    Computer.pc.value = 0;
};

Computer.cycle = function(){
    let cmd = Computer.rom.read(Computer.pc.value).split(' ');
    let op = cmd[0];
    let args = cmd.slice(1);
    Computer.pc.value = Instruction[op].exe(Computer.ram, args);
};

