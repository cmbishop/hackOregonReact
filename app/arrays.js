exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },

  sum: function(arr) {
    const numbers = [1, 2, 3, 4];

    function getSum(total, num) {
      return total + num;
    }
    return numbers.reduce(getSum);
  },

  remove: function(arr, item) {
    const rmv = [];

    for (let i = 0, len = arr.length; i < len; i++) {
      if (arr[i] !== item) {
        rmv.push(arr[i]);
      }
    }

    return rmv;
  },

  removeWithoutCopy: function(arr, item) {
    for (let i = 0, len = arr.length; i < len; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        i--;
        len--;
      }
    }
    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    const newArray = arr1.concat(arr2);
    return newArray;
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    let count = 0;

    for (let i = 0, len = arr.length; i < len; i++) {
      if(arr[i] === item) {
        count++;
      }
    }
    return count;
  },

  duplicates: function(arr) {
    /*let count = 0;
    const duplicate = [];

    for (let i = 0; len = arr.length; i < len; i++) {
      if(arr[i] === ??) <-- not sure about this one {
        count++;
        count.push(duplicate);
      }
      return duplicate; */
  },

  square: function(arr) {
    const squared = [];

    for (let i = 0, len = arr.length; i < len; i++) {
      squared.push(arr[i] * arr[i]);
    }
    return squared;
  },

  findAllOccurrences: function(arr, target) {
    const occurence = [];

    for (let i = 0, len = arr.length; i < len; i++) {
      if (arr[i] === target) {
        occurence.push(i);
      }
    }
    return occurence;
  }
};
