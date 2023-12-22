function capitalize(str) {
    
  let num = str.indexOf(str.match(/[a-zA-Z]/))
  let str1 = ''
  if(num == -1){
    return 'no valid characters'
  }
  
  if(num>0){
    str1 = str.slice(0,num) + str[num].toUpperCase() + str.slice([num+1])
    return str1
  } 
  else{
    str1 = str[0].toUpperCase() + str.slice(1)
    return str1
  }
  }
  export default capitalize;