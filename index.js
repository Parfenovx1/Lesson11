class Animal{
  constructor(sex, age){
    this.sex = sex;
    this.age = age
  }
  jump(){
    if(this.age < 5)
    {
      console.log("I'm jumping!")
    }
  }
  run(){
    if(this.age > 5)
    {
      console.log("I'm running!")
    }
  }
}

class Mammal extends Animal {
  constructor(sex, age, height){
    super(sex, age);
    this.height = height;
  }
  givesMilk(){
    if(this.sex == "female"){
      console.log("I'm giving milk!")
    }else{
      console.log("I'm not giving milk!")
    }
  }
}

class Raccoon extends Mammal {
  constructor(sex, age, height, name){
    super(sex, age, height);
    this.name = name;
  }
  steal(){
    console.log("I'm stealing!")
  }
}

var output = new Raccoon("female", 10, 50, "Jora");
console.log(output);
console.log(output.run());
console.log(output.jump());
console.log(output.givesMilk());
console.log(output.steal());