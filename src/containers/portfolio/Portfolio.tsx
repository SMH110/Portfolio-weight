import * as React from "react";
import { connect } from "react-redux";
import SearchInput from "./../../components/search-input/SearchInput";
import { SearchResults } from "../../components/search-results/SearchResults";
import { Subject } from "rxjs";
import { addStock, removeStock, updateStock, setEqualWeight, redistributeWeights } from "../../actions/portfolio";
import PortfolioItem from "../../components/portfolio-item/portfolio-item";
import { getStocks } from "../../actions/stocks";
import "./portfolio.scss";
import axios from "axios";
import { Button } from "../../components/button/Button";
import { round } from "../../util/common-functions";
export interface IPortfolioProps {
  portfolio: IPortfolioItem[];
  stocks: IStock[];
  dispatch?: (any: any) => void;
}

export class Portfolio extends React.Component<IPortfolioProps> {
  public state = {
    searchText: "",
    searchResults: [],
    total: 0
  };

  private clearSearchResultEvent = new Subject<void>();
  private cancelRequestToken = axios.CancelToken.source();
  constructor(public props: IPortfolioProps) {
    super(props);
  }
  public componentDidMount() {
    this.props.dispatch(getStocks({ CancelToken: this.cancelRequestToken }));
  }

  public componentWillUnmount() {
    this.cancelRequestToken.cancel("ddd");
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

    if (this.props.portfolio.find(x => x.id === item.id)) return;
    this.props.dispatch(addStock(item));
  };

  private removePortfolioItem = (item: IPortfolioItem) => {
    this.props.dispatch(removeStock(item.id));
    this.updateTotalWeight();
  };

  private updateTotalWeight() {
    this.setState((_state, prop) => {
      let total = prop.portfolio.reduce((acc, cur) => (acc += cur.weight), 0);
      return {
        total: round(total,2)
      };
    });
  }

  public onEqualClick = () => {
    this.props.dispatch(setEqualWeight());
    this.updateTotalWeight();
  };

  public onRedistributeClick = () => {
    this.props.dispatch(redistributeWeights());
    this.updateTotalWeight();
  };

  public onPortfolioItemWeightChange = (item: IStock, weighting) => {
    this.props.dispatch(updateStock(item.id, +weighting));
    this.updateTotalWeight();
  };

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
        <SearchResults results={searchResults} select={this.selectSearchResult} displayKey="name" keyId="id" />
        {portfolioItems.length ? (
          <div className="portfolio-weighting-btns">
            <Button name="Equal" type="button" onClick={this.onEqualClick} />
            <Button name="Redistribute" type="button" onClick={this.onRedistributeClick} />
          </div>
        ) : (
          ""
        )}

        <div>
        <span>{portfolioItems.length ? 'Total Weights: ' : ""}</span>
          <span className="portfolio-total" style={{ color: this.state.total != 100 ? "red" : "black" }}>
            {portfolioItems.length ? this.state.total : ""}
          </span>
        </div>

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
