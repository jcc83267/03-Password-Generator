// Assignment code here
//chacter sets
var caseSetsABCLower = 'abcdefghijklmnopqrstuvwxyz';
var caseSetsABCUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var caseSets123 = '012345679';
var caseSetsSpecial = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~" ;
//fucntion for getting required length
var getLength = function() {
  var length = ""
  while(length === "" || length === null) {
    length = window.prompt("What is the required length of the password? Please type in a number between 8 and 128");
    length = parseInt(length);
    if(length < 8) {
      length = "";
    }
    else if(length <= 128){
      break;
    }
    else {
      length = "";
    }
  }
  var lengthConfirm = window.confirm("Did you want " + length + " for the password size.");
  if (lengthConfirm) {
    return length;
  }
  else {
    length = getLength();
    return length;
  }
}
//fucntion for character types need
var getCharacterType = function(type) {
  typeConfirm = window.confirm("Do you need " + type + " for your password. Click OK for YES and Cancel for NO");
  if (typeConfirm) {
    return true;
  }
  else {
    return false;
  }
}
//function to shuffle string 
String.prototype.shuffle = function () {
  var word = this.split(""),
      num = word.length;

  for(var i = num - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = word[i];
      word[i] = word[j];
      word[j] = tmp;
  }
  return word.join("");
}
//generate password check
var passwordGenerate = function(lengthNum, lowerCase, uppperCase, numericCase, specialCase) {
  var result="";
  //lower
  if(lowerCase === true && uppperCase === false && numericCase === false && specialCase === false) {
    for(var i = 0; i < lengthNum; i++ ) {
      result += caseSetsABCLower.charAt(Math.floor(Math.random()* caseSetsABCLower.length));
    }
  }
  //upper
  else if(lowerCase === false && uppperCase === true && numericCase === false && specialCase === false) {
    for(var i = 0; i < lengthNum; i++) {
      result += caseSetsABCUpper.charAt(Math.floor(Math.random()* caseSetsABCUpper.length));
    }
  }
  //num
  else if(lowerCase === false && uppperCase === false && numericCase === true && specialCase === false) {
    for(var i = 0; i < lengthNum; i++) {
      result += caseSets123.charAt(Math.floor(Math.random()* caseSets123.length));
    }
  }
  //special
  else if(lowerCase === false && uppperCase === false && numericCase === false && specialCase === true) {
    for(var i = 0; i < lengthNum; i++) {
      result += caseSetsSpecial.charAt(Math.floor(Math.random()* caseSetsSpecial.length));
    }
  }
  //lower upper
  else if(lowerCase === true && uppperCase === true && numericCase === false && specialCase === false) {
    var randomNum1 = Math.floor(Math.random()*(lengthNum/2) +1);
    lengthNum -= randomNum1;
    for(var i = 0; i < randomNum1; i++) {
      result += caseSetsABCLower.charAt(Math.floor(Math.random()* caseSetsABCLower.length));
    }
    for(var i = 0; i < lengthNum; i++) {
      result += caseSetsABCUpper.charAt(Math.floor(Math.random()* caseSetsABCUpper.length));
    }
    result=result.shuffle();
  }
  //lower num
  else if(lowerCase === true && uppperCase === false && numericCase === true && specialCase === false) {
      var randomNum1 = Math.floor(Math.random()*(lengthNum/2) +1);
      lengthNum -= randomNum1;
      for(var i = 0; i < randomNum1; i++) {
        result += caseSetsABCLower.charAt(Math.floor(Math.random()* caseSetsABCLower.length));
      }
      for(var i = 0; i < lengthNum; i++) {
        result += caseSets123.charAt(Math.floor(Math.random()* caseSets123.length));
      }
      result=result.shuffle();
  }
  //lower special
  else if(lowerCase === true && uppperCase === false && numericCase === false && specialCase === true) {
      var randomNum1 = Math.floor(Math.random()*(lengthNum/2) +1);
      lengthNum -= randomNum1;
      for(var i = 0; i < randomNum1; i++) {
        result += caseSetsABCLower.charAt(Math.floor(Math.random()* caseSetsABCLower.length));
      }
      for(var i = 0; i < lengthNum; i++) {
        result += caseSetsSpecial.charAt(Math.floor(Math.random()* caseSetsSpecial.length));
      }
      result=result.shuffle();
  }
  //uppper num
  else if(lowerCase === false && uppperCase === true && numericCase === true && specialCase === false) {
      var randomNum1 = Math.floor(Math.random()*(lengthNum/2) +1);
      lengthNum -= randomNum1;
      for(var i = 0; i < randomNum1; i++) {
        result += caseSetsABCUpper.charAt(Math.floor(Math.random()* caseSetsABCUpper.length));
      }
      for(var i = 0; i < lengthNum; i++) {
        result += caseSets123.charAt(Math.floor(Math.random()* caseSets123.length));
      }
      result=result.shuffle();
  }
  //upper special
  else if(lowerCase === false && uppperCase === true && numericCase === false && specialCase === true) {
      var randomNum1 = Math.floor(Math.random()*(lengthNum/2) +1);
      lengthNum -= randomNum1;
      for(var i = 0; i < randomNum1; i++) {
        result += caseSetsABCUpper.charAt(Math.floor(Math.random()* caseSetsABCUpper.length));
      }
      for(var i = 0; i < lengthNum; i++) {
        result += caseSetsSpecial.charAt(Math.floor(Math.random()* caseSetsSpecial.length));
      }
      result=result.shuffle();
  }
  //num special
  else if(lowerCase === false && uppperCase === false && numericCase === true && specialCase === true) {
      var randomNum1 = Math.floor(Math.random()*(lengthNum/2) +1);
      lengthNum -= randomNum1;
      for(var i = 0; i < randomNum1; i++) {
        result += caseSets123.charAt(Math.floor(Math.random()* caseSets123.length));
      }
      for(var i = 0; i < lengthNum; i++) {
        result += caseSetsSpecial.charAt(Math.floor(Math.random()* caseSetsSpecial.length));
      }
      result=result.shuffle();
  }
  //lower upper num 
  else if(lowerCase === true && uppperCase === true && numericCase === true && specialCase === false) {
    var randomNum1 = Math.floor(Math.random()*(lengthNum/3) +1);
    lengthNum -= randomNum1;
    var randomNum2 = Math.floor(Math.random()*(lengthNum/2) +1);
    lengthNum -= randomNum2;
    for(var i = 0; i < randomNum1; i++) {
      result += caseSetsABCLower.charAt(Math.floor(Math.random()* caseSetsABCLower.length));
    }
    for(var i = 0; i < randomNum2; i++) {
      result += caseSetsABCUpper.charAt(Math.floor(Math.random()* caseSetsABCUpper.length));
    }
    for(var i = 0; i < lengthNum; i++) {
      result += caseSets123.charAt(Math.floor(Math.random()* caseSets123.length));
    }
    result=result.shuffle();
  }
    //lower upper special
    else if(lowerCase === true && uppperCase === true && numericCase === false && specialCase === true) {
      var randomNum1 = Math.floor(Math.random()*(lengthNum/3) +1);
      lengthNum -= randomNum1;
      var randomNum2 = Math.floor(Math.random()*(lengthNum/2) +1);
      lengthNum -= randomNum2;
      for(var i = 0; i < randomNum1; i++) {
        result += caseSetsABCLower.charAt(Math.floor(Math.random()* caseSetsABCLower.length));
      }
      for(var i = 0; i < randomNum2; i++) {
        result += caseSetsABCUpper.charAt(Math.floor(Math.random()* caseSetsABCUpper.length));
      }
      for(var i = 0; i < lengthNum; i++) {
        result += caseSetsSpecial.charAt(Math.floor(Math.random()* caseSetsSpecial.length));
      }
      result=result.shuffle();
    }
  //lower num special 
  else if(lowerCase === true && uppperCase === false && numericCase === true && specialCase === true) {
    var randomNum1 = Math.floor(Math.random()*(lengthNum/3) +1);
    lengthNum -= randomNum1;
    var randomNum2 = Math.floor(Math.random()*(lengthNum/2) +1);
    lengthNum -= randomNum2;
    for(var i = 0; i < randomNum1; i++) {
      result += caseSetsABCLower.charAt(Math.floor(Math.random()* caseSetsABCLower.length));
    }
    for(var i = 0; i < randomNum2; i++) {
      result += caseSetsSpecial.charAt(Math.floor(Math.random()* caseSetsSpecial.length));
    }
    for(var i = 0; i < lengthNum; i++) {
      result += caseSets123.charAt(Math.floor(Math.random()* caseSets123.length));
    }
    result=result.shuffle();
  }
  //upper num special 
  else if(lowerCase === false && uppperCase === true && numericCase === true && specialCase === true) {
    var randomNum1 = Math.floor(Math.random()*(lengthNum/3) +1);
    lengthNum -= randomNum1;
    var randomNum2 = Math.floor(Math.random()*(lengthNum/2) +1);
    lengthNum -= randomNum2;
    for(var i = 0; i < randomNum1; i++) {
      result += caseSetsABCUpper.charAt(Math.floor(Math.random()* caseSetsABCUpper.length));
    }
    for(var i = 0; i < randomNum2; i++) {
      result += caseSets123.charAt(Math.floor(Math.random()* caseSets123.length));
    }
    for(var i = 0; i < lengthNum; i++) {
      result += caseSetsSpecial.charAt(Math.floor(Math.random()* caseSetsSpecial.length));
    }
    result=result.shuffle();
  }
  //lower upper num special
  else if(lowerCase === true && uppperCase === true && numericCase === true && specialCase === true) {
    var randomNum1 = Math.floor(Math.random()*(lengthNum/4) +1);
    lengthNum -= randomNum1;
    var randomNum2 = Math.floor(Math.random()*(lengthNum/3) +1);
    lengthNum -= randomNum2;
    var randomNum3 = Math.floor(Math.random()*(lengthNum/2) +1);
    lengthNum -= randomNum3;
    for(var i = 0; i < randomNum1; i++) {
      result += caseSetsABCLower.charAt(Math.floor(Math.random()* caseSetsABCLower.length));
    }
    for(var i = 0; i < randomNum2; i++) {
      result += caseSetsABCUpper.charAt(Math.floor(Math.random()* caseSetsABCUpper.length));
    }
    for(var i = 0; i < randomNum3; i++) {
      result += caseSets123.charAt(Math.floor(Math.random()* caseSets123.length));
    }
    for(var i = 0; i < lengthNum; i++) {
      result += caseSetsSpecial.charAt(Math.floor(Math.random()* caseSetsSpecial.length));
    }
    result=result.shuffle();
  }
  else {
    result="didnt work";
  }
  return result;
}

var generatePassword = function() {
  var result = ""; //
  window.alert("test");
  var lengthNum = getLength();
  var lowerCase = getCharacterType("Lowercase Letters");
  var uppperCase = getCharacterType("Upppercase Letters");
  var numericCase = getCharacterType("Numeric Character");
  var specialCase = getCharacterType("Special Character");
  while(lowerCase === false && uppperCase === false && numericCase === false && specialCase === false) {
    window.alert("Please make sure one type is selected")
    lowerCase = getCharacterType("Lowercase Letters");
    uppperCase = getCharacterType("Upppercase Letters");
    numericCase = getCharacterType("Numeric Character");
    specialCase = getCharacterType("Special Character");
  }
  //double check critea
  var check = window.confirm(
    "Your password critea is: " + 
    "\nPassword Length is: " + lengthNum +
    "\nLowercase Letters is: " + lowerCase +
    "\nUppercase Letters is: " + uppperCase +
    "\nNumeric Characters is: " + numericCase +
    "\nSpecial Characters is: " + specialCase +
    "\nAre you sure you want this Click OK for YES and Cancel for NO "
  );
  if(check === false) {
    result = generatePassword();
  }
  result = passwordGenerate(lengthNum, lowerCase, uppperCase, numericCase, specialCase);
  return result;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);