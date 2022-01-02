export {};

class Person {
  readonly name: string;
  private readonly age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log("안녕하세요");
  }
}

// readonly를 하게되면 constructor 에서는 값을 할당할 수 있지만 따로 변경할 수는 없다

const person = new Person("kirok", 23);
person.name = "mike";
