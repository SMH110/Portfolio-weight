import { PortfolioActions } from "../../reducers/portfolio";

export function addStock (item: IStock) :IAddStockToPortfolioAction{


    return {
        type : PortfolioActions.addStock,
        payload: {
            ...item,
            weight: 0
        }
    }
}


// export