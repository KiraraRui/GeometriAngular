import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeometriGuiComponent } from './geometri-gui.component';

describe('GeometriGuiComponent', () => {
  let component: GeometriGuiComponent;
  let fixture: ComponentFixture<GeometriGuiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeometriGuiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeometriGuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
