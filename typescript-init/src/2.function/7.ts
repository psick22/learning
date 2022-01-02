function getParam(this: string, index: number): string {
    const params = this.split(',');
    if (index < 0 || params.length <= index) {
        return '';
    }
    return this.split(',')[index];
}


// 내장 타입에 프로토타입을 주입하려고 할때 interface를 사용할 수 있다

interface String {
    getParam(this: string, index: number): string;
}


String.prototype.getParam = getParam;
console.log('asdf, 1234, ok'.getParam(1));
