import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormControl, FormBuilder, Validators, FormGroup} from '@angular/forms';
import { CrudService } from 'src/app/modules/shared/service';

@Component({
  selector: 'app-add-owner',
  templateUrl: './add-owner.component.html',
  styleUrls: ['./add-owner.component.css']
})
export class AddOwnerComponent implements OnInit {

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
      role: 'OWNER',
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
