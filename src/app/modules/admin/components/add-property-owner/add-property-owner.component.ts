import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-property-owner',
  templateUrl: './add-property-owner.component.html',
  styleUrls: ['./add-property-owner.component.css']
})
export class AddPropertyOwnerComponent implements OnInit {

  isLinear = true;
  ownerId: number = 1;


  @ViewChild('stepper') stepper: MatStepper;

  constructor(private _formBuilder: FormBuilder, private _router: Router) {}

  ngOnInit() {
  
  }


  selectOwner(id){
    this.ownerId = id;
    this.stepper.selected.completed = true;
    this.stepper.next()
   //console.log(event)
  }

  propertyAdded(event: any){
    this.stepper.selected.completed = true;
    this.stepper.next()
  }

  resetForm(){
      this._router.navigate(['/admin/add_property_owner'])
  }

  listProperty(){
    this._router.navigate(['/admin/list_property'])
  }

}
