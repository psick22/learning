export {};

// 생성자에 접근자 또는 readonly 를 설정해주면 자동으로 멤버변수가 되어서 정의해주지 않아도 됨

class Person {
  constructor(public name: string, public age: number) {}
}

const person = new Person("kirok", 11);
console.log(person.name);
console.log(person.age);
