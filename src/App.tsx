import React from 'react';
import './App.css';
import Portfolio from './containers/portfolio/Portfolio';




export interface IAppProps {
}

export default class App extends React.Component<IAppProps> {


  public render() {
    return (
      <div className="App">
      <Portfolio/>
     </div>
    );
  }
}



