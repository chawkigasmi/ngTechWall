import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterSimulaterComponent } from './router-simulater.component';

describe('RouterSimulaterComponent', () => {
  let component: RouterSimulaterComponent;
  let fixture: ComponentFixture<RouterSimulaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterSimulaterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterSimulaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
