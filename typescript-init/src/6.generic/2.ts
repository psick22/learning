//  숫자와 문자열만 필요하다면 함수 오버로드를 사용할 수 있다

// 문제점 : 숫자 또는 문자열 이외의 새로운 타입을 추가하고 싶으면 계속해서 코드를 수정해야한다

export {};

function makeArray(defaultValue: number, size: number): number[];
function makeArray(defaultValue: string, size: number): string[];
function makeArray(
  defaultValue: number | string,
  size: number | string
): Array<number | string> {
  const arr: Array<number | string> = [];
  for (let i = 0; i < size; i++) {
    arr.push(defaultValue);
  }
  return arr;
}

const arr1 = makeArray(1, 2);
const arr2 = makeArray("2", 2);
