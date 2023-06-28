/* 
function checkAge() {
    const firstName = prompt("Як Вас звати?")
    const age = +prompt("Скiльки Вам рокiв?")
    const status = prompt('Ваш статус?')
try {
    if (age.length === 0 || firstName.length === 0 || status.length === 0) {
        throw new Error('The field is empty! Please enter your age')
    } else if (age < 18 || age > 70) {
        throw new RangeError("Ваш вік не входить до діапазону.")
    } else if (typeof age !== 'number') {
        throw new EvalError('Ви ввели некоректний вiк')
    } else if (status !== 'адмін' || status !== 'модератор' || status !== 'користувач') {
        throw new EvalError('Не правильно введений статус!') 
    } else {alert('Гарного перегляду!')}
} catch (error){
    console.error(error)
}}
checkAge();



function calcRectangleArea(width, height) {
 if(typeof width !== 'number' || typeof height !== 'number') {
    throw new Error('Некорректний тип данних')
 }
 return width * height
}



function sumSliceArray(arr, first, second) {
 if(typeof first !== 'number' || typeof second !== 'number') {
    throw new Error('Ви ввели не число!') 
 } else if (first > arr.length || second > arr.length) {
    throw new Error('Бiльше за довжину масива!')
 } 
 return arr[first - 1] + arr[second - 1]
}
console.log(sumSliceArray([5,3,5,8],3,5)); */



/* class MonthException extends Error {
    constructor(message) {
      super(message);
      this.name = "MonthException";
    }
  }
  
  function showMonthName(month) {
    const monthNames = [
      "January", "February", "March", "April", "May", "June", 
      "July", "August", "September", "October", "November", "December"
    ];
  
    if (month < 1 || month > 12) {
      throw new MonthException("Incorrect month number");
    }
  
    return monthNames[month - 1];
  }
  
  try {
    const monthName = showMonthName(5);
    console.log(monthName); 
  
    const invalidMonthName = showMonthName(13);
    console.log(invalidMonthName);
  } catch (e) {
    if (e instanceof MonthException) {
      console.error(e.name + ": " + e.message); 
    } else {
      console.error(e); 
  }
} */



function showUser(id) {
  if (id < 0) {
    throw new Error("ID must be a positive number");
  }

  return { id };
}

function showUsers(ids) {
  const users = [];
  for (const id of ids) {
    try {
      const user = showUser(id);
      users.push(user);
    } catch (error) {
      console.error(error.message);
    }
  }
  return users;
}


console.log(showUsers([7,-12,44,22]));
