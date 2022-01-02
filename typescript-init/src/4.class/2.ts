export {};

class Person {
  #name: string;

  constructor(name: string) {
    this.#name = name;
  }

  sayHello() {
    console.log("안녕하세요");
  }
}

// 접근 범위 설정 : public(공개), protected(상속받는 클래스에서는 사용가능하지만 외부(인스턴스)에서 호출하지 못함), private(비공개)
// 따로 접근자를 설정하지 않으면 기본값을 public
// 속성명앞에 #을 붙여서 private 으로 만들수도있다
class Programmer extends Person {
  // 상속한 클래스의 경우 super()를 통해서 부모의 생성자를 호출해줘야함
  constructor(name: string) {
    super(name);
  }

  // 메소드 오버라이딩
  sayHello() {
    super.sayHello();
    console.log("프로그래머입니다.");
  }

  fixBug() {
    console.log("버그 수정 완료");
  }
}

const programmer = new Programmer("kirok");
programmer.fixBug();
programmer.sayHello();
console.log(programmer.#name);
