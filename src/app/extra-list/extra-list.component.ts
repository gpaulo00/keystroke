import { Component, OnInit, Input } from '@angular/core';
import { KVPair } from '../key';

@Component({
  selector: 'app-extra-list',
  templateUrl: './extra-list.component.html',
  styleUrls: ['./extra-list.component.css']
})
export class ExtraListComponent implements OnInit {
  @Input() data: KVPair[];
  actualName: string;
  actualValue: string;
  editing: number|null = null;

  constructor() { }

  ngOnInit() {
  }

  saveExtra(): void {
    if (this.editing === null) {
      this.data.push(new KVPair(this.actualName, this.actualValue));
    } else {
      const data = this.data[this.editing];
      data.key = this.actualName;
      data.value = this.actualValue;
      this.editing = null;
    }
    this.actualName = '';
    this.actualValue = '';
  }

  editExtra(n: number): void {
    const h = this.data[n];
    this.editing = n;
    this.actualName = h.key;
    this.actualValue = h.value;
  }
}
