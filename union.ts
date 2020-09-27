function combine(n1: number | string, n2: number | string): number | string {
  let result: string | number | null = null;

  if (typeof n1 === "number" && typeof n2 === "number") {
    result = n1 + n2;
  } else {
    result = `${n1} ${n2}`;
  }

  return result;
}

const combinedAges = combine(30, 26);
console.log(combinedAges);

const combinedName = combine("30", "26");
console.log(combinedName);
