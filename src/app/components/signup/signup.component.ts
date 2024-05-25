import { Component, OnInit } from '@angular/core'
import { User } from '../../user';
import { SignupService } from '../../service/signup.service';
import { error } from 'console';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})

export class SignupComponent implements OnInit{

  user : User = new User();

  constructor(private signupService: SignupService){}

  ngOnInit(): void {}
  
  registerUser(){
    this.signupService.registerUser(this.user).subscribe(
      data =>  {alert("User is registered")},
      error => {alert("User not registered")}
    )
  }

  type: string = "password";
  isText: boolean=false;

  eyeIcon: string= "fa-eye-slash";

  hideShowPass(){
    this.isText= !this.isText;
    this.isText? this.eyeIcon= "fa-eye" : this.eyeIcon="fa-eye-slash";
    this.isText ? this.type= "text" : this.type= "password";
    
  }

}
