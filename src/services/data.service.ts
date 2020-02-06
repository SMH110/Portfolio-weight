import { ajax } from "rxjs/ajax";
import { AjaxCreationMethod } from "rxjs/internal/observable/dom/AjaxObservable";
import { retry, map } from "rxjs/operators";

import axios, { AxiosStatic } from 'axios';

abstract class DataServiceAbstract{

  getStocks(option?){

  }
}
export class DataService implements DataServiceAbstract{
  constructor(private http: AjaxCreationMethod) {}

  public getStocks() {
    return this.http.get("/data/stocks.json").pipe(retry(2), map(res => res.response as IStock[])) 
  }
}


export class DataService2 implements DataServiceAbstract {
  constructor(private http: AxiosStatic) {}


  getStocks(option?){
    return this.http.get("https://api.github.com/repositories/19438/commits", option)
  }
}

export default function dataServiceFactory() {
  return new DataService2(axios);
}
