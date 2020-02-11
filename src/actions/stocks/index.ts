import { StocksActions } from "../../reducers/stocks";
import { Dispatch } from "redux";
import DataServiceFactory from "../../services/data.service";

const DataService = DataServiceFactory();
export function setStocks(items: IStock[]): IStockAction {
  return {
    type: StocksActions.set,
    payload: items
  };
}

export function getStocks(option) {
  return (dispatch: Dispatch) => {
    return DataService.getStocks(option).then(data => {
      dispatch(setStocks(data.data));
    }).catch(error => console.error(error))
  };
}
