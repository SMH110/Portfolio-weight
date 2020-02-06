import portfolio from "../../reducers/portfolio";
import { addStock, removeStock, updateStock, setEqualWeight, redistributeWeights } from "../../actions/portfolio";

describe("Portfolio reducer", () => {
  it("Should be able to add stock to portfolio as expected", () => {
    let addAction = addStock({ id: 1, name: "foo" });
    let initState = [];
    let result = portfolio(initState, addAction);
    expect(result.length).toEqual(1);
    expect(result).not.toBe(initState);

    addAction = addStock({ id: 2, name: "baz" });
    result = portfolio(result, addAction);
    expect(result.length).toEqual(2);
  });

  it("Should be able to remove stock from portfolio as expected", () => {
    let initState = [{ id: 1, name: "foo", weight: 0 }];
    let action = removeStock(1);

    let result = portfolio(initState, action);
    expect(result.length).toEqual(0);
    expect(result).not.toBe(initState);
  });

  it("Should be able update weight of a portfolio item", () => {
    let initState = [{ id: 1, name: "foo", weight: 0 }];
    let action = updateStock(1, 1);

    let result = portfolio(initState, action);

    expect(result.length).toEqual(1);
    expect(result[0].weight).toEqual(1);
    expect(result).not.toBe(initState);
  });

  it("Should be able set portfolio equal weight", () => {
    let initState = [
      { id: 1, name: "foo", weight: 1 },
      { id: 2, name: "baz", weight: 1 }
    ];
    let action = setEqualWeight();

    let result = portfolio(initState, action);

    expect(result.length).toEqual(2);

    expect(result.every(x => x.weight === 50)).toBe(true);

    expect(result).not.toBe(initState);

    let addAction = addStock({ id: 3, name: "boo" });
    result = portfolio(result, addAction);
    result = portfolio(result, action);
    expect(result.every(x => x.weight === 33.333333)).toBe(true);
  });

  it("Should be able to redistribute portfolio weight", () => {
    let initState = [
      { id: 1, name: "foo", weight: 10 },
      { id: 2, name: "baz", weight: 20 }
    ];
    let action = redistributeWeights();
    let result = portfolio(initState, action);
    expect(result.length).toEqual(2);
    expect(result[0].weight).toEqual(33.333333);
    expect(result[1].weight).toEqual(66.666667);
  });
});
