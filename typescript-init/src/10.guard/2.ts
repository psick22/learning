export {};

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Product {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}

// 클래스영역에서 타입가드 => instanceof 키워드 사용

function print(value: Person | Product) {
  console.log(value.name);
  if (value instanceof Person) {
    console.log(value.age);
  } else {
    console.log(value.price);
  }
}
