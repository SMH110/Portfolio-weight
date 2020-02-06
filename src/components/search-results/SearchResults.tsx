import * as React from "react";

export interface ISearchResultsProps<T = any> {
  results: T[];
  displayKey: string;
  keyId: string;
  select: (result: T) => void;
}

export function SearchResults(props: ISearchResultsProps) {
  const items = props.results.map(item => (
    <div
      data-test="search-result"
      className="result"
      key={item[props.keyId]}
      onClick={() => {
        props.select(item);
      }}
    >
      <span>{item[props.displayKey]}</span>
    </div>
  ));
  return items.length ? <div className="search-results">{items}</div> : <div></div>;
}
