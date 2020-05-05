import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormControl, FormBuilder, Validators, FormGroup} from '@angular/forms';
import { CrudService } from 'src/app/modules/shared/service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {

  propertyForm: FormGroup ;

  constructor(private _fb: FormBuilder, private _crudService: CrudService, private _toastr: ToastrService) { }

  ngOnInit(): void {
    
    this.propertyForm = this._fb.group({
      propNo: new FormControl('', [Validators.required, Validators.minLength(7)]),
      propCat: new FormControl('', [Validators.required, Validators.email]),
      electoralArea: new FormControl('', Validators.required),
      stat: new FormControl('', Validators.required),
      rate:  new FormControl('', Validators.required),
      value:  new FormControl('', Validators.required),
      longitude:  new FormControl('', Validators.required),
      latitude:  new FormControl('', Validators.required),
    })
  }


  saveProperty(){


    console.log(this.propertyForm.value)

    this._crudService.addItem(this.propertyForm.value, "property").subscribe(data=>{
  
    }, error=>{

      console.error(error)
    })




  }

}
