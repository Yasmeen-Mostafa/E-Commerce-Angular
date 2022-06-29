import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,FormControl, FormArray} from '@angular/forms';
import { ConfirmPasswordValidator } from 'src/app/confirm-password.validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

  registerForm:FormGroup=this.fb.group({
    nameInput:["",[Validators.required]],
    emailInput:["",[Validators.email,Validators.required]],
    userInput:["",[Validators.required,Validators.pattern(/^[\S]{1,}$/)]],
    passwordInput:["",[Validators.required,Validators.minLength(8),Validators.pattern('^()(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[-+_!@#$%^&*.,?])[a-zA-Z0-9].+$')]],
    ConfirmPasswordInput:["",[Validators.required]],
    alternateAddresses: this.fb.array([]),
  },{validators:ConfirmPasswordValidator('passwordInput','ConfirmPasswordInput')})

  constructor(private fb:FormBuilder) {}

  get controlValidation(){
    return this.registerForm.controls
  }



  submitReactiveForm(){
    console.log(this.registerForm);
    
  }
  formAdd = {} as FormGroup;

  ngOnInit(): void {

    this.formAdd = this.fb.group({

      addressInput: ['', [Validators.required,Validators.pattern(/^[a-zA-Z6650-9]+$/),Validators.minLength(6)]],

      streetInput:  ['', [Validators.required,Validators.pattern(/^[a-zA-Z0-9]+$/),Validators.minLength(6)]],

      cityInput:  ['', [Validators.required,Validators.pattern(/^[a-zA-Z]+$/),Validators.minLength(6)]],

      countryInput:  ['', [Validators.required,Validators.pattern(/^[a-zA-Z]+$/),Validators.minLength(6)]],

    });

  }

  get addresses(): FormArray {

    return this.registerForm.get('alternateAddresses') as FormArray;

  }

  addAddress() {

    this.addresses.push(this.formAdd);

  }
  deleteAddress(index:number){

    this.addresses.removeAt(index)
  }
}
