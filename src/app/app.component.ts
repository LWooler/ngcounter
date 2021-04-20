import { Component } from '@angular/core';
import { CounterProperties } from './counter-properties'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Counter';
  public super_counter_array: CounterProperties[] = [];
  public counter_array: CounterProperties[] = [];

  create(){
    if(this.counter_array.length < 5) {
      let counter: CounterProperties = new CounterProperties();
      this.counter_array.push(counter);
    }
    else {
      this.create_supercounter();
    }
  }

  create_supercounter(){
    let counter_sum = 0;
    let counter1: CounterProperties = new CounterProperties();

    for(let i =0; i < this.counter_array.length; i++) {
      counter_sum += this.counter_array[i].counter_value;
    }

    counter1.counter_value = counter_sum;
    counter1.name = "Super Counter";
    this.super_counter_array.push(counter1);
    this.counter_array = [];
  }
}
