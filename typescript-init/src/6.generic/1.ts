// 제네릭

// 타입정보가 동적으로 결정되는 타입
// 제네릭을 통해 같은 규칙을 여러 타입에 적용할 수 있기 때문에 타입 코드를 작성할 때 발생할 수 있는 중복을 제거 할 수 있다

export {};

function makeNumberArray(defaultValue: number, size: number): Array<number> {
  const arr: Array<number> = [];
  for (let i = 0; i < size; i++) {
    arr.push(defaultValue);
  }
  return arr;
}

function makeStringArray(defaultValue: string, size: number): Array<string> {
  const arr: Array<string> = [];
  for (let i = 0; i < size; i++) {
    arr.push(defaultValue);
  }
  return arr;
}

const arr1 = makeNumberArray(1, 10);
const arr2 = makeStringArray("a", 10);
