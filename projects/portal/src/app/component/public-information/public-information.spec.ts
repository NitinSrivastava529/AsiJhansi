import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicInformation } from './public-information';

describe('PublicInformation', () => {
  let component: PublicInformation;
  let fixture: ComponentFixture<PublicInformation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublicInformation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicInformation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
