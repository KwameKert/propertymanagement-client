import { Component, OnInit, Output, EventEmitter, Input, SimpleChanges } from '@angular/core';
import {FormControl, FormBuilder, Validators, FormGroup} from '@angular/forms';
import { CrudService } from 'src/app/modules/shared/service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {

  @Input() ownerId: number;

  propertyForm: FormGroup ;

  constructor(private _fb: FormBuilder, private _crudService: CrudService, private _toastr: ToastrService) { }

  ngOnInit(): void {

    
  
  }

  loadForm(){
    this.propertyForm = this._fb.group({
      propNo: new FormControl('', [Validators.required, Validators.minLength(7)]),
      propCat: new FormControl('', Validators.required),
      electoralArea: new FormControl('', Validators.required),
      stat: new FormControl('', Validators.required),
      rate:  new FormControl('', Validators.required),
      value:  new FormControl('', Validators.required),
      longitude:  new FormControl('', Validators.required),
      latitude:  new FormControl('', Validators.required),
      owner: new FormControl('', Validators.required)
    })
  }

  saveProperty(){


    console.log(this.propertyForm.value)

    this._crudService.addItem(this.propertyForm.value, "property").subscribe(data=>{
      this._toastr.success(data.message, "Success  😊", {  timeOut:2000});
      this.propertyForm.reset();
    }, error=>{

      this._toastr.error("An error occured", "Oops 🥺", {  timeOut:4000});
      console.error(error)
    })




  }

  ngOnChanges(changes: SimpleChanges) {
    this.loadForm();
    this.propertyForm.patchValue({
      owner: changes.ownerId.currentValue
    })
  }
}
