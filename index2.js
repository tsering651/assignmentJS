function checkmaxAndMin() {

    //array
    var number=[3,56,12,0,-1];
    var max=number[0];
    var min=number[0];
    for(var i=1;i<number.length;i++){

        if(number[i]>max){
            max=number[i];
        }
        else{
            min=number[i];
        }

    }
    console.log(max);
    console.log(min);
    
}
checkmaxAndMin();