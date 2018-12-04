import { TestBed, async } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing'
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [ 
        RouterTestingModule 
      ] 
    }).compileComponents();
  }));

  it('Debe crear la aplicación', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('La aplicacion se debe llamar "Mis Llamados"', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Mis Llamados');
  }));

  it('debe tener un link con la etiqueta A', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('a').textContent).toContain('Mis Llamados');
  }));
});
