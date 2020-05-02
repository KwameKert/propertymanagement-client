import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup,  FormBuilder,  Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    isLoading: boolean = false;
    loginForm: FormGroup ;

  constructor(private router: Router, private _fb: FormBuilder,private _authService: AuthService) { }

  ngOnInit() {
    this.loginForm = this._fb.group({
        username: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required)
    });

  }

  loginUser(){
    this._authService.loginUser(this.loginForm.value).subscribe(data=>{
      console.log(data.data)
    }, error=>{

    })
    //this.router.navigate(['dashboard']);
  }

}
