exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn.apply([], arr);
  },

  speak: function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction: function(str) {
    return function(within) {
      return str + ", " + within;
    };
  },

  makeClosures: function(arr, fn) {
    const x = [];

    const close = function(val) {
      return function() { return fn(val); };
    };
    for (let i = 0, len = arr.length; i < len; i++) {
      x.push(close(arr[i]));
    }
    return x;
  },

  partial: function(fn, str1, str2) {
    return function(str3) {
      return fn(str1, str2, str3);
    };
  },

  useArguments: function() {
    let arg = 0;

    for (let i = 0, len = arguments.length; i < len; i++) {
      arg += arguments[i];
    }
    return arg;
  },

  callIt: function(fn) {
    /*const argsArray = Array.prototype.slice.call(arguments);
    fn.apply(null, arguments); <-- I know I'm pretty close here
    */
  },

  partialUsingArguments: function(fn) {
    /*const args = Array.prototype.slice.call(arguments, 1);
    const partialUse = function() {
      const remainingArgs = Array.prototype.slice.call(arguments);
      return fn.apply(null, args.concat(remainingArgs));
      ...Once again, I know I'm fairly close here
    } */
  },

  curryIt: function(fn) {
    /*let curried = fn.length;

    return function x() {
      let args = Array.prototype.slice.call(arguments, 0);
      if (args.length >= curried) {
        return fn.apply(null, args);
      }
      else {
        return function y() {
          let args2 = Array.prototype.slice.call(arguments, 0);
          return x.apply(null, args.concat(args2));
          ...once again...
        }
      }
    }*/
};
