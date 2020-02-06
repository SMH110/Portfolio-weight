import { PortfolioActions } from "../../reducers/portfolio";

export function addStock(item: IStock): IAddStockToPortfolioAction {
  return {
    type: PortfolioActions.addStock,
    payload: {
      ...item,
      weight: 0
    }
  };
}

export function removeStock(id: number): IRemoveStockFromPortfolioAction {
  return {
    payload: id,
    type: PortfolioActions.removeStock
  };
}

export function updateStock(id: number, weight: number): IUpdateStockWeighting {
  return {
    payload: { id, weight },
    type: PortfolioActions.updateStock
  };
}

export function setEqualWeight(): IAction {
  return {
    type: PortfolioActions.equalWeight
  };
}

export function redistributeWeights(): IAction {
    return {
      type: PortfolioActions.redistribute
    };
  }
  
