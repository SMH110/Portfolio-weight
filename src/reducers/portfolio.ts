export enum PortfolioActions {
  addStock = "PORTFOLIO:ADD_STOCK",
  removeStock = "PORTFOLIO:REMOVE_STOCK"
}

export default function portfolio(state = [], action: IPortfolioAction) {
  switch (action.type) {
    case PortfolioActions.addStock:
      break;

    default:
      return state;
  }
}

type portfolioActionType = PortfolioActions.addStock | PortfolioActions.removeStock;

export interface IPortfolioAction {
  type: portfolioActionType;
  item?: IPortfolioItem;
}

