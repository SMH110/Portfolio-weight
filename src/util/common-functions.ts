import { Subscription } from "rxjs";

export function unSubscribe(sub: Subscription) {
  if (sub.unsubscribe) sub.unsubscribe();
}

export function round(number, decimal = 2) {
  let d = parseInt(`1${"0".repeat(decimal)}`);

  return Math.round(number * d) / d;
}
