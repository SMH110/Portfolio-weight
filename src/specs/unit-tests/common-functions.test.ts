import { unSubscribe } from "../../util/common-functions";
import { Subject } from "rxjs";

describe("Unsubscribe", () => {
  it("Should unsubscribe rxjs subscription", () => {
    let src = new Subject();
    let sub = src.subscribe(() => {});

    expect(src.observers.length).toEqual(1);
    unSubscribe(sub);
    expect(src.observers.length).toEqual(0);
  });
});
