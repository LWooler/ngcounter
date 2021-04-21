import { Component, Input, OnInit } from '@angular/core';
import { CounterProperties } from '../counter-properties';

@Component({
  selector: 'app-super-counter',
  templateUrl: './super-counter.component.html',
  styleUrls: ['./super-counter.component.css']
})
export class SuperCounterComponent implements OnInit {
  @Input() counter_data: CounterProperties = new CounterProperties();

  increment() {
    this.counter_data.counter_value += 3;
  }

  decrement(){
    let temp_num = this.counter_data.counter_value - 3;
    if(temp_num >= 0) {
      this.counter_data.counter_value = temp_num;
    }
  }

  ngOnInit(): void {
  }

}
