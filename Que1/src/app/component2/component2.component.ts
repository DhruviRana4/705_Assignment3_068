import { Component } from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component {
  arr1 = ["Roll No : 68",
    "Name    : Dhruvi Rana",
    "Sem     : 7th",
    "Course  : MSCIT"];
  obj1 = [{ "Roll No": 68, "Name": "Dhruvi", "Sem": 7, "Course": "MSCIT" },
          { "Roll No": 69, "Name": "ABC", "Sem": 7, "Course": "MSCIT" },
          { "Roll No": 70, "Name": "XYZ", "Sem": 7, "Course": "MSCIT" },
          { "Roll No": 71, "Name": "PQR", "Sem": 7, "Course": "MSCIT" }
         ];
  selectedValue:string="none";
}
