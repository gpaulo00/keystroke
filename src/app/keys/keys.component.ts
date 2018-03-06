import { Component, OnInit } from '@angular/core';
import { KeysService } from '../keys.service';
import { Key } from '../key';

@Component({
  selector: 'app-keys',
  templateUrl: './keys.component.html',
  styleUrls: ['./keys.component.css']
})
export class KeysComponent implements OnInit {
  keys: Key[];
  constructor(private keysService: KeysService) { }

  getKeys(): void {
    this.keysService.getKeys()
      .subscribe(keys => this.keys = keys);
  }

  ngOnInit() {
    this.getKeys();
  }

}
