export {};

// 인터페이스는 클래스로 구현될 수있다
interface Person {
  name: string;
  age: number;

  isYoungerThan(age: number): boolean;
}

class SomePerson implements Person {
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  name: string;
  age: number;

  isYoungerThan(age: number): boolean {
    return false;
  }
}
