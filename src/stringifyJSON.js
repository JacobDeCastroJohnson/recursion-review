// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

//Splitting the object into parts
// { } , [ ],
// Add " " each individual compentnt
// Check bools
//

var stringifyJSON = function (obj) {
  let result = [];

  if (typeof obj === 'string') {
    return '"' + obj + '"';
  } else if (typeof obj === 'number' || typeof obj === 'boolean' || obj === null) {
    return String(obj);
  } else if (obj === undefined || obj instanceof Function) {
    return '';
  }

  if (Array.isArray(obj)) {
    obj.forEach(function (element) {
      result.push(stringifyJSON(element));
    });
    return '[' + result + ']';
  }

  if (obj instanceof Object) {
    for (var key in obj) {
      if (obj[key] === undefined || obj[key] instanceof Function) {
        continue;
      }
      result.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
    }
    return '{' + result + '}';
  }
};



// Result = [];
// Check type of object(string/bool/arr/obj/num)
// if array
//iterate through each element and use recursion function
//adress a single element and recur using funciton
//push to result arr
// result = result arr (returning)

// if its an obj
//iterate through keys
//push to result as formated obj
// result = result arr(return)

