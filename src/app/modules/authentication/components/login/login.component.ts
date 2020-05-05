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

  constructor(private router: Router, private _fb: FormBuilder,private _authService: AuthService, private _toastr: ToastrService) { }

  ngOnInit() {
    this.loginForm = this._fb.group({
        username: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required)
    });

  }

  loginUser(){
    this.isLoading  = true;
    this._authService.loginUser(this.loginForm.value).subscribe(data=>{

      this._toastr
      let authData = {
          userId: data.user.id,
          token: data.token,
          username: data.user.username,
          role: data.user.roles[0].role
      }
      
      this._authService.setUserDetails(authData);
      let role = data.user.roles[0].role

     
     
      
      switch(role){
        case "ADMIN":
          console.log(role)
          this.router.navigate(['/admin/dashboard']);
          break;
        case "COLLECTOR":
          this.router.navigate(['/collector/dashboard']);
          break;
        case "OWNER":
          this.router.navigate(['/owner/dashboard']);
          break;

      }

      this._toastr.success("Welcome to Prop Management 🙂","",{
        timeOut:2000
      })
    }, error=>{

      console.error(error)

      this._toastr.info("Invalid credentials. 🥺","",{
        timeOut:2000
      })

    }).add(()=>{
      this.isLoading = false;
    })
    //this.router.navigate(['dashboard']);
  }

}
