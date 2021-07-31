//Write a function that takes an 
//array of numbers and returns the largest (without using Math.max())

//Write a function that takes an array of words and a 
//character and returns each word that has that character present.
var numbers = [3,4,74,12,2314,34];
numbers = numbers.sort();

console.log(largest(numbers));

function largest(numbers){
    numbers.sort(function(a, b){return b-a;});
    var hightNum = numbers[0];
    return hightNum;
}

// Write a function that takes an array of words and a
//  character and returns each word that has that character present.
var lettersWithStrings = ["#3", "$$$", "C%4!", "Hey!", "!"]; // => ["C%4!", "Hey!"]

function checkForLetters(list){
    var regExp = /[a-zA-Z]/g;
    var wordsWithLetter=[];
    for(var word of list){
        if(regExp.test(word)){
            wordsWithLetter.push(word);
          } 
    }
    return wordsWithLetter;
}

console.log(checkForLetters(lettersWithStrings));

console.log(isDivisible(4, 2)); // => true
console.log(isDivisible(9, 3)); // => true
console.log(isDivisible(15, 4)); // => false

function isDivisible(num1,num2){
    if(num1%num2==0){
        return true;
    }
    else return false;
}