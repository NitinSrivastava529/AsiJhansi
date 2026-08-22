import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutAsi } from './about-asi';

describe('AboutAsi', () => {
  let component: AboutAsi;
  let fixture: ComponentFixture<AboutAsi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutAsi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutAsi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
