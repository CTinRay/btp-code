var Checker = Checker || {};

Checker.check = function(program){
    let errors = [];
    for(let i = 0; i < program.length; ++i ){
        let tokens = program[i].split(' ');
        let op = tokens[0];
        if( Instruction[op] === undefined ){
            errors.push(i);
            continue;
        }
        if( tokens.length != Instruction[op].nArg + 1 ){
            errors.push(i);
            continue;
        }
        for(let j = 1; j < tokens.length; ++j){
            if(isNaN(tokens[j])){
                errors.push(i);
                continue;
            }
        }
    }
    return errors;
};
