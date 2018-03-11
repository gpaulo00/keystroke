import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import Dexie from 'dexie';

import { Key } from './key';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { flatMap } from 'rxjs/operators';
import { fromPromise } from 'rxjs/observable/fromPromise';

const mock_key = '1234';

@Injectable()
export class KeyService extends Dexie {
  keys$: BehaviorSubject<Key[] | null> = new BehaviorSubject(null);
  private keys: Dexie.Table<Key, number>;

  constructor() {
    super('KeysDatabase');
    this.version(1).stores({
      keys: '++id, title',
    });
    this.updateList();
  }

  private updateList(): void {
    this.keys.toArray().then((keys: Array<Key>) => {
      this.keys$.next(keys);
    });
  }

  /**
   * Gets a Key from the system.
   * @param {number} id
   * @returns {Observable<Key>}
   */
  get(id: number): Observable<Key> {
    return fromPromise(this.keys.get(id)
      .then((o: Key): Key => Key.load(o, mock_key))
    );
  }

  /**
   * Updates a Key in the system.
   * @param {Key} input
   * @returns {Observable<Key>}
   */
  update(input: Key): Observable<Key> {
    const key = Key.save(input, mock_key);
    return this.get(key.id).pipe(flatMap(() => {
      return fromPromise(this.keys.put(key).then((): Key => {
        this.updateList();
        return input;
      }));
    }));
  }

  /**
   * Removes a Key from the system.
   * @param {number} id
   * @returns {Observable<void>}
   */
  remove(id: number): Observable<void> {
    return fromPromise(this.keys.delete(id).then(() => {
      this.updateList();
    }));
  }

  /**
   * Adds a new key into the system.
   * @param {Key} input
   * @returns {Observable<Key>}
   */
  add(input: Key): Observable<Key> {
    const key = Key.save(input, mock_key);
    return fromPromise(this.keys.put(key).then((): Key => {
      this.updateList();
      return input;
    }));
  }
}
