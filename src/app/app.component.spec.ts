import { TestBed, async, waitForAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component;
  let app;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
    component = TestBed.createComponent(AppComponent);
    app = component.debugElement.componentInstance;
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
    expect(app.counter_array.length).toEqual(0);
  });

  it('should have an counter aray of size 1 after create is clicked', () => {
    app.create();
    expect(app.counter_array.length).toEqual(1);
  });

  // //todo revisit this test
  // it('counter should be unable to be less than 0', () => {
  //   app.create();
  //   // app.counter_array[0].decrement();
  //   expect(app.counter_array[0].counter_value).toEqual(0);
  // });

  it('should have super counter equal to sum of prev 6 counters and 6 counters will be removed from view', () => {
    app.create();
    app.create();
    app.create();
    app.create();
    app.create();
    app.counter_array[0].counter_value = 1;
    app.counter_array[1].counter_value = 5;
    app.counter_array[2].counter_value = 1;
    app.create();

    expect(app.super_counter_array[0].counter_value).toEqual(7);
    expect(app.counter_array.length).toEqual(0);
  });
});
