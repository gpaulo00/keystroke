import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import Dexie from 'dexie';

import { IKey, Key } from './key';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { flatMap } from 'rxjs/operators';
import { fromPromise } from 'rxjs/observable/fromPromise';

@Injectable()
export class KeyService extends Dexie {
  keys$: BehaviorSubject<Key[] | null> = new BehaviorSubject(null);
  private keys: Dexie.Table<IKey, number>;

  constructor() {
    super("KeysDatabase");
    this.version(1).stores({
      keys: '++id, title',
    });
    this.updateList();
  }

  private updateList(): void {
    this.keys.toArray().then((keys: Array<Key>) => {
      this.keys$.next(keys);
    })
  }

  /**
   * Gets a Key from the system.
   * @param {number} id
   * @returns {Observable<Key>}
   */
  get(id: number): Observable<Key> {
    return fromPromise(this.keys.get(id));
  }

  /**
   * Updates a Key in the system.
   * @param {Key} key
   * @returns {Observable<Key>}
   */
  update(key: Key): Observable<Key> {
    return this.get(key.id).pipe(flatMap(() => {
      return fromPromise(this.keys.put(key).then((): Key => {
        this.updateList();
        return key;
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
   * @param {Key} key
   * @returns {Observable<Key>}
   */
  add(key: Key): Observable<Key> {
    return fromPromise(this.keys.put(key).then((): Key => {
      this.updateList();
      return key;
    }));
  }
}
