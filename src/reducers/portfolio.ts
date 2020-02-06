export enum PortfolioActions {
  addStock = "PORTFOLIO:ADD_STOCK",
  removeStock = "PORTFOLIO:REMOVE_STOCK"
}

export default function portfolio(state = [], action: IAddStockToPortfolioAction) {
  switch (action.type) {
    case PortfolioActions.addStock:
      return [...state, action.payload]

    default:
      return state;
  }
}


