function reverseString(str){
if(typeof str !== "string"){
return "not a string"}
    let arr = str.split("")
return arr.reverse().join("")
}

export default reverseString