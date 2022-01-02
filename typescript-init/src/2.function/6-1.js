function Counter() {
    this.value = 0;
    this.add = amount => {
        this.value += amount;
    }
}

// 화살표 함수의 this는 화살표 함수가 생성될 당시의 this로 고정되어 가리킴 (정적)
// 즉, Counter함수의 this를 가리킴
// add함수를 호출하는 주체가 누구인가에는 상관없이

const counter = new Counter();
console.log(counter.value);
counter.add(5)
console.log(counter.value);
const add = counter.add;
add(5)
console.log(counter.value);


// 일반함수는 호출될 당시의 상황에 따라서 this가 바뀜 (동적)

function Counter2() {
    this.value = 0;
    this.add = function (amount) {
        this.value += amount;
        // eslint-disable-next-line no-undef
        console.log(this === global)
    }
}

const counter2 = new Counter2();
console.log(counter2.value);
counter2.add(5)
console.log(counter2.value);
const add2 = counter2.add;
add2(5)
console.log(counter2.value);

// 클래스에서도 마찬가지

class Counter3 {
    value = 0;
    add(amount) {
        this.value += amount;
    }
}

//화살표 함수가 생성될 당시의 this는 화살표 함수를 감싸고 있는 일반함수가 없기 때문에 this는 항상 전역 객체를 가리킴
const counter3 = {
    value: 0,
    add: (amount) => {
        this.value += amount;
    }
}

console.log(counter3.value) // 0
counter3.add(5)
console.log(counter3.value) // 0
const add3 = counter3.add;
add3(5)
console.log(counter3.value) // 0
