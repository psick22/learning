export {};

// 입력 가능한 값의 범위를 제한하는 제네릭
// A extends B (A가 B에 할당가능한 타입이어야함)
function identity<T extends number | string>(p1: T): T {
  return p1;
}

identity(1);
identity("1");
identity([1]);
identity(true);
