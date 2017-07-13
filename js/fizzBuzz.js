// for every number divisible by 3 output fizz
// for every number divisible by 5 output buzz
// for every number divisible by 3 and five output fizz buzz

name = { firstName:"casadaro"}
firstName = ["casadaro","TheReal"]
let number = 102 
const fizzNumber = 3
const buzzNumber = 5
const fizz ="Fizz"
const buzz = 'Buzz'
const fizzBuzz = `FizzBuzz`

function fizzle(){  //This is a function
    for(i = 1; i <= number; i++){
       // console.log(`${i}`)

       if(i % fizzNumber == 0 && i % buzzNumber == 0){
            console.log(`${i} : ${fizz} ${buzz}`)
        } else if(i % fizzNumber == 0){
            console.log(`${i} : ${fizz}`)
        } else if(i % buzzNumber == 0){
            console.log( i + " : "+ "buzz")
        } 
        
        else{
            //console.log(`${i}`)
        }
        
    }
    
}

fizzle(number)
//console.log(firstName[0])

/** This is a 
 * multi-line
 * comment
 */