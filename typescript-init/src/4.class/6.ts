export {};

// static
// 정적  멤버 변수, 정적 메서드 정의에 사용
// 각 객체와는 상관없이 고정된 값

class Person {
  static adultAge = 20;
  constructor(public name: string, public age: number) {}
  sayHello() {
    console.log(`안녕하세요 저는 ${this.name}입니다.`);
    console.log(
      Person.getIsAdult(this.age) ? "성인입니다." : "성인이 아닙니다."
    );
  }
  static getIsAdult(age: number) {
    return this.adultAge <= age;
  }
}

const person = new Person("mike", 20);
person.sayHello();
