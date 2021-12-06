export function randomId() {
  return `kubed-${Math.random().toString(36).substr(2, 9)}`;
}

interface Clamp {
  value: number;
  min: number;
  max: number;
}

export function clamp({ value, min, max }: Clamp) {
  return Math.min(Math.max(value, min), max);
}
