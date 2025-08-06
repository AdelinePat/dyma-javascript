const arr = Array.from([4, 2, 3], (nbr) => nbr + 1);
console.log(arr);
console.log(arr[arr.length-1]);


////// DESTRUCTURING ARRAYS ///////
const arr1 = [[1,2],3]
const [[a,b]] = arr1;
console.log(a,b);

const arr2 = ["a", "b", "c"];
const [,,c] = arr2;
const [, ...arr3] = arr2;
console.log(c);
console.log(arr3);


////// ADD TO ARRAY ///////
const arr4 = [1,2,3];
arr4[0] = "1";
arr4.unshift(20);
console.log(arr4);