export const sum_to_n_a = (n: number): number => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
};

export const sum_to_n_b = (n: number): number => {
  return (n * (n + 1)) / 2;
};

export const sum_to_n_c = (n: number): number => {
  if (n === 1) return 1;
  return n + sum_to_n_c(n - 1);
};

const n = 5;

console.log(sum_to_n_a(n));
console.log(sum_to_n_b(n));
console.log(sum_to_n_c(n));
