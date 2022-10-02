import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GonesComponent } from './gones.component';

describe('GonesComponent', () => {
  let component: GonesComponent;
  let fixture: ComponentFixture<GonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GonesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
