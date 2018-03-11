import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { KeyService } from '../keys.service';
import { Key, KeyData } from '../key';

@Component({
  selector: 'app-key-insert',
  templateUrl: './key-insert.component.html',
  styleUrls: ['./key-insert.component.css']
})
export class KeyInsertComponent implements OnInit {
  key: Key;

  constructor(
    private location: Location,
    private keyService: KeyService,
  ) { }

  ngOnInit() {
    this.key = new Key();
    this.key.data = new KeyData();
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.keyService.add(this.key)
      .subscribe(() => this.goBack());
  }
}
