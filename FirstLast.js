let num=1234;
let temp=num;

let last=num%10;

while(num>=10)
{
	num=Math.floor(num/10);
}
console.log("First: "+num);
console.log("Last: "+last);
let sum=num+last;
console.log(sum);