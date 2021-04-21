import { TestBed, async, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { SuperCounterComponent } from './super-counter/super-counter.component';

describe('AppComponent', () => {
  let fixture;
  let app;
  let appHtml;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
    appHtml = fixture.debugElement.nativeElement;
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

  it('super counter should be twice the size of a regular counter', () => {
    let counter_comp = TestBed.createComponent(CounterComponent);
    let counter_elem = counter_comp.debugElement.nativeElement.querySelector('.counter-class');
    expect(getComputedStyle(counter_elem).width).toEqual('200px');

    let scounter_comp = TestBed.createComponent(SuperCounterComponent);
    let scounter_elem = scounter_comp.debugElement.nativeElement.querySelector('.scounter-class');
    expect(getComputedStyle(scounter_elem).width).toEqual('400px');
  });

  it('should have super d counter equal to sum of prev counters and prev counters will be removed from view', () => {
    for(let i =0; i < 17; i++) {
      app.create();
    }
    app.counter_array[1].counter_value = 5;
    app.super_counter_array[0].counter_value = 5;
    app.create();

    expect(app.super_d_counter_array[0].counter_value).toEqual(10);
    expect(app.counter_array.length).toEqual(0);
    expect(app.super_counter_array.length).toEqual(0);
  });
    
});
