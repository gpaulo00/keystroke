import { Component, OnInit } from '@angular/core';

import { KeyService } from '../keys.service';
import { Key } from '../key';

@Component({
  selector: 'app-keys',
  templateUrl: './keys.component.html',
  styleUrls: ['./keys.component.css']
})
export class KeysComponent implements OnInit {
  keys: Key[];
  constructor(private keyService: KeyService) { }

  ngOnInit() {
    this.keyService.keys$.subscribe(keys => {
      if (keys != null) {
        this.keys = keys;
      }
    });
  }

  remove(key: Key): void {
    this.keyService.remove(key.id)
      .subscribe();
  }
}
