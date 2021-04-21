import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CounterProperties } from '../counter-properties';

@Component({
  selector: 'app-super-duper-counter',
  templateUrl: './super-duper-counter.component.html',
  styleUrls: ['./super-duper-counter.component.css']
})
export class SuperDuperCounterComponent implements OnInit {
  @Input() counter_data: CounterProperties = new CounterProperties();
  @Output() newItemEvent = new EventEmitter<boolean>();

  disabled: boolean = false;
  public myTimer;

  ngOnInit(): void {
  }

  startCount() {
    this.myTimer = setInterval( () => {
      this.counter_data.counter_value ++;
      if(this.counter_data.counter_value % 20 == 0){
        //create new counter
        this.generateCounter();
      }
    }, 1000);
  }

  generateCounter() {
    this.newItemEvent.emit(true);
  }
}