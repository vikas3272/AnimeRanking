import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaycardgridComponent } from './displaycardgrid.component';

describe('DisplaycardgridComponent', () => {
  let component: DisplaycardgridComponent;
  let fixture: ComponentFixture<DisplaycardgridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaycardgridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplaycardgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
