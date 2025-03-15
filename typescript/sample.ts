let isDone: boolean = false;
let decimal: number = 6;
let color: string = "blue";
let randomValue: any = 10;

randomValue = "Hello";

console.log(isDone, decimal, color, randomValue);

function magic(name: string): string {
  return `Hello, ${name}!`;
}

console.log(magic("Arjun"));

// Interface
interface FixNewData {
  name: string;
  dept: string;
  add(): void;
}

const f: FixNewData = {
  name: "Alice",
  dept: "CSE",
  add: function() {
    console.log(`Hi, I'm ${this.name} from ${this.dept}`);
  }
};

f.add(); 

type User = {
  name: string;
  age: number;
};

function isAdult(user: User): boolean {
  return user.age >= 18;
}

const justine = {
  name: 'hajhj ds',
  age: 23,
} satisfies User;

const isJustineAnAdult = isAdult(justine);
