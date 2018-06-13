export const stringifyErr = err => err.toString();

export const isArraysEqual = (arr1 = [], arr2 = []) =>
  arr1.toString() === arr2.toString();

export const firstN = (n, arr) => arr.slice(0, n);
