let no=121;
let temp=0;
let num=no;
while(no!=0)
{
	let rem=no%10;
	temp=temp*10+rem;
	no=Math.floor(no/10);	
}
console.log(num);
if(temp==num)
{
	console.log("Pallinndrome No");
}
else{
	console.log("NOt");
}
console.log(temp);