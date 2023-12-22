const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const betabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'




function caeserCipher(str, shif){

let index, cipher_index, str2 = ""
if(typeof str !== "string"){
    return "not a string"
}
for(let i = 0; i< str.length; i++){
   

 if((str[i].match(/[a-zA-Z]/))){
    if(!(str[i].match(/[A-Z]/))){
    
        index = alphabet.indexOf(str[i])
         
        if(index == 25){
            str2 += "a"
        }
        else{
            str2 += alphabet[index + shif]
    }}
    else if((str[i].match(/[A-Z]/))){
        index = betabet.indexOf(str[i])
        if(index == 25){
            str2 += "A"
        }
        else{
        str2 += betabet[index + shif]
    }
    }



}



else{
    str2 += str[i]
}

}
return str2

}

export default caeserCipher