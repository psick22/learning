export {};

// readonly

interface Person {
  readonly name: string;
  age?: number;
}

const p1: Person = {
  name: "mike",
  age: undefined,
};

p1.name = "kirok";
