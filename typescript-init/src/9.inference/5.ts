export {};

// 함수의 타입추론

// 기본값이 설정된 파라미터와 반환값의 타입을 추론
function func1(a = "abc", b = 10) {
  return `${a} ${b}`;
}

func1(3, 6);
const v1: number = func1("a", 1);

// return 이 여러개 사용된 경우에도 자동으로 반환값의 타입을 추론함
function func2(value: number) {
  if (value < 10) {
    return value;
  } else {
    return `${value} is too big`;
  }
}
