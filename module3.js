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
var mySelf={firstName:"Md.Ibrahim", lastName:"khalil",age:"29",test:"5555"};
for (props in mySelf)
{
    console.log(mySelf[props]);
}