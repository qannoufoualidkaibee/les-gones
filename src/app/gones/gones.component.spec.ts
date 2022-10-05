import {ComponentFixture, TestBed} from '@angular/core/testing';

import {GonesComponent} from './gones.component';
import {NgxsModule, Store} from "@ngxs/store";
import {GonesState} from "./store/gones.state";

describe('GonesComponent', () => {
  let component: GonesComponent;
  let fixture: ComponentFixture<GonesComponent>;

  beforeEach(async () => {
    let store: Store;

    await TestBed.configureTestingModule({
      imports: [
        NgxsModule.forRoot([GonesState])
      ],
      declarations: [ GonesComponent ]
    })
    .overrideComponent(GonesComponent, {
      set: { template: '' }
    });
    store = TestBed.inject(Store);
    fixture = TestBed.createComponent(GonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
