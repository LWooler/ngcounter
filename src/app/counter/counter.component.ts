import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  public counter_value: number = 0;

  increment() {
    this.counter_value ++;
  }

  decrement(){
    if(this.counter_value != 0) {
      this.counter_value --;
    }
  }

  ngOnInit(): void {
  }

}
