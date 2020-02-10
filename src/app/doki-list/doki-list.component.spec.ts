import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DokiListComponent } from './doki-list.component';

describe('DokiListComponent', () => {
  let component: DokiListComponent;
  let fixture: ComponentFixture<DokiListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DokiListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DokiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
