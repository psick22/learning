export {};

// 인터페이스를 확장해서 새로운 인터페이스로 만들수있다
interface Person {
  name: string;
  age: number;
}

interface Programmer {
  favoriteLanguage: string;
}

interface Korean extends Person, Programmer {
  isLiveInSeoul: boolean;
}
