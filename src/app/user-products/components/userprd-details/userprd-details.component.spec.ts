import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserprdDetailsComponent } from './userprd-details.component';

describe('UserprdDetailsComponent', () => {
  let component: UserprdDetailsComponent;
  let fixture: ComponentFixture<UserprdDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserprdDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserprdDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
