import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoIsWho } from './who-is-who';

describe('WhoIsWho', () => {
  let component: WhoIsWho;
  let fixture: ComponentFixture<WhoIsWho>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhoIsWho]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhoIsWho);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
