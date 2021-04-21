import { Component, OnInit } from '@angular/core';
import { CounterProperties } from './counter-properties'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  

  title = 'Angular Counter';
  total_count: number = 0;
  myTimer;

  public counter_array: CounterProperties[] = [];
  public super_counter_array: CounterProperties[] = [];
  public super_d_counter_array: CounterProperties[] = [];
  public colossal_counter_array: CounterProperties[] = [];

  ngOnInit(): void {
    this.startCount();
  }

  create(){
    let counter: CounterProperties = new CounterProperties();
    this.counter_array.push(counter);
    
    if(this.counter_array.length == 6) this.create_supercounter();
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

    if(this.super_counter_array.length == 3) this.create_superdupercounter();   
  }

  create_superdupercounter(){
    let counter_sum = 0;
    let counter1: CounterProperties = new CounterProperties();

    for(let i =0; i < this.super_counter_array.length; i++) {
      counter_sum += this.super_counter_array[i].counter_value;
    }

    counter1.counter_value = counter_sum;
    counter1.name = "Super Duper Counter";
    this.super_d_counter_array.push(counter1);
    this.super_counter_array = [];

    if(this.super_d_counter_array.length == 3) this.create_colossalcounter();
  }

  create_colossalcounter(){
    let counter_sum = 0;
    let counter1: CounterProperties = new CounterProperties();

    for(let i =0; i < this.super_d_counter_array.length; i++) {
      counter_sum += this.super_d_counter_array[i].counter_value;
    }

    counter1.counter_value = counter_sum;
    counter1.name = "Colossal Counter";
    this.colossal_counter_array.push(counter1);
    this.super_d_counter_array = [];
  }

  addItem(bool: boolean){
    if (bool) this.create();
  }

  startCount() {
    this.myTimer = setInterval( () => {
      this.total_count = 0;
      this.counter_array.forEach(element => {
        this.total_count += element.counter_value;
      });
      this.super_counter_array.forEach(element => {
        this.total_count += element.counter_value;
      });
      this.super_d_counter_array.forEach(element => {
        this.total_count += element.counter_value;
      });
      this.colossal_counter_array.forEach(element => {
        this.total_count += element.counter_value;
      });
    }, 1000);
  }
}
