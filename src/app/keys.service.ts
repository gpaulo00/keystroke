import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import * as _ from 'lodash';

import { Key } from './key';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { map, take } from 'rxjs/operators';

const KEYS: Key[] = [
  { id: 'a', title: 'credit card', user: null, pass: '1234' },
  { id: 'b', title: 'computer', user: 'admin', pass: '1234' },
];

@Injectable()
export class KeysService {
  keys$: BehaviorSubject<Key[]> = new BehaviorSubject(KEYS);

  constructor() { }

  get(id: string): Observable<Key> {
    return of(this.keys$.getValue().find(key => key.id === id));
  }

  update(key: Key): Observable<Key> {
    return Observable.create((ob) => {
      this.keys$.next(this.keys$.getValue().map((item) => {
        if (item.id === key.id) {
          ob.next(key);
          ob.complete();
          return key;
        }
        return item;
      }));

      ob.next(null);
    });
  }

  remove(id: string): Observable<boolean> {
    return this.keys$.pipe(
      take(1),
      map((keys: Key[]) => {
        const res = _.filter(keys, (i: Key) => i.id !== id);
        if (keys.length !== res.length) {
          this.keys$.next(res);
          return true;
        }
        return false;
      }),
    );
  }
}
