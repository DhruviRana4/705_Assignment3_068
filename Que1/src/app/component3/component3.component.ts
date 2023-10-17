import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component {
  userForm:FormGroup;
  isSubmitted=false;
  constructor(){
    this.userForm=new FormGroup({
      name:new FormControl('',Validators.required),
      email:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required),
      bod:new FormControl('',Validators.required),
      gender:new FormControl('',Validators.required),//if we dont want to select default
      // gender:new FormControl('male')//if we want to select default
      hobbies:new FormGroup({
        sports:new FormControl(),
        reading:new FormControl(),
        writing:new FormControl()
      }),
      profile:new FormControl()
    })
  }

  onSubmit():void{
    console.log(this.userForm.value)
    if(this.userForm.valid){
      this.isSubmitted=true;
    }
  }
}
