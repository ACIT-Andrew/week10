for (i=2; i<=1024; i=i*2){
    console.log(i);
}

let a = 2;
while (a<=1024){
  console.log(a);
  a=a*2;
}

do{
  let input = prompt("what is your name?");
  console.log(Number(input));
}
while(!isNaN(Number(input)))