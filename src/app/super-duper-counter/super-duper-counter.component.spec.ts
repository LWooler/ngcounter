import { ComponentFixture, discardPeriodicTasks, fakeAsync, flush, TestBed, tick, waitForAsync } from '@angular/core/testing';
import 'zone.js/dist/zone-patch-rxjs-fake-async';

import { SuperDuperCounterComponent } from './super-duper-counter.component';

describe('SuperDuperCounterComponent', () => {
  let component: SuperDuperCounterComponent;
  let fixture: ComponentFixture<SuperDuperCounterComponent>;
  let componentHtml;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperDuperCounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperDuperCounterComponent);
    component = fixture.componentInstance;
    componentHtml = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a start button', () => {
    expect(componentHtml.querySelector('.button-start').innerHTML).toEqual('Start');
  });

  it('super counter start at 0 and increment when start is clicked', fakeAsync(() => {
    expect(component.disabled).toBeFalsy();
    expect(componentHtml.querySelector('.count-val').innerHTML).toEqual('0')
    componentHtml.querySelector('.button-start').click();

    tick(5000);
    fixture.detectChanges();
    expect(componentHtml.querySelector('.count-val').innerHTML).toEqual('5');
    expect(component.disabled).toBeTruthy();
    flush();
    discardPeriodicTasks()
  }));
});
