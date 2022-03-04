import Teacher, { promote }  from "./teacher";
// import React, { Component } from 'react';

/** let and var difference */
// var --> scope to function
// let --> scope to block
console.log("****let and var*****");
function sayHello(){
  for ( var i = 0; i < 5; i++){
    console.log(i);
  }
  console.log(i);
}
sayHello();

/** this keyword */ 
console.log("****this keyword*****");
const person = {
  name: 'Mosh',
  walk() {
    console.log(this);
  }
}

person.walk(); // return the object itself {name: 'Mosh', walk: f}
const walkFunction = person.walk;
console.log(walkFunction);
walkFunction(); // returns the Window object or undefined in strict mode

const walkFunction2 = person.walk.bind(person);
walkFunction2();  // return the object itself {name: 'Mosh', walk: f}


/** Arrow Function */
console.log("****Arrow Function*****");
const jobs = [
  { id: 1, isActive: true },
  { id: 2, isActive: true },
  { id: 3, isActive: false }
];

const activeJobs1 = jobs.filter( function(job) { return job.isActive; })
const activeJobs = jobs.filter( job => job.isActive);
console.log(activeJobs1);
console.log(activeJobs);

/** Arrow Function does not rebind the this keyword */
console.log("****Arrow Function and this*****");
const dog = {
  bark() {
    console.log("this", this);
  }
};
dog.bark(); // return the dog object

const cat = {
  miao() {
    setTimeout(function() {
      console.log('this', this); // this callback function is a standalone funtion
    }, 100); 
  }
};
cat.miao(); // return the Window object

const fish = {
  swim(){
    let self = this;
    setTimeout(function() {
      console.log('this', self); // this callback function is a standalone funtion
    }, 100); 
  }
};
fish.swim(); // return the fish object

const snake = {
  bite(){
    setTimeout( () => {
      console.log('this', this );
     }, 100 );
  }
};
snake.bite();  // return the snake object


/** Array.map() */
console.log("**** Array.map() *****");
const colors = ['red', 'green', 'blue'];
const items = colors.map( color => `<li>${color}</li>`);
console.log(items);

/** Object destructing */
console.log("**** Object destructing *****");
const address = {
  street: 'Briawood Drive',
  city: 'Ann Arbor',
  country: 'America'
};

const { street : myst, city : mycity } = address;
console.log( myst + ', ' + mycity  );

/** Spred Operator */
console.log("**** Spred Operator *****");
const first = [ 1, 2, 30];
const second = [ 'a', 'b', 'c'];
const combined = first.concat(second);
console.log(combined);

const third = [ 34, 12, 98];
const fouth = [ 88, 'ee', false];
const combined2 = [...third, 'new!', ...fouth, 'end'];
console.log(combined2);

const clone = [...first];
console.log(first);
console.log(clone);

const object1 = { name: 'Mosh', gender: 'female'};
const object2 = { job: 'Instructor'};

const combined3 = {...object1, ...object2, location: 'Italy'};
console.log(combined3);

const clone2 = { ...combined3 };
console.log(clone2);

/** Classes */
console.log("*******classes********");
class Citizen {
  constructor(name) {
    this.name = name;
  }
  vote(){
    console.log(`${this.name} is voting`);
  }
}
const john = new Citizen('john');
john.vote();

/** Inheritance */
console.log("*******inheritance********");
class Animal  {
  constructor(name){
    this.name = name;
    console.log(`An animal called ${name} is created.`);
  }

  breath() {
    console.log(`${this.name} is breathing`);
  }
}

class Dog extends Animal {
  constructor(name, color){
    super(name);
    this.color = color;
    console.log(`${this.name} is ${this.color} Dog`)
  }

  bark() {
    console.log(`${this.name} is barking`);
  }
}

const max = new Dog('Max', 'brown');
max.breath();
max.bark();

/** Modules */
console.log("*******Modules********");

const myteacher = new Teacher("Mosh", "Master Degree");
myteacher.walk();
myteacher.teach();

/** Named and Default Exports */
console.log("*******Named and Default Exports********");
// Named -->  import { ... } from '';
// Default --> impor ... from '';
promote();