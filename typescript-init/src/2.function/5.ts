export {}

// rest parameter 는 항상 배열로 전달해야함
function getText(name: string, ...rest: number[]): string {
    return ''
}

console.log(getText('mike', 1, 2, 3))
