import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActRules } from './act-rules';

describe('ActRules', () => {
  let component: ActRules;
  let fixture: ComponentFixture<ActRules>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActRules]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActRules);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
