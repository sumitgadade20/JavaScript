/*
object
const product={
ProductName:'pen',
ProductPrice:250,
rating:4,
discount:50,
};

console.log(product);

// Arethmetic Operator
let a=10;
let b="20";
console.log("a=10  b=20");
// console.log("A + B =",a+b);
// console.log("A * B =",a*b);
// console.log("A / B =",a/b);
// console.log("A % B =",a%b);

//Comarision Operatior

console.log("a==b ", a!==b);*/

//Conditional Statement

// let a=10;

// if(a%2==0){
// console.log("No Is Even");
// }
// else{
// console.log("No Is Odd");
// }

// alert("Heloo");

// prompt("Hello");
// console.log(name);


/*
let num=prompt("Enter A Number");
if(num%5===0)
{
    console.log("The Number Is divided by ",num);
}
else
{
    console.log("The Number Is Not Diveded by ",num)
}*/

/*let mark=prompt("Enter A Student Marks");

if(mark>=80 && mark<=100)
{
    console.log("Grade A");
}
else if(mark>=70 && mark<=79)
{
    console.log("Grade B");
}
else if(mark>=60 && mark<=69)
{
    console.log("Grade c");
}
else{
    console.log("Fail");
}*/


//For loop

//Prime No
// let no=prompt("Enter NO");
// for(let i=2;i<=no;i++)
// {   let count=0;
//     for(let j=1;j<=i;j++)
//     {
//         if(i%j==0)
//         {
//             count++;
//         }
//     }
//     if(count===2)
//     {
//         console.log("Prime No ",i);
//     }
// }


// Sum 1 to n number Natural

// let sum=0;
// let no=5;
// for(let i=1;i<=no;i++)
// {  
//       sum=sum+i;
// }
// console.log(sum);
// console.log("Loop Has Ended");  


// let i=1;
// while(i<=10)
// {
//     console.log(i);
//     i++;
// }

// let i=1;
// do{
//     console.log("Sumit");
//     i++;
// }while(i<=10)

// for of loop

// let str=prompt("Enter A String");
// let len=0;
// for(let i of str)
// {
//     console.log(i);
//     len++;
// }
// console.log("lenght ",len);

// for in loop 
// let student = {
//     name :"Sumit",
//     id:1,
//     cgpa:8.5,
//     ispass:true,
// };

// for(let i in student)
// {
//     console.log(i);
//     console.log(typeof("i"));
    
// }


// for(let i=1;i<=100;i++)
// {
//     if(i%2!==0)
//     {
//         console.log("Even No : ",i);
//     }

// }


//Passord Programm

// let pass=123;
// let password=prompt("Enter A Right Password");

// while(pass!=password){
//     password=prompt("Enter Right Password");
// }
// console.log("Password Is Unlocked");


// let str1="Sumit";
// let str2='progrramming';

// console.log(str1[3]);

// let obj={
//     name:"pen",
//     price:50,
//     };
//     console.log(`the price of ${obj.pen} is ${obj.price} ${5+5+5}`);

// let str1="Sumit";
// let newstr=str1.toUpperCase();
// console.log(newstr);
// newstr=newstr.toLowerCase();
// console.log(newstr);

// let str='1234567';
// console.log(str.slice(1,3));
// let str1="Sumit";
// document.write(str1);

// function show ()  {
//     alert("Hello");
// }

// alert("hello india");
// prompt("Enter Value");



    // let result=['mumbai','pune','nashik','arg','bhal'];
    // result.sort();
    // for(let i=0;i<result.length;i++)
    // {
    //     console.log("City Names: "+result[i]);
    // }

    // function findLargest(arr) {
    //     let max = arr[0];
    //     for (let i = 1; i < arr.length; i++) {
    //         if (arr[i] > max) {
    //             max = arr[i];
    //         }
    //     }
    //     return max;
    // }
    // console.log(findLargest([10, 5, 20, 8])); // Output: 20
    
// let arr=[10,20,30,40,50];
// let max=arr[0];
// for(let i=0;i<arr.length;i++)
// {
//     if(arr[i]>max)
//     {
//         max=arr[i];
//     }
// }
// console.log("Largest Number: ",max);


// function findLargest(arr)  //----> parametre used in function
// {
//     let max=arr[0];
//     for(let i=0;i<=arr.length;i++)
//     {
//         if(arr[i]>max)
//         {
//             max=arr[i];
//         }
//     }
//     return max;
// }
// console.log(findLargest([10,30,50,40]));





// function reverseArray(arr) {
//     let l = arr.length - 1;    
//     for (let i = 0; i < arr.length / 2; i++) {
//         let temp = arr[i];
//         arr[i] = arr[l];
//         arr[l] = temp;
//         l--; // Move the pointer towards the center
//     }
//     return arr; // Return the reversed array
// }

// let a = [10, 20, 30, 40, 50];
// let reversedArray = reverseArray(a); // Call function and store result

// // Print the reversed array
// for (let i = 0; i < reversedArray.length; i++) {
//     console.log(reversedArray[i]);
// }




//Billing Application

// function show()
// {
//     let qty=document.getElementById("qty").value;
//     let rate=document.getElementById("rate").value;
//     let total=Number(qty)*Number(rate);

//     document.getElementById("h").innerHTML="Product Bill Is "+total;

//     console.log("Total Bill Is", total);
// }



//Syncronous and Asycronous

// console.log("one");
// console.log("two");
// console.log("three");

// setTimeout(()=>{
//     console.log("Hello");
// },4000);

// console.log("Four");
// console.log("Five");

// //callbacks
// function sum(a,b)
// {
//     console.log(a+b);
// }
// function calculator(a,b,sumCallback){
//     sumCallback(a,b);
// }
// calculator(5,6,sum);


