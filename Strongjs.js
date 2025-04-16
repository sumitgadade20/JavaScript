let no=prompt("Enter No");

let temp=no;
let sum=0;
while(no!=0)
{
	let l=parseInt(no%10);
	let fact=1;

	console.log(l);
	for(let i=1;i<=l;i++)
	{
		fact=fact*i;	
	}
	sum=parseInt(sum+fact);
	no=Math.floor(no/10);
}

console.log(sum);
if(sum==temp)
{
	console.log("Strong No");
}

else
{
	console.log("Not Strong");
}