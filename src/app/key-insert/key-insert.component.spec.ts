import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyInsertComponent } from './key-insert.component';

describe('KeyInsertComponent', () => {
  let component: KeyInsertComponent;
  let fixture: ComponentFixture<KeyInsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyInsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
