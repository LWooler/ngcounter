import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperCounterComponent } from './super-counter.component';

describe('SuperCounterComponent', () => {
  let component: SuperCounterComponent;
  let fixture: ComponentFixture<SuperCounterComponent>;
  let componentHtml;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperCounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperCounterComponent);
    component = fixture.componentInstance;
    componentHtml = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('super counter should be unable to be less than 0', () => {
    componentHtml.querySelector('.button-decr').click();
    fixture.detectChanges();
    expect(componentHtml.querySelector('.count-val').innerHTML).toEqual('0');
  });

  it('super counter increase by 3 when clicking increment and decrease by 3 after clicking decrement', () => {
    expect(componentHtml.querySelector('.count-val').innerHTML).toEqual('0')
    componentHtml.querySelector('.button-incr').click();
    fixture.detectChanges();
    expect(componentHtml.querySelector('.count-val').innerHTML).toEqual('3');
    componentHtml.querySelector('.button-decr').click();
    fixture.detectChanges();
    expect(componentHtml.querySelector('.count-val').innerHTML).toEqual('0')
  });

  
});
