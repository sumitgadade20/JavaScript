let arr=[10,20,30,40,50];

let skey=20;

let l=0;let r=arr.length-1;

while(l<=r)
{
    let mid=(l+r)/2;

	if(arr[mid]===skey)
	{
	console.log(arr[mid]);
	break;
	}

	else if(arr[mid]<skey)
	{
		l+=1;
	}

	else
	{
		r-=1;
	}

}