function iterativeLog(array) {
  array.forEach((element, index, array)=> {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  var myArray= ['David','Brandon']
  myArray.forEach(callback);
  return myArray
}

function doToArray(array, callback){
  array.forEach(callback)
}
