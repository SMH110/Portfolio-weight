import * as React from "react";
import { connect } from "react-redux";
import SearchInput from "./../../components/search-input/SearchInput";
import { SearchResults } from "../../components/search-results/SearchResults";
import { Subject } from "rxjs";

export interface IPortfolioProps {
  portfolio: IPortfolioItem[];
  stocks: IStock[];
}

export class Portfolio extends React.Component<IPortfolioProps> {
  public state = {
    searchText: "",
    searchResults: []
  };

  private clearSearchResultEvent = new Subject<void>();
  constructor(public props: IPortfolioProps) {
    super(props);
  }

  private search = (text: string) => {
    this.setState({
      searchText: text
    });
    text = text.toLowerCase();
    let searchResults = this.props.stocks.filter(x => text && x.name.toLocaleLowerCase().includes(text));

    this.setState({
      searchResults
    });
  };

  private selectSearchResult = item => {
    this.clearSearchResultEvent.next();
  };
  public render() {
    let { searchResults } = this.state;
    return (
      <div data-test="portfolio-comp">
        <SearchInput
          type="text"
          placeholder="Search..."
          value=""
          onChange={this.search}
          clear$={this.clearSearchResultEvent}
        />
        <SearchResults results={searchResults} select={this.selectSearchResult} displayKey="name" keyId="id" />
      </div>
    );
  }
}

const mapStateToProps = (state: any): IPortfolioProps => {
  let { portfolio, stocks } = state;
  return {
    portfolio,
    stocks
  };
};

export default connect(mapStateToProps)(Portfolio);
