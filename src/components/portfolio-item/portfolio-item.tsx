import * as React from "react";
import  './portfolio-item.scss'
export interface IPortfolioItemProps {
  item: IPortfolioItem;
  onRemove: (item) => void;
  onWeightChange: (item, weighting) => void;
}

export default class PortfolioItem extends React.Component<IPortfolioItemProps> {
  public onRemove = event => {
    this.props.onRemove(this.props.item);
  };

  public onWeightingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    
    this.props.onWeightChange(this.props.item, event.target.value);
  };
  public render() {
    return (
      <div className="portfolio-item">
        <div className="column">
          <span className="name">{this.props.item.name}</span>
        </div>
        <div className="column">
          <input className="weight" value={this.props.item.weight} onChange={this.onWeightingChange}/>
        </div>

        <div className="column">
          <button className="remove" type="button" onClick={this.onRemove}>Remove</button>
        </div>
      </div>
    );
  }
}
