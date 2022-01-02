export {};

interface Param {
  name: string;
  age?: number;
  language?: string;
}

function getText({ name, age = 15, language }: Param): string {
  const nameText = name.substr(0, 10);
  const ageText = age >= 35 ? "senior" : "junior";
  return `name : ${nameText}, age: ${ageText}, language : ${language}`;
}

getText({ name: "aaa", age: 11, language: "" });
