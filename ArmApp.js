let no=prompt("Enter No");


let temp=no;
let count=0;
while(temp!=0)
{
  	count++;
	temp=parseInt(temp/10);
}
temp=no;
let arm=0;
while(temp!=0)
{
 let rem=temp%10;
 arm=arm+Math.pow(rem,count);
 temp=parseInt(temp/10);
}
if(arm==no)
{
	console.log("ArmStrong");
}
else
{
	console.log("Not ArmStrong");
}


