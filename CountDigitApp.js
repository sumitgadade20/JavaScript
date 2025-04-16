let no=12123123;




for(let i=0;i<=9;i++)
{let count=0;
 let temp=no;
	while(temp>0)
	{
		if(temp%10==i)
		{
		  count++;
		}
		temp=parseInt(temp/10);
	}
	if(count>0)
	{
		console.log(i+" Count --> "+count);
	}

}