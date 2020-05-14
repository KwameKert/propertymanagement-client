import { Component, OnInit, ViewChild } from '@angular/core';
import { CrudService } from 'src/app/modules/shared/service';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DeleteItemComponent } from 'src/app/modules/shared/components/delete-item/delete-item.component';

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
  

  constructor(private _crudService: CrudService, public dialog: MatDialog, private _snackBar: MatSnackBar, private _router: Router, private _toastr: ToastrService) { }


  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  

  ngOnInit(): void {
    this.loadAllProperties();
  }


  loadAllProperties(){
    this._crudService.fetchAll("property").subscribe(data=>{
      
    
      this.dataSource =  new MatTableDataSource(data.data);
      this.dataSource.paginator = this.paginator;
      this.isLoading = false;
    }, error=>{
      console.error(error)
    })
  }



  newUserCreated(event: any){
    this.loadAllProperties();
  }

  addProperty(){
    this._router.navigate(['/admin/add_property_owner'])
    
  }

  viewProperty(id: Number){

    this._router.navigate([`/admin/view_property/${id}`])
  }


  editProperty(id: Number){

    this._router.navigate([`/admin/edit_property/${id}`])

  }


  deleteProperty(id: Number){
    let data = {
      module: 'property',
      id
    }
    const dialogRef = this.dialog.open(DeleteItemComponent, {
      width: '550px',
      height: '180px',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.event){
        this._snackBar.open("Property Deleted 🙂  ", "", {
          duration: 2000,
        });
       this.loadAllProperties()

      }else{

        this._toastr.error("Oops an error. 🥺","",{
          timeOut:2000
        })
      }
    });
  }


  generateBill(id: Number){
    this._router.navigate([`/admin/generate_bill/${id}`])
  }



  
}
