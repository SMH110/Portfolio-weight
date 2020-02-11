interface IPortfolioItem {
  name: string;
  id: number;
  weight: number;
  isValid: boolean;
}

interface IPortfolioAction<T = any> extends IAction<portfolioActionType> {
  payload?: T;
}

interface IAddStockToPortfolioAction extends IPortfolioAction<IPortfolioItem> {}

interface IRemoveStockFromPortfolioAction extends IPortfolioAction<number> {}
interface IUpdateStockWeighting extends IPortfolioAction<{id:number,  weight: number;}> {}

type portfolioActionType = PortfolioActions.addStock | PortfolioActions.removeStock;
