import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserServicesService } from 'src/app/services/user-services.service';
import { User } from './../../model/user';
import { AlertifyService } from './../../services/alertify.service';


@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  registrationform: FormGroup;
  user: User;
  userSubmitted: boolean;
  constructor(private fb: FormBuilder,
              private userServices: UserServicesService,
              private alert: AlertifyService) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    // this.registrationform = new FormGroup({
    //   userName: new FormControl(null, Validators.required),
    //   email: new FormControl(null, [Validators.required, Validators.email]),
    //   password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
    //   confirmPassword: new FormControl(null, [Validators.required]),
    //   mobile: new FormControl(null, [Validators.required, Validators.maxLength(10)])
    // }, this.passwordMatchingValidator);
    this.createRegistraionForm();
  }

  createRegistraionForm(){
    this.registrationform = this.fb.group({
      userName: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]],
      confirmPassword: [null, [Validators.required]],
      mobile: [null, [Validators.required, Validators.maxLength(10)]]
    }, {Validators: this.passwordMatchingValidator});
  }

  passwordMatchingValidator(fg: FormGroup): Validators{
    return fg.get('password').value === fg.get('confirmPassword').value ? null :
    {
      notmatched: true
    };
  }



  ///////                           //////////////////
  ///////// getter methods for all controls//////////
  ////////////                     /////////////////
  get userName()
  {
    return this.registrationform.get('userName') as FormControl;
  }
  get email()
  {
    return this.registrationform.get('email') as FormControl;
  }
  get password()
  {
    return this.registrationform.get('password') as FormControl;
  }
  get confirmPassword()
  {
    return this.registrationform.get('confirmPassword') as FormControl;
  }
  get mobile()
  {
    return this.registrationform.get('mobile') as FormControl;
  }

  onSubmit(){
    console.log(this.registrationform.value);
    this.userSubmitted = true;
    if (this.registrationform.valid){
        this.userServices.addUser(this.userData());
        this.registrationform.reset();
        this.userSubmitted = false;
        this.alert.success('Successfully registered.!');
  }else{
        this.alert.error('Somthing wrong.!');
  }
  }

  userData(): User {
    return this.user = {
      userName: this.userName.value,
      email: this.email.value,
      password: this.password.value,
      mobile: this.mobile.value
    };
  }
}
