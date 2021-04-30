import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierSortComponent } from './modifier-sort.component';

describe('ModifierSortComponent', () => {
  let component: ModifierSortComponent;
  let fixture: ComponentFixture<ModifierSortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierSortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
