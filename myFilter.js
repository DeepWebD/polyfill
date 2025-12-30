if(Array.prototype.myFilter===undefined){
    Array.prototype.myFilter= function(callback,thisArg){
       if(this==null) throw new TypeError("Array.filter.myFilter called on null or undefined");
       if(typeof callback !== 'function') throw new TypeError('Callback must be a function');

       const result=[];
       for(let i=0;i<this.length;i++){
        if(callback.call(thisArg,this[i],i,this)) result.push(this[i])
       }

       return result;
    }
}

console.log([2,3, ,4,5].filter((num)=>num%2==0))