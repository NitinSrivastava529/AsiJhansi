import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicAwareness } from './public-awareness';

describe('PublicAwareness', () => {
  let component: PublicAwareness;
  let fixture: ComponentFixture<PublicAwareness>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublicAwareness]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicAwareness);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
