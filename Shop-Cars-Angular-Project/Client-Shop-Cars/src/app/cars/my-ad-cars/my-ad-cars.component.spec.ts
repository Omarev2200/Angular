import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAdCarsComponent } from './my-ad-cars.component';

describe('MyAdCarsComponent', () => {
  let component: MyAdCarsComponent;
  let fixture: ComponentFixture<MyAdCarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyAdCarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAdCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
