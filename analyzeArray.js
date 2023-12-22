function sum(arr){
let total = 0
    for(let i = 0; i < arr.length; i++){
    total += arr[i]
}
return total

}

function average(arr){
    let avg = 0
    return avg = sum(arr)/arr.length
}
function min(arr){
    let min = arr[0]
    for(let i = 1; i< arr.length; i++){
        
        if(arr[i] < min){
          min = arr[i] 
        }
    }
    return min    

}
function max(arr){
    let max = arr[0]
    for(let i = 1; i< arr.length; i++){
        if(arr[i] >  max){
            max = arr[i]
        }
    }
return max
}

function isNotValid(arr){
    for(let i = 0; i< arr.length; i++){
        if(typeof arr[i] !== "number" ){
            return true;
        }
    }
}


function analyzeArray(arr){
if(isNotValid(arr)){
    return 'not an array'
} 

  else{  return {
    average: average(arr),
    min: min(arr),
    max: max(arr),
    length: arr.length

}}
}

export default analyzeArray