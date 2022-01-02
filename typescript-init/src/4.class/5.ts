export {};
// getter & setter

class Person {
  private _name: string = "";

  get name(): string {
    console.log("getter called");
    return this._name;
  }

  set name(newName: string) {
    console.log("setter called");
    if (newName.length > 10) {
      throw new Error("최대 길이 초과;");
    }
    this._name = newName;
  }
}

let person = new Person();
person.name = "kirok";
console.log(person.name);
