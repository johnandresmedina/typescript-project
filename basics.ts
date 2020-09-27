function add(n1: number, n2: number, printResult: boolean): number | void {
  const result = n1 + n2;

  if (printResult) {
    console.log(result);
  } else {
    return result;
  }
}

const number1 = 5;
const number2 = 2.5;
const printResult = true;

const result = add(number1, number2, printResult);

console.log(result);
