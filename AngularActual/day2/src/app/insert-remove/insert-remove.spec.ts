import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertRemove } from './insert-remove';

describe('InsertRemove', () => {
  let component: InsertRemove;
  let fixture: ComponentFixture<InsertRemove>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsertRemove],
    }).compileComponents();

    fixture = TestBed.createComponent(InsertRemove);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
