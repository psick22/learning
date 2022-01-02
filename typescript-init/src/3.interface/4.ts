export {};

interface Person {
  readonly name: string;
  age?: number;
}

// 리터럴로 인터페이스에 정의되지 않은 속성을 초기화하면 타입에러가 발생함
const p1: Person = {
  name: "mike",
  age: undefined,
  birthday: "1992-22-22",
};

const p2 = {
  name: "kirok",
  birthday: "1991-11-05",
};

const p3: Person = p2;

console.log(p3);
