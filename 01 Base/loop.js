/*  let arr = createArray(2, 9);

function createArray(a,b) {
    let arrayNumbers = [];
    for (let i = a; i <= b; ++i) {
        arrayNumbers.push(i);
    } 
    return arrayNumbers;
}
createArray();
console.log(arr) */
 

/*  function summNumber(a,b) {
    let result = [];
    for (let i = a; i <= b; i++) {
        for(let j = 0; j < i; j++) {
            result.push(i)
        }
    }  
    return result;
}

console.log(summNumber(1,4));  */


/*  function randArray(k) {
    let arr = [];
    for (let i = 0; i < k; i++) {
        arr.push(Math.floor(Math.random() * 500));
    }
    return arr;}

console.log(randArray(2));
 */


/*  const arr = [5, 3, 4, 5,6,7,3];

const arr2 = compact(arr);

function compact(arr) {
    const newArr = Array.from(new Set(arr));
    return newArr;
    }

  console.log(arr2); */
/*   
  const newArray = new Set([1,2,3])
  console.log(newArray);  


  const arr = [5, 'Limit', 12, 'a', '3', 99, 2, [2, 4, 3, '33', 'a', 'text'], 'strong', 'brown'];
 const newArr = arr.flat() */
 
/* 
let string = [];
let numbers = [];


function funcName(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string') {
      string.push(arr[i]);
    } else {
      numbers.push(arr[i]);
    }
  } 
}

funcName(newArr);
console.log(string);
console.log(numbers) */; 
 
/* 
function calc(a,b,op) {
    let result;
    switch (op) {
        case 1:
            result = a - b;
            break;
        case 2:
            result = a * b;
            break;
        case 3:
            result = a / b;
            break;  
        default:
            result = a + b;
            break; 
    }
    return result;
}

console.log(calc(10,3,1));  */

 
/* function calc(a, b, op) {
    let result;
    if (op === 1) {
     result = a - b
    } else if (op === 2) {
        result = a * b
    } else if (op === 3) {
        result = a / b
    } else {
        result = a + b
    } 
    return result
   
}
 */

/* function findUnique(arr) {
    return arr.length === new Set(arr).size; }

findUnique([1, 2, 3, 5, 3]);  // => false
findUnique([1, 2, 3, 5, 11]); // => true
console.log(findUnique([1, 2, 3, 5, 3]));
console.log(findUnique([1, 2, 3, 5, 11]));
 */
/* const tom = create ('pass_for_Tom')
function create(password) {
    return function (value) {
        return value === password;
    }
}
console.log(tom("pass_for_Tom"))
console.log(tom("pass_for_tom")) */