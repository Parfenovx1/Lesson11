function Animal(sex, age){
  this.sex = sex;
  this.age = age;
}

Animal.prototype.run = function(){
  if(this.age > 5)
    {
      console.log("I'm running!")
    }
}

Animal.prototype.jump = function(){
  if(this.age < 5)
    {
      console.log("I'm jumping!")
    }
}

function Mammal(sex, age, height){
  Animal.call(this, sex, age)
  this.height = height;
}

Mammal.prototype = Object.create(Animal.prototype)

Mammal.prototype.givesMilk = function(){
  if(this.sex == "female"){
    console.log("I'm giving milk!")
  }else{
    console.log("I'm not giving milk!")
  }
} ;

function Raccoon(sex, age, height, name){
  Mammal.call(this, sex, age, height)
  this.name = name;
}

Raccoon.prototype = Object.create(Mammal.prototype)

Raccoon.prototype.steal = function(){
  console.log("I'm stealing!")
} ;
var output = new Mammal("male", 4, 50, "Jora")
console.log(output);
console.log(output.givesMilk());
console.log(output.jump());
var output1 = new Raccoon("female", 10, 50, "Jora");
console.log(output1);
console.log(output1.run());
console.log(output1.jump());
console.log(output1.givesMilk());
console.log(output1.steal());
