export enum StocksActions {
  set = "STOCKS:SET",
  get = "STOCKS:GET"
}

const initialState  : IStock[]= [{
  id: 1,
  name : 'Tesco'
}];
export default function stocks(state = initialState, action: IStockAction) {
  switch (action.type) {
    case StocksActions.set:
      state = [...action.payload];
      return state;

    case StocksActions.get:
      return state;

    default:
      return state;
  }
}

type stockActionType = StocksActions.set | StocksActions.get;

