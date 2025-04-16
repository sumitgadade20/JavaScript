let no=12345;
let temp=no;
let mul=1;
let last=no%10;
while(no>=10)
{
	mul=mul*10;
	no=parseInt(no/10);
}
let mid=parseInt((temp%mul)/10);
temp=(last*mul)+(mid*10)+no;

console.log(temp);