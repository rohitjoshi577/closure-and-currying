//  a function always remembers its lexical scope

function a(){
    let x = 4;
    function b(y){
        console.log(x+y)
    }

    return b;
}


let data = a();

console.log(data);

data(90);