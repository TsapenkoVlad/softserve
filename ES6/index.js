let names = {
    first: "Tom",
    second: "Sam",
    third: "Ray",
    fourth: "Bob",
    fifth: "Name №5",};
    let { first: f, third: x, fifth } = names;


let data = {
        names: ["Sam", "Tom", "Ray", "Bob"],
        ages: [20, 24, 22, 26],
      };
      
    let { names: [ , name2, , name4], ages: [ , age2, , age4] } = data;
    console.log(name2);
    console.log(age2);
    console.log(name4);
    console.log(age4);         





    function mul(...args) {
        let result = 1;
      
        for (const arg of args) {
          if (typeof arg === "number") {
            result *= arg;
          }
        }
      
        return result;
      }    
      console.log(mul(1, "str", 2, 3, true)); 
      console.log(mul(null, "str", false, true));
      
      
      function mapBuilder(keysArray, valuesArray) {
        if (keysArray.length !== valuesArray.length) {
          throw new Error("The length of keysArray and valuesArray should be the same.");
        }
      
        const map = new Map();
      
        for (let i = 0; i < keysArray.length; i++) {
          const key = keysArray[i];
          const value = valuesArray[i];
          map.set(key, value);
        }
      
        return map;
      }
      
    
      let keys = [1, 2, 3, 4];
      let values = ["div", "span", "b", "i"];
      let map = mapBuilder(keys, values);
      
      console.log(map.size); 
      console.log(map.get(2));       

      var arr = [];

for (var i = 0; i <= 2; i++) {
  (function (num) {
    arr[num] = function () {
      console.log(num);
    };
  })(i);
}

arr[0](); // 0
arr[arr.length - 1]();