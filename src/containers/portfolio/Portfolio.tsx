import * as React from "react";
import { connect } from "react-redux";
import SearchInput from "./../../components/search-input/SearchInput";
import { SearchResults } from "../../components/search-results/SearchResults";
import { Subject, Subscription } from "rxjs";
import { addStock } from "../../actions/portfolio";
import PortfolioItem from "../../components/portfolio-item/portfolio-item";
import { setStocks, getStocks } from "../../actions/stocks";
import { unSubscribe } from "../../util/common-functions";
import './portfolio.scss'
import axios from 'axios'
import { setTimeout } from "timers";
export interface IPortfolioProps {
  portfolio: IPortfolioItem[];
  stocks: IStock[];
  dispatch?: (any) => void;
}

export class Portfolio extends React.Component<IPortfolioProps> {
  public state = {
    searchText: "",
    searchResults: []
  };

  private clearSearchResultEvent = new Subject<void>();
  private cancelRequestToken =  axios.CancelToken.source();
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
    this.setState({
      searchText: "",
      searchResults: []
    });

    if (this.props.portfolio.find(x => x.id == item.id)) return;
    this.props.dispatch(addStock(item));
  };

  public removePortfolioItem(item) {
    this.props.dispatch()
  }

  public componentDidMount() {
   this.props.dispatch(getStocks({CancelToken: this.cancelRequestToken}))
 
  }

  public componentWillUnmount() {
    this.cancelRequestToken.cancel("ddd");
  }

  public onPortfolioItemWeightChange(item, weighting) {}

  private getPortfolioItems() {
    return this.props.portfolio.map(item => (
      <PortfolioItem
        key={item.id}
        item={item}
        onRemove={this.removePortfolioItem}
        onWeightChange={this.onPortfolioItemWeightChange}
      />
    ));
  }
  public render() {
    let { searchResults } = this.state;
    let portfolioItems = this.getPortfolioItems();

    return (
      <div data-test="portfolio-comp" className="portfolio">
        <SearchInput
          type="text"
          placeholder="Search..."
          value=""
          onChange={this.search}
          clear$={this.clearSearchResultEvent}
        />
        <SearchResults
          results={searchResults}
          select={this.selectSearchResult}
          displayKey="name"
          keyId="id"
        />
        {(portfolioItems.length && portfolioItems) || ""}
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
