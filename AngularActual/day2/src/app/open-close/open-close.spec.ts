import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenClose } from './open-close';

describe('OpenClose', () => {
  let component: OpenClose;
  let fixture: ComponentFixture<OpenClose>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpenClose],
    }).compileComponents();

    fixture = TestBed.createComponent(OpenClose);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
