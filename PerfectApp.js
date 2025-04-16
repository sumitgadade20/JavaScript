let no=prompt("Enter No");
let num=no;
let sum=0;
for(let i=1;i<no;i++)
{
	if(no%i==0)
	{
		sum=sum+i;
	}
}
console.log(sum);
console.log(num);
if(sum==num)
{
	console.log("Its Perfect");
}
else
{
 	console.log("Its Not Perfect");	
}