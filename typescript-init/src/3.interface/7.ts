export {};

// interface로 함수타입을 정의할수도 있지만 보통 type 사용
interface GetText {
  (name: string, age: number): string;
}

type GetText = (name: string, age: number) => string;
