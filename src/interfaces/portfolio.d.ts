interface IPortfolioItem {
  name: string;
  id: number;
  weight: number;
}



interface IAddStockToPortfolioAction extends IAction<portfolioActionType> {
    payload : IPortfolioItem
}

type portfolioActionType = PortfolioActions.addStock | PortfolioActions.removeStock;
