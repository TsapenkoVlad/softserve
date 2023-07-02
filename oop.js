class Circle {
    constructor (x,y,R) {
        this.x = x;
        this.y = y;
        this.R = R;
        
    }
     getLength(){
        const L = 2 * Math.PI * this.R 
        console.log(Math.floor(L));
    }
    static showLength(R) {
        return Math.floor(2 * Math.PI * R ) 
    }
    getCircle(){
        return new Circle(this.x, this.y, this.R)
    }
    static createCircle(x,y,R) {
        return new Circle(x,y,R)
    }
    isPointInside(x, y) {
        const distance = Math.sqrt(x ** 2 + y ** 2);
        return distance <= this.R;
    }
    toString(){
       return `центр кола: ${this.x},${this.y} радиус: ${this.R}`
    }
}

let mentor = { 
    course: "JS fundamental", 
    duration: 3,
    direction: "web-development" 
};

function propsCount(currentObject) {
    return Object.keys(currentObject).length;
}


class Person {
    constructor(name, surname) {
      this.name = name;
      this.surname = surname;
    }
  
    showFullName() {
      console.log(`${this.surname} ${this.name} `);
    }
  }
  
  class Student extends Person {
    constructor(name, surname, year) {
      super(name, surname);
      this.year = year;
    }
  
    showFullName(middleName) {
      console.log(`${this.surname} ${this.name} ${middleName}`);
    }
  
    showCourse() {
      console.log(new Date().getFullYear() - this.year);
    }
  }
  
  const student = new Student("Ivan", "Ivanov", 2019);
   student.showFullName("Ivanovich");
   student.showCourse();



   class Marker {
    constructor(color, qtyOfPaint) {
      this.color = color;
      this.qtyOfPaint = qtyOfPaint;
    }
  
    print(text) {
      while (this.qtyOfPaint > 0) {
        console.log(`%c${text}`, `color: ${this.color};`);
        const lengthWithoutWhitespaces = text.replace(" ", "").length;
        this.qtyOfPaint = this.qtyOfPaint - 0.5 * lengthWithoutWhitespaces;
      }
    }
  }
  
   const marker = new Marker("red", 10);
   marker.print("Hello");
  
  class RefillingMarker extends Marker {
    constructor(color, qtyOfPaint) {
      super(color, qtyOfPaint);
    }
  
    refill(newPaint) {
      this.qtyOfPaint = this.qtyOfPaint + newPaint;
    }
  }
  
  // const refillMarker = new RefillingMarker("red", 10);
  // refillMarker.print("Hello");
  // console.log("refillMarker.qtyOfPaint", refillMarker.qtyOfPaint);
  // refillMarker.refill(5);
  // console.log("refillMarker.qtyOfPaint", refillMarker.qtyOfPaint);

  

  class Worker {
    #experience = 1.2;
    constructor(fullName, dayRate, workingDays) {
      this.fullName = fullName;
      this.dayRate = dayRate;
      this.workingDays = workingDays;
    }
  
    showSalary() {
      console.log("Salary ", this.dayRate * this.workingDays);
    }
  
    showSalaryWithExperience() {
     return  this.dayRate * this.workingDays * this.#experience;
    }
  
    getExperience() {
      return this.#experience;
    }
  
    setExperience(newExperience) {
      this.#experience = newExperience;
    }
  
    static sortWorkers(arrayExperience) {
      return arrayExperience.sort((a, b) => a.getExperience() - b.getExperience());
    }
    
  }
  
  const worker = new Worker("Ivan Smith"  , 20, 20);
  worker.showSalary();
  worker.showSalaryWithExperience();
  
  console.log("experience", worker.getExperience());
  worker.setExperience(1.5);
  console.log("experience", worker.getExperience());
  
  worker.showSalary();
  worker.showSalaryWithExperience();
  
  let worker2 = new Worker("Tom Tomson", 48, 22);
  
  let worker3 = new Worker("Andrey Simpson", 12, 23);
  
  const arrayExperience = [worker, worker2, worker3];
  
  const sortedArray = Worker.sortWorkers(arrayExperience);
  
console.log('Sorted salary:');

  sortedArray.forEach((worker) => {
    console.log(worker.fullName + ': ' + worker.showSalaryWithExperience());
})
 
