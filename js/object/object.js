//The object has properties and methods. The object has no index. We refer to the object through properties.

let myObj = {
  name: "Sara",
  age: 27,
  height: 157,
  print: function(){
    console.log(this.name)
    }
 }

//Reference to the object

myObj.print();

//or

console.log(myObj.height);

//adding a new property

myObj.surname = "Everdeen";
myObj.size = "XS";

//removing properties

delete myObj.surname;

//Prototype

/*Each object is built on the basis of a prototype. 
A prototype is an object that generally describes the appearance of objects of a given type. 
If JavaScript does not find a property or method in our object, it searches for them in the prototype. 
The last level of search is Grand Master.*/

//The object class

/*The object class describes how objects will be created based on it.
We can create a class using the usual function. 
We write the new constructor with a capital letter.*/

function CarNew (speed, driver){
  this.speed = speed;
  this.driver = driver;
  this.print = function(){
    console.log(this.speed + this.driver)
  }
}

let carNewTwo = new CarNew(50, "Audi");
console.log(carNewTwo);


function SuperObj(width, height){
  this.width = width;
  this.height = height;
}

SuperObj.prototype.print = function (){
     console.log(this.width + ' ' + this.height);
}

let objOne = new SuperObj(200, 500);
let objTwo = new SuperObj(300, 500);
let objThree = new SuperObj(100, 500);

objOne.print();

//Heirdom - for example:

function Animal (name,age){
    this.name = name;
    this.age = age;
    this.type = 'animal';
}

Animal.prototype.eat = function (){
    return this.name + ' - eat';
}

function Cat (name){
    this.name = name;
    this.type = 'cat';
}

Cat.prototype = Object.create(Animal.prototype);

let max = new Cat ('Max');

console.log(max.eat());

//Factory - this is the place that some objects create for us using a pattern.

let Car = function(name){
    
    let carName = name;
    
    if (typeof carName === undefined) {
        carName = '';
    }

  let equipment = function() {
        if (carName==='Audi'){
            return 'Premium class'
        } else {return 'Standard class'}
    }
  
  let carNew = {
        name: carName,
        equipment: equipment,
        print: function() {
            console.log(carName);
        }
    }

  return carNew;
}

let audi = Car ('Audi')

//Call - in addition to calling the function, the call method gives us very important functionality. 
//In its parameter, we can pass an object that will be substituted for this function.

let sandra = {
    name: 'Sandra',
    surname: 'Nowacka',
    age: 25,
    print: function(){
        console.log('Name: ' + this.name + ' Surname: ' + this.surname + ' Age: ' + this.age)
                     }
}

sandra.print();

let angelica = {
    name: 'Angelica',
    surname: 'Shepard',
    age: 29
  
}

sandra.print.call(angelica);
