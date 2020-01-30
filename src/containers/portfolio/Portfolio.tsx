import * as React from "react";
import { IPortfolioItem } from "../../reducers/portfolio";
import { connect } from "react-redux";

export interface IPortfolioProps {
  portfolio: IPortfolioItem[];
}

class Portfolio extends React.Component<IPortfolioProps> {
  public render() {
    return <div></div>;
  }
}

const mapStateToProps = (state: any): IPortfolioProps => {
  let portfolio = state.portfolio as IPortfolioItem[];
  return {
    portfolio
  };
};

export default connect(mapStateToProps)(Portfolio);
