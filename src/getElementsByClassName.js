// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

//resources used
//document.body -- scans the entire doc
// element.childNodes -- read only list of all children nodes of element (if any)
// element.classList --returns read only list of all classnames in classlist
//contains()
//element.hasChildren -- returns a boolean value Y/N if node has children


//create an array variable and push matching elements to that

//base case (the current element)
//use a nested recursive function to run on all elements of HTML Tree

//recursive case (children of that element)
//if element has children
// recursively call nested function on all child elements

//run the nested function on the entire html doc

// return the matching elements array

var getElementsByClassName = function(className, result, initial) {
  var result = result || [];
  var initial = initial || document.body;

  if (initial.classList.contains(className)) {
    result.push(result);
  }

  if (initial.hasChildren) {
    var child = initial.childNodes;
    for (var i = 0; i < child.length; i++) {
      getElementsByClassName(className, result, child[i]);
    }
  }

  return result;

};


