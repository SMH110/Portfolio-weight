import { unSubscribe, round } from "../../util/common-functions";
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


describe("Round number", () => {
  it("Should round number as expected", () => {
   
    let result = round(0.2 + 0.3, 2);
    console.log('result',result);
    

    expect(result).toEqual(0.5)
  });
});
