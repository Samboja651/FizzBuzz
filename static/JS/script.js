const h2 = document.querySelector(".p1");
// console.log(h2)

let i = 0
for(;i < 101; i++){
    // console.log(i)
    // divisible by both 3 and 5
    if(i % 3 == 0 && i % 5 == 0){
         console.log("FizzBuzz");
    }
    // divisible by 5
    else if(i % 5 == 0){
        console.log("Buzz");
    }
    // divisible by 3
    else if(i % 3 == 0){
        console.log("Fizz");
    }
    // not divisible
    else{
        console.log(i);;
    }
    if(i==100){
        break
    }
}
// console.log(fizzBuzz(i))
