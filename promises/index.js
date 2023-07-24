function getPromise(message, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(message);
    }, delay);
  });
}
getPromise("test promise", 2000).then(function (data) {
  console.log(data);
});

function calcArrProduct(arr) {
  return new Promise((resolve, reject) => {
    const isNumber = (value) => typeof value === "number";
    if (arr.every(isNumber)) {
      const product = arr.reduce((acc, val) => acc * val, 1);
      resolve(product);
    } else {
      reject("Error! Incorrect array!");
    }
  });
}

function askNumber() {
  return new Promise(function (resolve, reject) {
    const number = prompt("Введіть число:");
    if (!isNaN(number) && number !== null) {
      resolve(Number(number));
    } else {
      reject("Помилка: Ви ввели не число!");
    }
  });
}
new Promise(function (resolve, reject) {
  askNumber().then(resolve).catch(reject);
})
  .catch(function (error) {
    return new Promise(function (resolve, reject) {
      let number;
      const inputNumber = () => {
        number = prompt("Введіть число:");
        if (!isNaN(number) && number !== null) {
          resolve(Number(number));
        } else {
          inputNumber();
        }
      };
      inputNumber();
    });
  })
  .then(function (result) {
    console.log("Введене число:", result);
  });
