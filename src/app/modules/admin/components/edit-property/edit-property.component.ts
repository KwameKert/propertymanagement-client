import { Component, OnInit, Output, EventEmitter, Input, SimpleChanges } from '@angular/core';
import {FormControl, FormBuilder, Validators, FormGroup} from '@angular/forms';
import { CrudService } from 'src/app/modules/shared/service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-edit-property',
  templateUrl: './edit-property.component.html',
  styleUrls: ['./edit-property.component.scss']
})
export class EditPropertyComponent implements OnInit {


  propertyForm: FormGroup ;
  propertyId: any;

  constructor(private _fb: FormBuilder, private _crudService: CrudService, private _toastr: ToastrService, private _route: ActivatedRoute, private _router: Router,  private ngxService: NgxUiLoaderService,) { }

  ngOnInit(): void {
    this.propertyId = this._route.snapshot.paramMap.get('id');
    this.loadForm();
    this.findProperty(this.propertyId)
  
  }

  loadForm(){
    this.propertyForm = this._fb.group({
      id: '',
      propNo: new FormControl('', [Validators.required, Validators.minLength(7)]),
      propCat: new FormControl('', Validators.required),
      electoralArea: new FormControl('', Validators.required),
      stat: new FormControl('', Validators.required),
      rate:  new FormControl('', Validators.required),
      value:  new FormControl('', Validators.required),
      longitude:  new FormControl('', Validators.required),
      latitude:  new FormControl('', Validators.required),
      userId:''
    })
  }

  saveProperty(){


    this.ngxService.start()

    this._crudService.updateItem({data:this.propertyForm.value, module:"property"}).subscribe(data=>{
      if(data.status != 200){

      this._toastr.info("An error occured", "Oops 🥺", {  timeOut:4000});
      }else{

        this._toastr.success(data.message, "Success  😊", {  timeOut:2000});
      }
    }, error=>{

      this._toastr.error("An error occured", "Oops 🥺", {  timeOut:4000});
      console.error(error)
    })

    this.ngxService.stop()

  }


  findProperty(id){

    this._crudService.fetchItem({id: id, module: 'property'}).subscribe(data=>{

      this.propertyForm.patchValue({
        id: data.data.id,
        propNo: data.data.propNo,
        propCat: data.data.propCat,
        electoralArea: data.data.electoralArea,
        stat: data.data.stat,
        rate:  data.data.rate,
        value:  data.data.value,
        longitude:  data.data.longitude,
        latitude:  data.data.latitude,
        userId: data.data.ownerId
      })
      

    }, error=>{
      console.error(error)
    })
  }


  listProperty(){
    this._router.navigate(['/admin/list_property'])
  }

}
