interface Text {
  name: string;
  age: number;
  language?: string;
}

const getText = ({ name, age, language }: Text): string => {
  const nameText = name.substr(0, 10);
  const ageText = age >= 35 ? "senior" : "junior";
  const languageText = language ? language.substr(0, 10) : "";
  return `name : ${nameText}, age: ${ageText}, language : ${languageText}`;
};
