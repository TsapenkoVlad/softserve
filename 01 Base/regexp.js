function upperCase(str) {
    if (str.charAt(0) === str.charAt(0).toUpperCase()) {
      return "String's starts with uppercase character";
    } else {
      return "String's not starts with uppercase character";
    }
  }
  
  console.log(upperCase('regexp'))
  console.log(upperCase('RegExp'))


  function checkEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  console.log(checkEmail("Qmail2@gmail.com"));

  function swapStrings(str, subStr1, subStr2) {
    const regex = new RegExp(`(${subStr1})(.*)(\\s${subStr2})`);
    const result = str.replace(regex, `$3$2$1`);
    return result;
  }
  
  const input = "Java,Script";
  const output = swapStrings(input, "Java", "Script");
  console.log(output); 


  function validateCreditCardNumber(cardNumber) {
    const regex = /^[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$/;
    return regex.test(cardNumber);
  }

  function checkEmail(email) {
    const regex = /^[A-Za-z0-9]+([_\-.][A-Za-z0-9]+)*@[A-Za-z0-9]+([_\-.][A-Za-z0-9]+)*\.[A-Za-z]{2,}$/;
    return regex.test(email) ? "Email is correct!" : "Email is not correct!";
  }


  function checkLogin(login) {
    const regex = /^[A-Za-z][A-Za-z0-9]{1,9}$/;
    const numbers = login.match(/[0-9]+(\.[0-9]+)?/g);
    return regex.test(login) && numbers !== null ? numbers : false;
  }