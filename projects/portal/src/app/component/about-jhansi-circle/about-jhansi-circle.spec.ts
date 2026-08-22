import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutJhansiCircle } from './about-jhansi-circle';

describe('AboutJhansiCircle', () => {
  let component: AboutJhansiCircle;
  let fixture: ComponentFixture<AboutJhansiCircle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutJhansiCircle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutJhansiCircle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
