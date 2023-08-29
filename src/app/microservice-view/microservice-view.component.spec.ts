import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroserviceViewComponent } from './microservice-view.component';

describe('MicroserviceViewComponent', () => {
  let component: MicroserviceViewComponent;
  let fixture: ComponentFixture<MicroserviceViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MicroserviceViewComponent]
    });
    fixture = TestBed.createComponent(MicroserviceViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
