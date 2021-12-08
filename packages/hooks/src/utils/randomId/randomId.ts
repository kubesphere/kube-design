export function randomId() {
  return `kubed-${Math.random().toString(36).substr(2, 9)}`;
}
