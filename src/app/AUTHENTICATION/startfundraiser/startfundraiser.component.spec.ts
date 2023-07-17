import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartfundraiserComponent } from './startfundraiser.component';

describe('StartfundraiserComponent', () => {
  let component: StartfundraiserComponent;
  let fixture: ComponentFixture<StartfundraiserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StartfundraiserComponent]
    });
    fixture = TestBed.createComponent(StartfundraiserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
