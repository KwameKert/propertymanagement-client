import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/modules/shared/service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DeleteItemComponent } from 'src/app/modules/shared/components/delete-item/delete-item.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-view-owner',
  templateUrl: './view-owner.component.html',
  styleUrls: ['./view-owner.component.css']
})
export class ViewOwnerComponent implements OnInit {

  ownerId: any;
  owner: any;
  isLoaded: boolean = false;
  dataSource: any;

  displayedColumns: Array<string> = ['propNo',  'propCat', 'value', 'actions'] ;

  constructor(private _crudService: CrudService,private _snackBar: MatSnackBar, private _route: ActivatedRoute,  private _toastr: ToastrService, public dialog: MatDialog,  private _router: Router) { }

  ngOnInit(): void {
    
    this.ownerId = this._route.snapshot.paramMap.get('id');
    this.fetchOwner();
  }

  fetchOwner(){

      this._crudService.fetchItem({id: this.ownerId, module: "user"}).subscribe(data=>{

         this.owner= data.data;
        this.loadProperty(data.data.properties)
         this.isLoaded = true
         this._toastr.success(data.message,"",{
          timeOut:2000
        })
      }, error=>{
        this._toastr.error("Oops an error. 🥺","",{
          timeOut:2000
        })
      })
  }

  loadProperty(data){
    this.dataSource =  new MatTableDataSource(data);
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
       this.fetchOwner()

      }else{

        this._toastr.error("Oops an error. 🥺","",{
          timeOut:2000
        })
      }
    });
  }

}
