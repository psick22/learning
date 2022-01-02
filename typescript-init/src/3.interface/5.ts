export {};

// index 타입
// 인터페이스에서 속성이름을 구체적으로 정의하지않고 값의 타입만 정의하는 것

interface Person {
  readonly name: string;
  age: number;

  [key: string]: string | number;
}

const p1: Person = {
  name: "mike",
  birthday: "1997-01-01",
  age: 25,
};
