import { ADD, SUB, RESET } from "./constants";

export const add = () => ({
  type: ADD
});

export const sub = () => ({
  type: SUB
});

export const reset = () => ({
  type: RESET
});
