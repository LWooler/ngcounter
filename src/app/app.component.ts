import { Component } from '@angular/core';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Counter';
  public counter_component_array: CounterComponent[] = [];

  create(){
    let counter: CounterComponent = new CounterComponent();
    this.counter_component_array.push(counter);
    
  }
}
