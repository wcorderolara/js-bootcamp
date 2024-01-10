export function fetchCounterValue(amount = 1) {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ data: amount }), 2000);
  });
}
