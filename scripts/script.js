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

// DECLARING OBJECT. USING OBJECT ELEMENTS IN A TEMPLATE LITERAL.

const person = {
    name: ["bob", "smith"],
    age: 3,
    gender: "male",
    hobbies: ["music", "skiing"],
  };
  
  
console.log(`My name is ${person.name[0]} ${person.name[1]}. I am interested in ${person.hobbies[0]} and ${person.hobbies[1]}.`);

// FOR LOOP IN AN OBJECT. (ITERATION PRINTS OBJECT KEY-VALUES)
for(let key in person)
{
   console.log(key);
   console.log(person[key]);
}

// DECLARED OBJECTS. ITERATING THROUGH ARRAY OF OBJECTS TO PRINT ELEMENTS MEETING IF CONDITION.
  
  let student1 = {
  ID: "A00022",
  GPA: 3.0,
  program: "CIT"
  };
  let student2 = {
  ID: "A01000",
  GPA: 3.1,
  program: "CST"
  };
  let student3 = {
  ID: "A00114",
  GPA: 3.2,
  program: "CIT"
  };
  let students = [student1, student2, student3];
  
  let counter = 0
  for(let student of students)
  {
    if (student["GPA"]>3.0 && student["program"] == "CIT")
      {
        counter++;
        console.log(student);
      }
  }
  console.log(counter)