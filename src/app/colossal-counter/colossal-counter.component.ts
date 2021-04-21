import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CounterProperties } from '../counter-properties';

@Component({
  selector: 'app-colossal-counter',
  templateUrl: './colossal-counter.component.html',
  styleUrls: ['./colossal-counter.component.css']
})
export class ColossalCounterComponent implements OnInit {
  @Input() counter_data: CounterProperties = new CounterProperties();
  @Output() newItemEvent = new EventEmitter<boolean>();

  disabled: boolean = false;
  public myTimer;

  ngOnInit(): void {
    this.startCount();
  }

  startCount() {
    this.myTimer = setInterval( () => {
      this.counter_data.counter_value += 2;
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