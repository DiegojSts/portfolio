import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortolioDetailsComponent } from './portolio-details.component';

describe('PortolioDetailsComponent', () => {
  let component: PortolioDetailsComponent;
  let fixture: ComponentFixture<PortolioDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortolioDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortolioDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
