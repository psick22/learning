
export {};

interface Person {
    name: string;
    age: number;
}

interface Product {
    name: string;
    price: number;
}

// 함수를 따로 작성하지 않고 in 키워드로 대체 할 수 있다
// 하지만 타입의 종류가 많아지고 같이 이름의 속성이 중복으로 사용된다면 이런 방법은 사용하기 어렵고 식별가능한 유니온 타입을 주로 사용함

function print(value: Person | Product) {
    if ('age' in value) {
        console.log(value.age);
    } else {
        console.log(value.price);
    }
}
