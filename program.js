let string="Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers"
let final_array=[]
let index=0;
let vowel="aeiou"
let resultingarray=[]
string=string.replace(/[^a-zA-Z" "]/g,"")
let newArray=string.split(" ")
if(string.length===0){
    console.log("The string is empty")
}
else{
 let result=newArray.sort((a,b)=>{
    return b.length-a.length
})
for(let i of newArray){
    if(i.length===result[0].length){
       final_array.push(i) 
    }
}
for(let i of final_array){
    count=0
    for(let j of i.split("")){
        if(vowel.includes(j)){
            count++
        }
    }
    resultingarray.push(count)
}
let sorted_array=[...resultingarray]
let max=sorted_array.sort((a,b)=>{
    return b-a;
})
for(let i=0;i<resultingarray.length;i++){
    if(resultingarray[i]===max[0]){
      index=i 
      break;
    }
}
console.log(final_array[index])   
}
