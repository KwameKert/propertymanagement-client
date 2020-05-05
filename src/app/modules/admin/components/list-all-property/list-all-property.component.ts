import { Component, OnInit, ViewChild } from '@angular/core';
import { CrudService } from 'src/app/modules/shared/service';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-all-property',
  templateUrl: './list-all-property.component.html',
  styleUrls: ['./list-all-property.component.css']
})
export class ListAllPropertyComponent implements OnInit {


  isLoading: boolean = true;
  dataSource: any = null;

  isAddProperty: boolean = false;

  displayedColumns: Array<string> = ['propNo', 'owner', 'propCat', 'value', 'actions'] ;
  

  constructor(private _crudService: CrudService, private _router: Router) { }


  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  

  ngOnInit(): void {
    this.loadAllProperties();
  }


  loadAllProperties(){
    this._crudService.fetchAll("property").subscribe(data=>{
      
    
      this.dataSource = data.data;
      this.dataSource.paginator = this.paginator;
      this.isLoading = false;
    }, error=>{

    })
  }



  newUserCreated(event: any){
    this.loadAllProperties();
  }

  addProperty(){
    this._router.navigate(['/admin/add_property_owner'])
  }

}
