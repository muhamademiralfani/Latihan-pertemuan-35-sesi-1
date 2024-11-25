export function calculateArea(width, height) {
  return width * height;
}

export function calculateCircleArea(radius) {
  return Math.PI * radius * radius;
}

export function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

export function multiply(a, b) {
  return a * b;
}

export function isEmpty(value) {
  if (Array.isArray(value)) {
    return value.length === 0;
  }
  if (typeof value === 'string') {
    return value.length === 0;
  }
  return false;
}