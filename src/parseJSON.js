// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json, result) {
  var result = result || [];
  if (json === 'true') {
    result.push(true);
  }
  if (json === 'false') {
    result.push(false);
  }
  if (parseInt(json) !== NaN) {
    result.push(parseInt(json));
  } else {
    result.push(json);
  }

  //Array
  if (json[0] === '[' && json[json.length -1] === ']') {
    var static = [];

  }
  //Obj
  if (json[0] === '{' && json[json.length -1] === '}') {

  }
};

//We are taking an object as a string and turning each element into a literal, and returning that as a json object
// We can use [], {}, to parce the elements
// '{' 'a':'b' '}'
// { } indexOF to remove with splice
// : or a , the next splice point

// Establish type, object/array/int/string/bool

// Reformat it dependant on the type

// Push that to the result (recursive) return that { [true ]}

