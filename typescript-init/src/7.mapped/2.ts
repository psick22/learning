export {};
// 중괄호 : 맵드 타입으로 만들어지는 것은 객체 타입
// 대괄호 : key 를 나타냄
// in 키워드 를 이용

type T1 = { [K in "prop1" | "prop2"]: boolean };
