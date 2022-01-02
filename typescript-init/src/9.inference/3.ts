export {};
// 배열과 객체의 타입추론

const arr1 = [10, 20, 30]; // 타입이 number[] 로 추론됨
const [n1, n2, n3] = arr1; // 비구조화해도 각 변수가 타입추론이 됨
arr1.push("a");

const obj = { id: "abcd", age: 123, language: "korean" }; // 자동으로 타입 추론이 됨
const { id, age, language } = obj; // 비구조화도 타입추론이 됨

console.log(id === age);
