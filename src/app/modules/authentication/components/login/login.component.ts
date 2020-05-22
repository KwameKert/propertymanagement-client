import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup,  FormBuilder,  Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    isLoading: boolean = false;
    loginForm: FormGroup ;
    link: string ;

  constructor(private router: Router, private _fb: FormBuilder,private _authService: AuthService, private _toastr: ToastrService) { }

  ngOnInit() {
    this._authService.logUserOut();
    this.loginForm = this._fb.group({
        username: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required)
    });

  }

  loginUser(){
    this.isLoading  = true;
    this._authService.loginUser(this.loginForm.value).subscribe(async data=>{

      let authData = {
          userId: data.user.id,
          token: data.token,
          username: data.user.username,
          role: data.user.roles[0].role
      }
      
     await  this._authService.setUserDetails(authData);
      let role = data.user.roles[0].role

     
    
      
      switch(role){
        case "ADMIN":
            this.link = '/admin/dashboard';
          break;
        case "COLLECTOR":
            this.link = '/collector/dashboard';
            break;
        case "AUDITOR":
            this.link = '/auditor/dashboard';    
          break;
        case "OWNER":
            this.link = '/owner/dashboard';
          break;
          

      }

     
      this._toastr.success("Welcome to Prop Management 🙂","",{
        timeOut:2000
      })

      return this.router.navigate([this.link])
    }, error=>{

      console.error(error)

      this._toastr.info("Invalid credentials. 🥺","",{
        timeOut:2000
      })

    });
    this.isLoading = false;
    //this.router.navigate(['dashboard']);
  }

}
