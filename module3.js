// let poorCountry=['Bangladesh','Srilanka'];
// let richCountry=[...poorCountry,'America','Canada','Italy'];
// console.log(richCountry);

// practice2:

// function show(...numbers){
//     let sum=0;
//     for(let i of numbers){
//         sum += i;
//     }
//     console.log("Sum = "+sum)
//     }
//     show(1,2,2,6,8,2,6,9,2,66);

//practice3

// var nameArray=['Kamal','Tomal','Jamal'];
// for (let oneName of nameArray)
// {
//     console.log(oneName);
// }

//practice 4

/*const mySelf = {firstName: "Md.Ibrahim", lastName: "khalil", age: "29", test: "5555"};
for (let props in mySelf)
{
    console.log(mySelf[props]);
}*/
/*const array1= [1,2,3,4,5,9,8,10]
const array2=[5,6,93,96,39,66,6]

const array3=[...array1,...array2]

const copyArray=array3;
copyArray.push(1000)


console.log(array3)
console.log("======>",copyArray)*/


/*
function add(...numbers) {
    return numbers.reduce((acc, val) => acc + val,5);
}
console.log(add(1,3,5))*/


/*const add= (...numbers) =>{
    return numbers.reduce((acc,val)=>acc+val,0)
}
console.log(add(2,3,6))*/

function  add(...numbers) {
    return numbers.reduce((acc,val)=>acc+val,0)

}
console.log(add(1,3))