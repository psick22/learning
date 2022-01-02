export {};

// mapped type
// 인터페이스에 있는 모든 속성을 optional 로 바꾸거나 readonly로 바꾸는 일 등을 할 수 있다

interface Person {
  name: string;
  age: number;
}

interface PersonOptional {
  name?: string;
  age?: number;
}

interface PersonReadOnly {
  readonly name: string;
  readonly age: number;
}
