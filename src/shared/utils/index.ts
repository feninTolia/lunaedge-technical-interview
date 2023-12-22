export type AsyncDebounceFunction = (...args: any[]) => Promise<void>;

export function asyncDebounce(
  func: AsyncDebounceFunction,
  delay: number
): AsyncDebounceFunction {
  let timeoutId: NodeJS.Timeout | undefined;
  let resolve: (() => void) | undefined;

  return async function (...args: any[]) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(async () => {
      await func(...args);
      resolve?.();
      timeoutId = undefined;
    }, delay);

    if (!resolve) {
      // Create a promise and save the resolve function for later
      await new Promise((res) => {
        //@ts-expect-error
        resolve = res;
      });
    }
  };
}
