let no=1234;
let temp=0;

while(no!=0)
{
 let rev=no%10;
 temp=temp*10+rev;
 no=Math.floor(no/10);
}
console.log(temp);

