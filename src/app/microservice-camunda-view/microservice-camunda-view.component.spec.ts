import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroserviceCamundaViewComponent } from './microservice-camunda-view.component';

describe('MicroserviceCamundaViewComponent', () => {
  let component: MicroserviceCamundaViewComponent;
  let fixture: ComponentFixture<MicroserviceCamundaViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MicroserviceCamundaViewComponent]
    });
    fixture = TestBed.createComponent(MicroserviceCamundaViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
