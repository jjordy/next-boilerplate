export function noop() {}
/**
 * Dynamically imports @testing-library/react
 * For use with vitest in source testing
 */
export async function tl() {
  return import("@testing-library/react").then((module) => module.default);
}
