
interface IStock {
    name : string;
    id: number;
}

interface IStockAction {
    type: stockActionType;
    payload: any[];
  }
  