var Computer = Computer || {};

// Constructor of memory object
Computer.Memory = function(domId){
    var memory = {
        highlight: -1,
        table: document.getElementById(domId)        
    };
    memory.rows = memory.table.getElementsByTagName('tr');
    memory.cells = memory.table.getElementsByTagName('input');

        
    // Private function that hilight table of the address. 
    let highlight = function(address){
        if( memory.highlight >= 0 ){
            memory.rows[memory.highlight].className =
                memory.rows[memory.highlight].className.replace(' highlight', '');
        }
        
        // Add highlight effect to the row.
        memory.rows[address].className += ' highlight';
        
        // Store the line highlighted.
        memory.highlight = address;
    };
    
    memory.read = function(address){
        highlight(address);
        return memory.cells[address].value;
    };
    
    memory.write = function(address, value){
        highlight(address);
        return memory.cells[address].value;
    };

    return memory;
};

