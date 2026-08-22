import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Monuments } from './monuments';

describe('Monuments', () => {
  let component: Monuments;
  let fixture: ComponentFixture<Monuments>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Monuments]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Monuments);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
