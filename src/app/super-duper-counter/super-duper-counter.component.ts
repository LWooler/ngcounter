import { Component, Input, OnInit } from '@angular/core';
import { CounterProperties } from '../counter-properties';

@Component({
  selector: 'app-super-duper-counter',
  templateUrl: './super-duper-counter.component.html',
  styleUrls: ['./super-duper-counter.component.css']
})
export class SuperDuperCounterComponent implements OnInit {
  @Input() counter_data: CounterProperties = new CounterProperties();
  visible: boolean = true;

  startCount(){

  }

  ngOnInit(): void {
  }

}