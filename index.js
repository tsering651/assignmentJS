


//function to check number of odd and even numbers in a array
function checkOddandEven() {
    //count1 is to check number of even numbers
    var count1=0;

    //count2 is to check number of odd numbers
    var count2=0;
    var myArray=[2,4,7,9,10];

    //for loop for iterating the array
    for(var i=0;i<myArray.length;i++){
        if(myArray[i]%2 ==0){
            count1++;
        }
       else{
           count2++;
       }
    }
    // print("Number of even numbers is " + count1);
    // print("Number of odd numbers is " + count2);
    console.log(count1);
    console.log(count2);


    
}
//calling the function
checkOddandEven();