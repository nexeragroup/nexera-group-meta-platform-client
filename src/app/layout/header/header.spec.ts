import { ComponentFixture, TestBed } from '@angular/core/testing';
import { signal } from '@angular/core';
import { ThemeService } from '../../core/services/theme.service';
import { Header } from './header';

describe('Header', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;

  beforeEach(async () => {
    const theme = { dark: signal(false), toggleMode: () => theme.dark.update((dark) => !dark) };
    await TestBed.configureTestingModule({
      declarations: [Header],
      providers: [{ provide: ThemeService, useValue: theme }],
    }).compileComponents();

    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('toggles the shared theme service', () => {
    expect(component.darkMode()).toBe(false);
    component.toggleTheme();
    expect(component.darkMode()).toBe(true);
  });
});
