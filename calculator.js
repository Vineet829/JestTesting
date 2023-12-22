function isValid(a,b){
if(typeof a ==  "number" && typeof b ==  "number"){
    return true
}
}


let add = (a,b) => {
if(isValid(a,b)){
    return a + b
}
else{
 return 'Arguments contain a non-number'
}
}

let subtract = (a,b) => {
    if(isValid(a,b)){
        return a - b
    }
    else{
     return 'Arguments contain a non-number'
    }
    }

    let divide = (a,b) => {
        if(isValid(a,b)){
            return a/b
        }
        else{
         return 'Arguments contain a non-number'
        }
        }


        let multiply = (a,b) => {
            if(isValid(a,b)){
                return a * b
            }
            else{
             return 'Arguments contain a non-number'
            }
            }
        const calculator = {
    add,
    subtract,
    divide,
    multiply
}

export default calculator