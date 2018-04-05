import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraListComponent } from './extra-list.component';

describe('ExtraListComponent', () => {
  let component: ExtraListComponent;
  let fixture: ComponentFixture<ExtraListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtraListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtraListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
