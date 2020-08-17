// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

//Splitting the object into parts
  // { } , [ ],
  // Add " " each individual compentnt
  // Check bools
  //

var stringifyJSON = function(obj) {
  let result = [];

  if(typeof obj === 'string') {
    return '"' + obj + '"';
  } else if(typeof obj === 'number' || type obj === 'boolean' || typeof obj === null) {
    return String(obj);
  } else if(obj === undefined || obj instanceof Function) {
    return "";
  }


  //remove the brackets from the current element
  //stringify each element in the arr
  // add those into the result

    // [ a, [ b], [ c] ]
    // ' [a, '[ b]', '[ c]' ]'
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

