const esPar = (numero) =>{
    if (numero % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
} 

// console.log(esPar(3)) // false
// console.log(esPar(2)) //true

module.exports = {
    esPar,
}