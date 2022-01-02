export {};

interface Person {
  name: string;
  age: number;
}

interface Korean extends Person {
  liveInSeoul: boolean;
}

// keyof Person : interface Person 의 모든 속성 이름 (즉, name 또는 age에 할당가능한 타입이어야함 => string 또는 number)
function swapProperty<T extends Person, K extends keyof Person>(
  p1: T,
  p2: T,
  key: K
): void {
  const temp = p1[key];
  p1[key] = p2[key];
  p2[key] = temp;
}

const p1: Korean = {
  name: "홍길동",
  age: 23,
  liveInSeoul: true,
};

const p2: Korean = {
  name: "권기록",
  age: 10,
  liveInSeoul: false,
};

swapProperty(p1, p2, "age1");

console.log(`p1 : ${p1.age}`);
console.log(`p2 : ${p2.age}`);

interface Product {
  name: string;
  price: number;
}

const p3: Product = {
  name: "시계",
  price: 10000,
};

swapProperty(p3, p1, "name"); // p3는 타입정의에 맞지 않기 때문에 에러
