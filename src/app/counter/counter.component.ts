import { Component, OnInit } from '@angular/core';
import { CounterProperties } from '../counter-properties'
import { Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  @Input() counter_data: CounterProperties;

  increment() {
    this.counter_data.counter_value ++;
  }

  decrement(){
    if(this.counter_data.counter_value != 0) {
      this.counter_data.counter_value --;
    }
  }

  ngOnInit(): void {
  }

}
