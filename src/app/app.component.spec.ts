import { TestBed, async, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { SuperCounterComponent } from './super-counter/super-counter.component';
import { SuperDuperCounterComponent } from './super-duper-counter/super-duper-counter.component';

describe('AppComponent', () => {
  let fixture;
  let app;
  let appHtml;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CounterComponent,
        SuperCounterComponent,
        SuperDuperCounterComponent
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
    appHtml = fixture.debugElement.nativeElement;
    fixture.autoDetectChanges();
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
    for(let i=0;i < 5; i++){
      app.create();
      app.counter_array[i].counter_value = 1;
    }

    app.create();
    expect(app.super_counter_array[0].counter_value).toEqual(5);
    expect(app.counter_array.length).toEqual(0);
  });

  it('super counter should be twice the size of a regular counter', () => {
    let counter_elem = TestBed.createComponent(CounterComponent).debugElement.nativeElement.querySelector('.counter-class');
    let scounter_elem = TestBed.createComponent(SuperCounterComponent).debugElement.nativeElement.querySelector('.scounter-class');

    expect(getComputedStyle(scounter_elem).width==getComputedStyle(counter_elem).width).toBeFalsy();
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

  it('super duper counter should be twice the size of a super counter and a different color', () => {
    let scounter_comp = TestBed.createComponent(SuperCounterComponent);
    let scounter_elem = scounter_comp.debugElement.nativeElement.querySelector('.scounter-class');
    expect(getComputedStyle(scounter_elem).width).toEqual('400px');
    let scounter_color = getComputedStyle(scounter_elem).backgroundColor;

    let sdcounter_comp = TestBed.createComponent(SuperDuperCounterComponent);
    let sdcounter_elem = sdcounter_comp.debugElement.nativeElement.querySelector('.sdcounter-class');
    expect(getComputedStyle(sdcounter_elem).width).toEqual('800px');
    let sdcounter_color = getComputedStyle(sdcounter_elem).backgroundColor;

    expect(scounter_color==sdcounter_color).toBeFalsy();
  });

  it('should let me get selector of counter component objects', () => {
    
    app.create();
    app.create();
    fixture.detectChanges();
    let incr_button_list = appHtml.querySelectorAll('.button-incr');
    expect(incr_button_list.length).toEqual(2);
  });
    
});
