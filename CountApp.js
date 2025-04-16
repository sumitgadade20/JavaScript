let no=12345;
let temp=no;
let count=1;
while(temp!=0)
{
	temp=Math.floor(temp/10);
	count++;
}
console.log(count);