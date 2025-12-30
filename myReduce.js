if (Array.prototype.myReduce === undefined) {
  Array.prototype.myReduce = function (callback, initialValue) {
    if (this == null)
      throw new TypeError(
        "Array.prorotype.myReduce called on null or undefined"
      );
    if (typeof callback !== "function")
      throw new TypeError("Callback must be a function");

    let len = this.length;
    let acc;
    let i = 0;

    if (arguments.length > 1) {
      acc = initialValue;
    } else {
      while (i < len) {
        if (this[i]) {
          acc = this[i];
          i++;
          break;
        }
        i++;
      }
      if (acc === undefined) {
        throw new TypeError("Reduce of empty array with no initial value");
      }
    }


    while (i < len) {
      if (i in this) {
        acc = callback.call(undefined, acc, this[i], i, this);
      }

      i++;
    }

    return acc;
  };
}

console.log([2, 3, 5].myReduce((acc, num) => acc + num));
