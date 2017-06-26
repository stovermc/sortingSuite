function bubbleSort(array) {
  var sort = true;
  while(sort) {
    sort = false;
    for(var i = 0; i < array.length-1; i++) {
      if(array[i] > array[i+1]) {
        var swap = array[i+1];
        array[i+1] = array[i];
        array[i] = swap;
        sort = true
      }
    }
  }
  return array;
}

module.exports = bubbleSort;
