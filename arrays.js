const chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
console.log(chocolateBars);

function addElementToBeginningOfArray(array, element){
    var myarray = [array];
newArray= [element,...myarray];
 return (newArray);
};

function destructivelyAddElementToBeginningOfArray (array, element){
var myArray = [array];
 myArray.unshift(element);
return myArray);
}
