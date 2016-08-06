var Computer = Computer || {};

Computer.init = function(romId, ramId, pcId){
    Computer.rom = Computer.Memory(romId);
    Computer.ram = Computer.Memory(ramId);
    Computer.pc = document.getElementById(pcId);
};


