do{ 
    var a = +prompt('Введите число');
}while(a == '' || a == 0 || isNaN(a)){
    
}


do{
    var b = +prompt('Введите степень в которую возведется 1 число');

}while(isNaN(b)){
    if(b == 0 || b == ''){
        b = 2
        
    }

}
let num = 1

for(i = 1; i <= b; i++){

    num = num * a


    
}

console.log(num);