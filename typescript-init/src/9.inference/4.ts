export {};

// interface에서의 타입추론

interface Person {
  name: string;
  age: number;
}

interface Korean extends Person {
  liveInSeoul: boolean;
}

interface Japanese extends Person {
  liveInTokyo: boolean;
}

const p1: Person = { name: "mike", age: 23 };
const p2: Korean = { name: "mike", age: 25, liveInSeoul: true };
const p3: Japanese = { name: "mike", age: 27, liveInTokyo: false };

const arr1 = [p1, p2, p3]; // 다른 타입으로 할당가능한 타입은 제거됨 => Person[] 으로 추론됨
const arr2 = [p2, p3]; // Korean 과 Japanese 는 서로 할당관계에 있지않기 때문에 (Korean|Japanese)[] 으로 추론됨
