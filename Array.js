
//Reverse Array
let b=[50,40,30,20,10];
let l=b.length-1;
console.log(b,"After Reverse");
for(let i=0;i<b.length/2;i++)
{
    let temp=b[i];
    b[i]=b[l];
    b[l]=temp;
    l--;
}
for(let i=0;i<b.length;i++)
{
    console.log(b[i]);
}

let arr=[1,3,4,2,3,4,2,6,9];
console.log(arr);
console.log("Duplicates in Array");
for(let i=0;i<arr.length;i++)
{
    for(let j=1+i;j<arr.length;j++)
    {
        if(arr[i]===arr[j])
            {
                console.log(arr[i]);
            }        
    }  
}

// Duplicate Remove
 
    let a=[1,3,4,2,3,4,2,6,9];
    let count=1;
    a.sort();
    for(let i=1;i<a.length;i++)
    {
        if(a[i]!=a[i-1])
        {
            a[count++]=a[i];
            
        }
     }
     console.log("Afeter Removing");
    for(let i=0;i<count;i++)
    {
        console.log(a[i]);
    }



// -------------------------------------------->----------------


// function removeDuplicates(arr) {
//     return [...new Set(arr)];
// }

// // Example
// console.log(removeDuplicates([1, 2, 3, 1, 5, 2])); // [1, 2, 3, 5]


//pallindrome array

console.log("Pallinrom Number in Array");
let p = [1, 2, 3, 2, 4];
let left = 0;
let right = p.length - 1;
let isPal = true;  // Assume palindrome initially

while (left < right) { 
    if (p[left] !== p[right]) {  
        isPal = false;  // Not a palindrome
        break;  // No need to check further
    }
    left++;
    right--;
}

console.log(isPal); // Output: true


//Missing Element
console.log("Missing Element");
let m=[1,4,6,8,9];
m.sort( (a,b) => a-b);
for(let i=0;i<m.length-1;i++)
{
    let first=m[i];
    let last=m[i+1];
    for(let j=first+1;j<last;j++)
    {
        console.log(j);
    }
}

//Moves Zero 
console.log("Moves Zero");
let z=[1,0,3,4,0,2,0];
let index=0;
for(let i=0;i<z.length;i++)
{
    if(z[i]!==0)
    {        
       z[index++]=z[i];
    }
}
for(let i=index;i<z.length;i++)
{
        z[i]=0; 
}
for(let i=0;i<z.length;i++)
{
    console.log(z[i]);
}

// Second Largest
console.log("Second Largest");
let sl=[1,3,8,4,5];
sl.sort(( a,b)=>a-b);
let max=0;
for(let i=0;i<sl.length;i++)
{
    if(sl[i]>max)
    {
        max=sl[i];
    }
}
let max2=0;
for(let i=0;i<sl.length;i++)
{
    if(sl[i]<max)        
    {
       if(sl[i]>max2)
        {
            max2=sl[i];
        } 
    }
}
console.log(max2);

//intersection Array
console.log("InterSection Array");

let i1=[1, 2, 3, 4];
let i2=[3, 4, 5, 6];

i1.sort((a,b)=>a-b);
i2.sort((a,b)=>a-b);
let inter=0;
for(let i=0;i<i1.length;i++)
{
    for(let j=0;j<i2.length;j++)
    {
        if(i1[i]===i2[j] && inter!==i2[j])
        {
            console.log(i2[j]);
            inter=i2[j];
        }
    }
}



