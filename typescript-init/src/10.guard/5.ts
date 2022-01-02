// 식별 가능한 유니온 타입은 서로 겹치지 않기 때문에 스위치 문에서 사용하기 좋다

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

interface Product2 {
  type: "c";
  name: string;
  price2: number;
}

function print(value: Person | Product | Product2) {
  switch (value.type) {
    case "a":
      console.log(value.age);
      break;
    case "b":
      console.log(value.price);
      break;
    case "c":
      console.log(value.price2);
  }
}
