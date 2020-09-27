type Person = {
  name: string;
  age: number;
  lastName?: string;
  hobbies: string[];
  role: [number, string];
};

const person: Person = {
  name: "John",
  age: 100,
  hobbies: ["Reading", "Games", "Music"],
  role: [1, "admin"],
};

person.role.push("john");
person.role = [2, "guess"];

console.log(person.lastName ?? "Medina");
