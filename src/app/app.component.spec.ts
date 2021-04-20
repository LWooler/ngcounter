import { TestBed, async, waitForAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  // it('should create the app', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app).toBeTruthy();
  // });

  // it(`should have as title 'Angular Counter'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('Angular Counter');
  // });

  // it('should render title in a h1 tag', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Angular Counter');
  // });

  it('should have an empty counter array', () => {
    const component = TestBed.createComponent(AppComponent);
    const app = component.debugElement.componentInstance;
    expect(app.counter_component_array.length).toEqual(0);
  });

  it('should have an counter aray of size 1 after create is clicked', () => {
    const component = TestBed.createComponent(AppComponent);
    const app = component.debugElement.componentInstance;
    app.create();
    expect(app.counter_component_array.length).toEqual(1);
  });

  it('counter should be unable to be less than 0', () => {
    const component = TestBed.createComponent(AppComponent);
    const app = component.debugElement.componentInstance;
    app.create();
    app.counter_component_array[0].decrement();
    expect(app.counter_component_array[0].counter_value).toEqual(0);
  });
});
