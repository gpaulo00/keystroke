import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Key } from '../key';
import { KeysService } from '../keys.service';

@Component({
  selector: 'app-key-detail',
  templateUrl: './key-detail.component.html',
  styleUrls: ['./key-detail.component.css']
})
export class KeyDetailComponent implements OnInit {
  @Input() key: Key;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private keyService: KeysService,
  ) { }

  ngOnInit() {
    this.getKey();
  }

  getKey(): void {
    const id = <string>this.route.snapshot.paramMap.get('id');
    this.keyService.get(id)
      .subscribe(key => this.key = key);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.keyService.update(this.key)
      .subscribe(() => this.goBack());
  }
}