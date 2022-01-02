// 인터페이스를 구별하여 타입가드 기능을 사용하기 위해 식별가능한 유니온 타입을 이용할 수 있다.
// discriminated union

export {};

interface Person {
  type: "a";
  name: string;
  age: number;
}

interface Product {
  type: "b";
  name: string;
  price: number;
}

function print(value: Person | Product) {
  if (value.type === "a") {
    console.log(value.age);
  } else {
    console.log(value.price);
  }
}
