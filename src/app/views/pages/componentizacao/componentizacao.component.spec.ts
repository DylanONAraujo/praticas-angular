import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentizacaoComponent } from './componentizacao.component';

describe('ComponentizacaoComponent', () => {
  let component: ComponentizacaoComponent;
  let fixture: ComponentFixture<ComponentizacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentizacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentizacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
