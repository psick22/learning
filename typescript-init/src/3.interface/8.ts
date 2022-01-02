export {};

// 함수의 속성값도 같이 정의할 수 있다.
interface GetText {
  (name: string, age: number): string;
  totalCall?: number;
}
