import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenSectionComponent } from './token-section.component';

describe('TokenSectionComponent', () => {
  let component: TokenSectionComponent;
  let fixture: ComponentFixture<TokenSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TokenSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TokenSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
