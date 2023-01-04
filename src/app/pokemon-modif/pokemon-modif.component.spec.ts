import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonModifComponent } from './pokemon-modif.component';

describe('PokemonModifComponent', () => {
  let component: PokemonModifComponent;
  let fixture: ComponentFixture<PokemonModifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonModifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonModifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
