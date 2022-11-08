for (i=2; i<=1024; i=i*2){
    console.log(i);
}

let a = 2;
while (a<=1024){
  console.log(a);
  a=a*2;
}

// DO/WHILE LOOP

do{
  let input = prompt("what is your name?");
  console.log(Number(input));
}
while(!isNaN(Number(input)));

alert(`Hello ${input}`)

// ARRAY METHODS

let fruits = ['Apple', 'Banana'];

fruits.push('Orange');
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.unshift('Mango');
console.log(fruits);

fruits.shift();
console.log(fruits);