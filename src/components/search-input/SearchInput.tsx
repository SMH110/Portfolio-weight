import React, { ChangeEvent } from "react";
import { Subscription, Subject } from "rxjs";
import { debounceTime } from "rxjs/operators";

export interface ISearchInputProps {
  type: string;
  value: string;
  placeholder?: string;
  debounceTime?: number;
  onChange: (text: string) => void;
}
export default class SearchInput extends React.Component<ISearchInputProps> {
  private inputChangeSub: Subscription;
  private onChange$ = new Subject();

  public state = {
    searchText: ""
  };

  constructor(public props: ISearchInputProps) {
    super(props);
  }

  public componentDidMount() {
    this.setState({
      searchText: this.props.value
    });

    this.inputChangeSub = this.onChange$.pipe(debounceTime(this.props.debounceTime || 250)).subscribe(() => {
      this.props.onChange(this.state.searchText);
    });
  }

  public componentWillUnmount() {
    this.inputChangeSub.unsubscribe();
  }

  private onChange = (event: ChangeEvent<HTMLInputElement>) => {
    let target = event.target as HTMLInputElement;
    this.setState({ searchText: target.value });
    this.onChange$.next();
  };
  public render() {
    const { type, placeholder } = this.props;
    const value = this.state.searchText;
    return <input type={type} value={value} onChange={this.onChange} placeholder={placeholder} />;
  }
}
