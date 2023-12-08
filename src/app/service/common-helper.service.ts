import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonHelperService {
  public loadData: BehaviorSubject<any>;

  private _loadData$ = new BehaviorSubject<any>(undefined); 

  loadOptions(selectDataKey: string) : Observable<any> {
    var dataOption = this.loadDefaultOptions();
    if (selectDataKey === 'COUNTRY') {
      dataOption =  this.loadCountryData();
    }
    this._loadData$.next(dataOption);
    return this._loadData$;
  }


  loadDefaultOptions() {
    return [{ id: 'Select', val: 'select' }];
  }

  loadCountryData() {
    return [
      { id: 'IN', val: 'India' },
      { id: 'US', val: 'US' }
    ];
  }


}
