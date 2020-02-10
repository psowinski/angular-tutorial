import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DokiThumbinalComponent } from './doki-thumbinal.component';

describe('DokiThumbinalComponent', () => {
  let component: DokiThumbinalComponent;
  let fixture: ComponentFixture<DokiThumbinalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DokiThumbinalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DokiThumbinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
