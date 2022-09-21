var array = ["hello", "2", "world", ":-)"];
var resArr = [];

for(var i = 0; i < array.length; i++){
    if(array[i].length < 4){
        resArr.push(array[i]);
    }
}

console.info(resArr);