if (Array.prototype.myMap === undefined) {
 Array.prototype.myMap = function(callback, thisArg) {
    if (this == null) {
      throw new TypeError('Array.prototype.map called on null or undefined');
    }

    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }

    var len = this.length; 
    var A = new Array(len);

    for (var i = 0; i < len; i++) {
      if (i in this) {  // Skip holes in sparse arrays
        console.log(i)
        A[i] = callback.call(thisArg, this[i], i, this);
      }
    }

    return A;
  };
}

console.log([2,3,,5].myMap(num=>num*2))


