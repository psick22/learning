// 타입가드를 활용하여 타입을 검사하는 함수를 작성할 수 있다

export {};

interface Person {
  name: string;
  age: number;
}

interface Product {
  name: string;
  price: number;
}

function isPerson(x: Person | Product): x is Person {
  return (x as Person).age !== undefined;
}

function print(value: Person | Product) {
  if (isPerson(value)) {
    console.log(value.age);
  } else {
    console.log(value.price);
  }
}
