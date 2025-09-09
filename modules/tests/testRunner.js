export function expect(actual, expected, message, duration) {
  let string;
  if (typeof actual === "object") string = actual.toString();
  if (Object.is(string ?? actual, expected)) {
    console.log(`✅ ${message} (${duration.toFixed(3)} ms)`);
    return true;
  } else {
    console.error(
      `❌ ${message}: expected ${expected}, got ${actual} (${duration.toFixed(3)} ms)`
    );
    return false;
  }
}

export function runTests(fn, testCases) {
  let passed = 0;
  let failed = 0;
  let totalTime = 0;

  Object.entries(testCases).forEach(([suiteName, cases]) => {
    console.group(`Suite: ${suiteName}`);
    cases.forEach(({ input, expected }, i) => {
      const start = performance.now();
      const actual = fn(input);
      const end = performance.now();
      const duration = end - start;

      totalTime += duration;
      const ok = expect(actual, expected, `Test #${i + 1}`, duration);
      ok? passed++ : failed++;
    });
    console.groupEnd();
  });

  const total = passed + failed;
  console.log("──────────────");
  console.log(`Summary: ${passed}/${total} passed, ${failed} failed`);
  console.log(`Total time: ${totalTime.toFixed(3)} ms`);
  console.log("──────────────");
}
