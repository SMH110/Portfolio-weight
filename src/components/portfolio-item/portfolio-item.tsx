import * as React from "react";
import "./portfolio-item.scss";
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
    let {item} = this.props;
    return (
      <div className={!item.isValid ? 'portfolio-item invalid' : 'portfolio-item'}>
        <div className="column">
          <span className="name">{item.name}</span>
        </div>
        <div className="column">
          <input className="weight" type="number" value={item.weight} onChange={this.onWeightingChange} />
        </div>

        <div className="column ">
          <button className="btn remove" type="button" onClick={this.onRemove}>
            Remove
          </button>
        </div>
      </div>
    );
  }
}
