import { Component } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component {
  intValue:number=68;
  stringValue:string="Dhruvi";
  dateValue:Date=new Date("4-sep-2003");
}
