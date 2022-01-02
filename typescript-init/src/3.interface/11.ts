export {};

interface Person {
  name: string;
  age: number;
}

interface Product {
  name: string;
  price: number;
}

// & 교차 타입: 여러 인터페이스를 하나로 합침
// 타입이 가질 수 있는 값의 집합의 교집합

type PP = Person & Product;

const pp: PP = {
  name: "a",
  age: 23,
  price: 1000,
};
