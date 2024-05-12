import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariableCardComponent } from './variable-card.component';

describe('VariableCardComponent', () => {
  let component: VariableCardComponent;
  let fixture: ComponentFixture<VariableCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VariableCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VariableCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
