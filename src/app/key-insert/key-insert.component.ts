import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { KeyService } from '../keys.service';
import { Key, KeyData, KVPair } from '../key';

@Component({
  selector: 'app-key-insert',
  templateUrl: './key-insert.component.html',
  styleUrls: ['./key-insert.component.css']
})
export class KeyInsertComponent implements OnInit {
  key: Key;
  actualName: string;
  actualValue: string;
  more: boolean;
  editing: number|null = null;

  constructor(
    private location: Location,
    private keyService: KeyService,
  ) { }

  ngOnInit() {
    this.key = new Key();
    this.key.data = new KeyData();
    this.key.data.extra = [];
  }

  saveExtra(): void {
    if (this.editing === null) {
      this.key.data.extra.push(new KVPair(this.actualName, this.actualValue));
    } else {
      const data = this.key.data.extra[this.editing];
      data.key = this.actualName;
      data.value = this.actualValue;
      this.editing = null;
    }
    this.actualName = '';
    this.actualValue = '';
  }

  editExtra(n: number): void {
    const h = this.key.data.extra[n];
    this.editing = n;
    this.actualName = h.key;
    this.actualValue = h.value;
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.keyService.add(this.key)
      .subscribe(() => this.goBack());
  }
}
