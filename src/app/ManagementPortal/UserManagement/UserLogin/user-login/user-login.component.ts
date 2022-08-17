import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,  } from '@angular/forms';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {


myLoginForm:any |FormGroup;

  constructor(private formBuilder:FormBuilder) { 
    this.myForm()
  }

  ngOnInit(): void {
  }
myForm(){
  this.myLoginForm = this.formBuilder.group({
    Name:['',[Validators.required,Validators.minLength(4),Validators.maxLength(40),Validators.pattern(/^[A-Za-z]*$/)]],
    Password:['',[Validators.required,Validators.minLength(4),Validators.maxLength(20)]]
  })
}
SubmitForm(){

}
}

//======================>> 💜Reactive-Form💜 <<=========================\\
   
//1st step is import Reactive-Form-Module and Form-Module in app.module.ts in (import)
//2nd step is create property/variable and give type FormGroup | any ▶️▶️▶️ type any becuse strict mode is true 
//3rd step is import FormBuilder through Dependecy-Enjection 
//4th step is create a function eg:(myForm) now in function call property myLoginForm and equal FormBuilder.group
//5th step now create field Names 
//6th step is on html-page


//======================>> 💜Reactive-Form💜 <<=========================\\
