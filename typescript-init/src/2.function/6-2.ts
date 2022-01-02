export {}

// this의 타입정의
// parameter 맨앞에 this를 사용하면 this라고 인식함

function getParam(this: string, index: number): string {
    const params = this.split(',');
    if (index < 0 || params.length <= index) {
        return '';
    }
    return this.split(',')[index];

}
