/******************
 * YOUR CODE HERE *
 ******************/

 //#1/
const onlyOdds = function(numbers){
  const emptyArray = [];
for (const newNumbers of numbers){
  if (newNumbers % 2 === 1){
      emptyArray.push(newNumbers);
  }

}
  return emptyArray;
}

const result = [35, 1990, 654321, 9000, 9001]
console.log(onlyOdds(result))

//#2/
 const onlyEvens = function(numbers){
  const emptyArray1 = [];
for (const newNumbers of numbers){
  if (newNumbers % 2 === 0){
      emptyArray1.push(newNumbers);
  }

}
  return emptyArray1;
}

const result1 = [35, 1990, 654321, 9000, 9001]
console.log(onlyEvens(result1))


//#3//
const shortNamesOnly = function(names){
  const emptyArray2 = [];
for (const newNames of names){
  if (newNames.length < 7){
    emptyArray2.push(newNames);
  }
}

return emptyArray2;

}
const result2 = ['Francis', 'Frank', 'Bob', 'Roxanne']
console.log(shortNamesOnly(result2));


//#4//
const dNames = function(names){
  const emptyArray3 = [];
for (const newNames of names){
  if (newNames[0] === 'D'){
    emptyArray3.push(newNames);
  }
}

return emptyArray3;

}
const result3 = ['Francis', 'David', 'Bob', 'Roxanne']
console.log(dNames(result3));













/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/


if (typeof onlyOdds === 'undefined') {
  onlyOdds = undefined;
}

if (typeof onlyEvens === 'undefined') {
  onlyEvens = undefined;
}

if (typeof shortNamesOnly === 'undefined') {
  shortNamesOnly = undefined;
}

if (typeof dNames === 'undefined') {
  dNames = undefined;
}


module.exports = {
  onlyOdds,
  onlyEvens,
  shortNamesOnly,
  dNames,
}
