import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Key } from './key';

const KEYS: Key[] = [
  { id: 'a', title: 'credit card', user: null, pass: '1234' },
  { id: 'b', title: 'computer', user: 'admin', pass: '1234' },
];

@Injectable()
export class KeysService {
  constructor() { }

  getKeys(): Observable<Key[]> {
    return of(KEYS);
  }
}
