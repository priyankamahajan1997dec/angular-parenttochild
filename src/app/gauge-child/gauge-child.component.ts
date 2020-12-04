import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-gauge-child',
  templateUrl: './gauge-child.component.html',
  styleUrls: ['./gauge-child.component.css']
})
export class GaugeChildComponent implements OnInit {

 
 @Input() name: string;
  ngOnInit() {
    console.warn("hero",this.hero)
  }

}