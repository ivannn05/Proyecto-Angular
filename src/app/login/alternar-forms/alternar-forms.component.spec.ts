import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlternarFormsComponent } from './alternar-forms.component';

describe('AlternarFormsComponent', () => {
  let component: AlternarFormsComponent;
  let fixture: ComponentFixture<AlternarFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlternarFormsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlternarFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
