let input=prompt("Enter NO");
let num=parseInt(input);

for(let i=1;i<=num;i++)
{
	let count=0;
	for(let j=1;j<=i;j++)
	{
		if(i%j==0)
		{
			count++;
		}
	}
	if(count==2)
	{
		console.log(i);
	}
}

