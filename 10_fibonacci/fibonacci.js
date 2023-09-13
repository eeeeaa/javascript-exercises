const fibonacci = function(num) {
    if(num < 0){
        return "OOPS";
    }

    if(num === 0){
        return 0;
    }
    
    let x = 0;
    let y = 1;

    for(let i = 1; i < num;i++){
        let z = x + y;
        x = y;
        y = z;
    }

    return y;
};

// Do not edit below this line
module.exports = fibonacci;
