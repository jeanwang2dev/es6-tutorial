import { Person } from './person';

export function promote() {
    console.log("promoting a teacher");
}

export default class Teacher extends Person {
    constructor(name, degree){
      super(name);
      this.degree = degree;
      console.log(`Teacher ${this.name} has ${this.degree}`);
    }
  
    teach() {
      console.log(`Teacher ${this.name} is teaching`);
    }
}