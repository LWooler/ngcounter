import { Component, Input, OnInit } from '@angular/core';
import { CounterProperties } from '../counter-properties';

@Component({
  selector: 'app-super-duper-counter',
  templateUrl: './super-duper-counter.component.html',
  styleUrls: ['./super-duper-counter.component.css']
})
export class SuperDuperCounterComponent implements OnInit {
  @Input() counter_data: CounterProperties = new CounterProperties();

  disabled: boolean = false;
  public myTimer;

  ngOnInit(): void {
  }

  startCount() {
    this.myTimer = setInterval( () => {
      this.counter_data.counter_value ++;
      console.log(this.counter_data.counter_value)
    }, 1000);
    // this.counter_data.counter_value = myTimer;
  }
}