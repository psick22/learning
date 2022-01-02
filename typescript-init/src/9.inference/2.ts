export {};

// let으로 선언한 변수는 재할당이 가능하기 때문에 융통성있게 타입이 결정되지만
// const 변수는 엄격하게 타입이 결정됨

const v1 = 123; // const 타입이 number가 아닌 123이 됨
const v2 = "abc";

let v3: typeof v1 = 234;
