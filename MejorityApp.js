let arr=[1,2,3,1,1];
let count=0;
let temp=0;
for(let i=0;i<arr.length;i++)
{
	for(let j=i+1;j<arr.length;j++)
	{
		if(arr[i]===arr[j])
		{
			count++;
			temp=arr[j];
		}
	}
}
	if(count>arr.length/2)
	{
		console.log("The Mejority Element Is: ",temp);
	}
