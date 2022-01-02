export {};

// optional parameter => string 또는 undefined 가능
function getText(name: string, age: number, language?: string): string {
    const nameText= name.substr(0, 10);
    const ageText = age>=35 ? 'senior':'junior';
    const languageText = language ? language.substr(0, 10) : '';
    return `name : ${nameText}, age: ${ageText}, language : ${languageText}`
}

getText('mike', 23, 'ko');
getText('mike', 23);
getText('mike',23, 123); // X


// 중간에 optional parameter가 끼여있는 경우에는 ? 기호가 아니라 | 를 통해서 작성하는것이 좋은데
// 사용하는 입장에서 불편하고 가독성이 안좋아서 파라미터가 많은 경우에는 비구조화문법을 통해서 named parameter로 작성하는 것이 권장됨

function getText2(name: string, language: string | undefined | null,  age: number): string {
    const nameText= name.substr(0, 10);
    const ageText = age>=35 ? 'senior':'junior';
    const languageText = language ? language.substr(0, 10) : '';
    return `name : ${nameText}, age: ${ageText}, language : ${languageText}`
}

getText2('mike', undefined, 23)
