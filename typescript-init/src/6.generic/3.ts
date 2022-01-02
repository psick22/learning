// 제네릭을 사용한 방법

export {};

function makeArray<T>(defaultValue: T, size: number): Array<T> {
  const arr: Array<T> = [];
  for (let i = 0; i < size; i++) {
    arr.push(defaultValue);
  }

  return arr;
}

const arr1 = makeArray<number>(1, 10);
const arr2 = makeArray<string>("2", 10);

// 호출할 때 타입을 지정해주지않아도 호출 가능함
const arr3 = makeArray(1, 2);
const arr4 = makeArray("empty", 2);
