export {};

interface Person {
  name: string;
  age: number;
}

interface Product {
  name: string;
  price: number;
}

// instanceof 키워드는 클래스에서만 사용할 수 있기 때문에 인터페이스는 instanceof로 타입가드를 사용할 수 없다.

function print(value: Person | Product) {
  console.log(value.name);
  if (value instanceof Person) {
    console.log(value.age);
  } else {
    console.log(value.price);
  }
}
