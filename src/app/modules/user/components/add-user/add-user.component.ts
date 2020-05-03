import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormControl, FormBuilder, Validators, FormGroup} from '@angular/forms';
import { CrudService } from 'src/app/modules/shared/service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  userForm: FormGroup ;
  role: any = '';
  @Output() newUser: EventEmitter<boolean> = new EventEmitter();

  constructor(private _fb: FormBuilder, private _crudService: CrudService) { }

  ngOnInit(): void {
    
    this.userForm = this._fb.group({
      username: new FormControl('', [Validators.required, Validators.minLength(7)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      fullName: new FormControl('', Validators.required),
      password: new FormControl('123456', Validators.required),
      role: '',
      stat: ''
    })
  }


  addUser(){


    console.log(this.userForm.value)

    this._crudService.addItem(this.userForm.value, "user").subscribe(data=>{
      //this.userForm.reset();

      this.newUser.emit(true)
    }, error=>{

      console.error(error)
    })




  }

}
