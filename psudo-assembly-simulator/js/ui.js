var UI = UI || {};

UI.init = function(){
    let initTable = function(nLines, table, type, init){
        for( let i = 0; i < nLines; ++i ){
            let tr = document.createElement('tr');
            let td1 = document.createElement('td');
            td1.innerHTML = i;
            let td2 = document.createElement('td');
            let cell = document.createElement('input');            
            cell.setAttribute('type', type);
            cell.value = init;
            td2.appendChild(cell);
            tr.appendChild(td1);
            tr.appendChild(td2);
            table.appendChild(tr);
        }
    };
    initTable(Config.romSize, document.getElementById('rom'), 'text', 'hlt');
    initTable(Config.ramSize, document.getElementById('ram'), 'number', 0);    
};
