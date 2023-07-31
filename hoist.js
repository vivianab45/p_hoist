// // GIVEN
// console.log(example);
// var example = "I'm the example!";
// // // // AFTER HOISTING BY THE INTERPRETER
// // // // var example;
// // // // console.log(example); // logs undefined
// // // // example = "I'm the example!";

// // console.log(example);
// // let example = "I'm the example!";    


// 1
// console.log(hello);                                   
// var hello = 'world';                                 
// // // // AFTER HOISTING BY THE INTERPRETER
// var hello;
// console.log(hello);//logs undefined
// hello='world'

//2
// var needle = 'haystack';
// test();
// function test(){
//     var needle = 'magnet';
//     console.log(needle);
// }
// // // // AFTER HOISTING BY THE INTERPRETER
// var needle = 'haystack';
// function test(){
//     var needle = 'magnet';
//     console.log(needle);
// }
// test();

//3
// var brendan = 'super cool';
// function print(){
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan);
// // // // AFTER HOISTING BY THE INTERPRETER
// the function doesn't get called, so 'super cool' is console logged

//4
// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
//     food = 'half-chicken';
//     console.log(food);
//     var food = 'gone';
// }
// // // // AFTER HOISTING BY THE INTERPRETER
// var food = 'chicken';
// function eat(){
//     var food;
//     food = 'half-chicken';
//     console.log(food);
//     food = 'gone';
// }
// console.log(food);
// eat();

//5
// mean();
// console.log(food);
// var mean = function() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);
//// AFTER HOISTING BY THE INTERPRETER
///  neither function is ran because mean() is not a function and var mean=function() is anchored


//6
// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
//     genre = "rock";
//     console.log(genre);
//     var genre = "r&b";
//     console.log(genre);
// }
// console.log(genre);

//// AFTER HOISTING BY THE INTERPRETER
// var genre;
// console.log(genre);
// genre="disco";
// function rewind() {
//     var genre;
//     genre = "rock";
//     console.log(genre);
//     genre = "r&b";
//     console.log(genre);
// }
// rewind();
// console.log(genre);

// 7
// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
//     dojo = "seattle";
//     console.log(dojo);
//     var dojo = "burbank";
//     console.log(dojo);
// }
// console.log(dojo);
//// AFTER HOISTING BY THE INTERPRETER
// dojo = "san jose";//stays put
// function learn() {
//     dojo = "seattle";
//     var dojo;
//     console.log(dojo);
//     dojo = "burbank";
//     console.log(dojo);
// }
// console.log(dojo);
// learn();
// console.log(dojo);

//8
// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
// function makeDojo(name, students){
//     const dojo = {};
//     dojo.name = name;
//     dojo.students = students;
//     if(dojo.students > 50){
//         dojo.hiring = true;
//     }
//     else if(dojo.students <= 0){
//         dojo = "closed for now";
//     }
//     return dojo;
// }

//// AFTER HOISTING BY THE INTERPRETER
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));








