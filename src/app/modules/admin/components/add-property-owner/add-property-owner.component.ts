import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-add-property-owner',
  templateUrl: './add-property-owner.component.html',
  styleUrls: ['./add-property-owner.component.css']
})
export class AddPropertyOwnerComponent implements OnInit {

  isLinear = false;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
  
  }

}
