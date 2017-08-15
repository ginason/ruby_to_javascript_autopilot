var apples = 14;
console.log(apples);
console.log('I have  '+ apples +'  apples.');

var materials = ['wood', 'metal', 'stone'];
console.log(materials);
var words = {
  'elephant': 'The world\'s largest land mammal.',
  'school': 'A place of learning',
  'ice cream': 'A delicious milk-based dessert.'
}

console.log(words);

var num = 16

if (num > 10) {
  console.log(num + '   is greater than 10');
}
else if (num == 10) {
  console.log(num + '   is exactly 10.');
}
else {
  console.log(num + '   must be less than 10');
}

for(i=1; i <= 10; i++){
  console.log('Doing the same thing over and over.' + i);
}

var base = 5;
for(num=0; num <=20; num++){
  console.log(num + base);
}

var total = 0;
for(num=1; num <= 100; num++){
  total += num
}
console.log(total);

for(num = 3; num <= 15; num++){
  if (num > 9){
    console.log("You can get on the rollercoaster");
  }
  else {
    console.log("You are too short to ride this rollercoaster.");
  }
}

var containers = ['purse', 'wallet', 'backback'];

for(i=0; i < containers.length; i++){
  console.log(containers[i]);
}

function hello_world(){
  console.log("Hello world!")
}
hello_world()

function add(first_num, second_num){
  console.log(first_num + second_num)
}

add(1, 2)
