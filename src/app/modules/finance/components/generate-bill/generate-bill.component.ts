import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from 'src/app/modules/shared/service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup,  FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-generate-bill',
  templateUrl: './generate-bill.component.html',
  styleUrls: ['./generate-bill.component.css']
})
export class GenerateBillComponent implements OnInit {

  propertyId: any;
  property: any;
  billForm: FormGroup;
  invoiceId: string;

  constructor(private _route: ActivatedRoute, private _crudService: CrudService, private _toastr: ToastrService, private _fb: FormBuilder, private _router: Router) { }


  ngOnInit(): void {

      this.propertyId = this._route.snapshot.paramMap.get('id');
      this.fetchProperty().then(()=>{
        this.invoiceId = `${new Date().getFullYear()}${Math.floor(Math.random() * (3000 - 1000) + 4)}`
        this.loadForm()

      })
      
  
  }

  loadForm(){
      this.billForm =  this._fb.group({
        invoiceId: this.invoiceId,
        propertyId: this.propertyId,
        notes: '',
        dueDate: new FormControl('', Validators.required),
        amount: this.property.value*this.property.rate,
        billDate: new FormControl('', Validators.required)
      })
  }


  fetchProperty(){
    return new Promise((resolve, reject)=>{
      this._crudService.fetchItem({id: this.propertyId, module: "property"}).subscribe(data=>{
        this.property = data.data
        resolve(true)
  
      }, error=>{
      
        this._toastr.info("An error occured", "Oops 🥺", {  timeOut:4000});
        console.error(error)
        reject(false)
      })
    })
   
  }


  saveBill(){

  
      this._crudService.addItem(this.billForm.value, "invoice").subscribe(data=>{

        console.log(data)

        this._toastr.success("Invoice has been generated", "Success", {  timeOut:4000});
        this._router.navigate(['/admin/list_property']);
      }, error=>{
        this._toastr.info("An error occured", "Oops 🥺", {  timeOut:4000});
        console.error(error)
      })

  }

}
