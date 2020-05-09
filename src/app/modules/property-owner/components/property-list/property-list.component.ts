import { Component, OnInit, ViewChild } from '@angular/core';
import { CrudService } from 'src/app/modules/shared/service';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { ToastrService } from 'ngx-toastr';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})
export class PropertyListComponent implements OnInit {

  
  isLoading: boolean = true;
  dataSource: any = null;
  ownerId: any = localStorage.getItem('userId')



  displayedColumns: Array<string> = ['propNo', 'propCat', 'value','rate', 'actions'] ;
  

  constructor(private _crudService: CrudService, private _router: Router, private _toastr: ToastrService) { }


  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  

  ngOnInit(): void {
    this.loadAllProperties();
  }


  loadAllProperties(){
    this._crudService.fetchItem({id: this.ownerId, module: "user"}).subscribe(data=>{
      
    
      this.dataSource =  new MatTableDataSource(data.data.properties);
      this.dataSource.paginator = this.paginator;
      this.isLoading = false;
    }, error=>{

    })
  }





  viewProperty(id: Number){

   this._router.navigate([`/admin/view_property/${id}`])
  }









}
