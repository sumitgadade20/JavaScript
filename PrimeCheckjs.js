let num=prompt("Enter No");
let count=0;
for(let i=2;i<=num;i++)
{
	if(num%i==0)
	{
		count++;
	}
}

	if(count==2)
	{
		console.log("PrimeNO");
	} 
	else
	{
		console.log("NotPrime");
	}
