import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DokiDetailsComponent } from './doki-details.component';

describe('DokiDetailsComponent', () => {
  let component: DokiDetailsComponent;
  let fixture: ComponentFixture<DokiDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DokiDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DokiDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
