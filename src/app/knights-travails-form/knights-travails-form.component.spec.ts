import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnightsTravailsFormComponent } from './knights-travails-form.component';

describe('KnightsTravailsFormComponent', () => {
  let component: KnightsTravailsFormComponent;
  let fixture: ComponentFixture<KnightsTravailsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnightsTravailsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KnightsTravailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
