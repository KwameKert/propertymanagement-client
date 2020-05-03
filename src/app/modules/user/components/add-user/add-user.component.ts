import { Component, OnInit } from '@angular/core';
import {FormControl, FormBuilder, Validator, FormGroup} from '@angular/forms';
import { CrudService } from 'src/app/modules/shared/service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  userForm: FormGroup ;
  constructor(private _fb: FormBuilder, private _crudService: CrudService) { }

  ngOnInit(): void {
    
    this.userForm = this._fb.group({
      //username: new FormControl('', Validators.)
    })
  }

}
