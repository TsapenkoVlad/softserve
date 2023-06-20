const a1 = 5
const b1 = 10 
const c1 = 15

console.log(a1 < b1 && b1 < c1);


const x = 1
const y = 2

const res1 = '' + x + y
console.log(res1)
console.log(typeof res1)

const res2 = !!x + y.toString()
console.log(res2); 
console.log(typeof res2); 



let res3 = x < y
console.log(res3); 
console.log(typeof res3); 



let res4 = undefined + x + y
console.log(res4); 
console.log(typeof res4); 


const isAdult = +prompt ('Скільки Вам років?')
if(isAdult < 18)  alert('Ви ще надто молоді') 
else alert('Ви досягли повнолітнього віку')



const a = +prompt('1 сторона:')
const b = +prompt('2 сторона:')
const c = +prompt('3 сторона:')


if (a + b > c && b + c > a && c + a > b) {
   
    const s = (a + b + c) / 2;

    const res = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    
    console.log("Площа трикутника: " + res.toFixed(3));
} else alert('Incorrect data')




const day = +prompt('Котра година?')

if(day <= 23 && day < 5) {
    alert('Доброї ночі')
} else if (day >=5 && day < 11) {
    alert('Доброго ранку')
} else if (day >= 11 && day < 17) {
    alert('Доброго дня')
} else if  (day >= 17 && day < 23) 
    alert('Доброго вечора')
 


   

switch (true) {
    case day <= 23 && day < 5:  alert('Доброї ночі'); break;
    case day >=5 && day < 11: alert('Доброго ранку'); break;
    case day >= 11 && day < 17: alert('Доброго дня'); break;
    case day >= 17 && day < 23: alert('Доброго вечора'); break;
}
 





let arr = [4, 5, 2, 1, 6, 5, 3, 5, 2, 5];

const mostFrequentNumber = arr.sort((a, b) =>
  arr.filter((el) => el === a).length - arr.filter((el) => el === b).length
).pop();

arr = arr.filter((el) => el !== mostFrequentNumber);

console.log(arr)







   

