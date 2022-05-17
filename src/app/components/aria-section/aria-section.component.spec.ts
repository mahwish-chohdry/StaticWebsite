import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AriaSectionComponent } from './aria-section.component';

describe('AriaSectionComponent', () => {
  let component: AriaSectionComponent;
  let fixture: ComponentFixture<AriaSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AriaSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AriaSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
