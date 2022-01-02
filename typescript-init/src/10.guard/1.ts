export {};

// as 키워드로 개발자가 타입을 확신하는 경우에 사용
// 가독성이 매우 안좋아지고 복잡한 로직에서 코드 변경에 의해서 버그의 위험성이 커지기 때문에 진짜 필요한 경우에만 사용됨

function print(value: number | string) {
  if (typeof value === "number") {
    console.log((value as number).toFixed(2));
  } else {
    console.log((value as string).trim());
  }
}

// 타입가드
// 타입스크립트가 as를 사용하지않아도 자동으로 타입가드 기능으로 타입을 인지함

function print2(value: number | string) {
  if (typeof value === "number") {
    console.log(value.toFixed(2));
  } else {
    console.log(value.trim());
  }
}
