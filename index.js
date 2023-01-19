//const person = {
   //firstName:"John",
   //lastName: "Doe",
    //fullName: function () {
     // return this.firstName + " " + this.lastName;
  //  }
 //}
  
  // This will return "John Doe":
  //console.log(person.fullName());

//code toprint even numbers in for loop

//for(let i=0; i<=10;i++)
 // {
 // if(i%2==0){
//console.log (i)
 // }
//  }
   //code  for odd
//for(let j=0; j<=20; j++)
//  {
 //  if (j%2==!0)
 //   {
  //console.log(j)  
// }
 // }
//code to print squares of up to 10

//for (let m = 0; m < 10; m++){
  //let row1 = '';
 //for (let n = 0; n < 10; n++){
  //  row2  = '*';
 // }
  //console.log(row1 * row2);
//}
//function that returns another function,i.e take 3 roles that //are done in a company i.e name then say work he or does

//code that checks a certain string in a string

function countSubstrings(string,substring){
let count = 0;
let i = 0;
  while(i < string.length){
      let index = string.indexOf(substring, i);
      if (index !== -1) {
      count++;
      i = index + 1;
    } else {
      break;
    }
  }//end
  return count; //solution
  }
letmystring= "creativity is intelligence and also is having fun ";
let substring= "i";
let result=countSubstrings(letmystring,substring);
console.log("the number of is in my string=;");
console.log(result);

//below code is made efficient
function countSubstrings1(string1, substring1){
  let count = 0;
  let index = 0;
  while ((index = string1.indexOf(substring1, index)) !== -1) {
    count++;
    index += substring1.length;
  }
  return count;
}
letmystring1= "creativity is intelligence and also is having fun ";
let substring1= "a";
let result1=countSubstrings(letmystring1,substring1);
console.log("the number of a in my string=;");
console.log(result1);

