import { round } from "../util/common-functions";

export enum PortfolioActions {
  addStock = "PORTFOLIO:ADD_STOCK",
  removeStock = "PORTFOLIO:REMOVE_STOCK",
  updateStock = "PORTFOLIO:UPDATE_STOCK",
  equalWeight = "PORTFOLIO:SET_EQUAL_WEIGHT",
  redistribute = "PORTFOLIO:REDISTRIBUtE_WEIGHTS"
}

let initSate = [
 
];

export default function portfolio(state: IPortfolioItem[] = initSate, action: IPortfolioAction) {
  switch (action.type) {
    case PortfolioActions.addStock:
      return [...state, action.payload];

    case PortfolioActions.removeStock:
      return state.filter(item => item.id !== (action.payload as number));

    case PortfolioActions.updateStock:
      let result = state.map(item => (item.id !== action.payload.id ? item : { ...item, ...action.payload , isValid: isValid(action.payload.weight)  }));
      return result;

    case PortfolioActions.equalWeight:
      return state.map(x => {
        let weight = round((1 / state.length) * 100, 6)
        return { ...x, weight, isValid: isValid(weight) }
      });

    case PortfolioActions.redistribute:
      let total = state.reduce((acc, current) => (acc += +current.weight), 0);
      return state.map(x => {
        let weight = +x.weight / total;
        let finalWeight = Number.isNaN(weight) ? 1 / state.length : weight;

        return {
          ...x,
          weight: round(finalWeight * 100, 6),
          isValid: isValid(finalWeight)
        };
      });

    default:
      return state;
  }
}


function isValid(weight){
  return !!weight
}