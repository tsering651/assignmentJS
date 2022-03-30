//function to reverse a number

function reverseNum() {
    var rev = 0;
var num = 123456;
//converting the number into a string
rev = Number(String(num).split('').reverse().join(''));

console.log("Reverse number : "+rev);
    
}
reverseNum();