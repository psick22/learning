export {};

// 추상 클래스는 객체로 만들 수 없으며
// abstract method는 상속 받는 쪽에서 꼭 정의해줘야한다

abstract class Person {
  constructor(public name: string) {}
  sayHello() {
    console.log(`안녕하세요 저는 ${this.name}입니다`);
  }
  abstract sayHello2(): void;
}

class Programmer extends Person {
  sayHello2(): void {}
  sayHello() {
    super.sayHello();
    console.log("저는 프로그래머입니다");
  }
}
