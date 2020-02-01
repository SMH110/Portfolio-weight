import * as React from "react";
import { IPortfolioItem } from "../../reducers/portfolio";
import { connect } from "react-redux";
import SearchInput from "./../../components/search-input/SearchInput";

export interface IPortfolioProps {
  portfolio: IPortfolioItem[];
}

export class Portfolio extends React.Component<IPortfolioProps> {
  constructor(public props: IPortfolioProps) {
    super(props);
  }

  private onChange = (text: string) => {
    this.setState({
      searchText: text
    });
  };
  public render() {
    return (
      <div>
        <SearchInput type="text" placeholder="Search..." value="" onChange={this.onChange} />
      </div>
    );
  }
}

const mapStateToProps = (state: any): IPortfolioProps => {
  console.log(state);
  let portfolio = state.portfolio as IPortfolioItem[];
  return {
    portfolio
  };
};

export default connect(mapStateToProps)(Portfolio);
