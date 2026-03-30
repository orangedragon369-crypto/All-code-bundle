import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerContactForm } from './customer-contact-form';

describe('CustomerContactForm', () => {
  let component: CustomerContactForm;
  let fixture: ComponentFixture<CustomerContactForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerContactForm],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerContactForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
