import { Component, OnInit, ViewChild } from '@angular/core';
import { CrudService } from 'src/app/modules/shared/service';
import { MatPaginator } from '@angular/material/paginator';
import { DeleteItemComponent } from 'src/app/modules/shared/components/delete-item/delete-item.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-list-owner',
  templateUrl: './list-owner.component.html',
  styleUrls: ['./list-owner.component.css']
})
export class ListOwnerComponent implements OnInit {

  isLoading: boolean = true;
  dataSource: any = null;
  slide: boolean = false;

  isAddUser: boolean = false;

  displayedColumns: any ;
  listUserColumn: string = 'col-md-12';
  addUserColumn: string = 'd-none'



  allowedColumns: any = [
    {def:'id', slideShow: false},
    {def: 'username', slideShow: true},
    {def: 'full name', slideShow: false},
    {def: 'email',  slideShow: true},
    {def: 'role', slideShow:false},
    {def: 'actions', slideShow: false}
  ];

  constructor(private _crudService: CrudService, public dialog: MatDialog, private _snackBar: MatSnackBar, private _router: Router, private _toastr: ToastrService) { }


  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  

  ngOnInit(): void {
    this.getCollumnDefinitions();
    this.loadAllUsers();
  }


  loadAllUsers(){
    this.isLoading = true;
    this._crudService.fetchAll("user/owners").subscribe(data=>{
      this.dataSource = data.data;
      this.dataSource.paginator = this.paginator;
      this.isLoading = false;
    }, error=>{

    })
  }

  getCollumnDefinitions(){
    if(this.slide){
      this.displayedColumns = this.allowedColumns
                                  .filter(col => col.slideShow == true ).map(cd => cd.def);
    }else{
      this.displayedColumns = this.allowedColumns.map(cd => cd.def);
    }

  }

  addUser(){
    this.slide = true;
    this.getCollumnDefinitions();
    this.listUserColumn = 'col-md-6';
    this.addUserColumn = 'col-md-6';
    this.isAddUser = true;
  }

  listUser(){

    this.slide = false;
    this.getCollumnDefinitions();
    this.listUserColumn = 'col-md-12';
    this.addUserColumn = 'd-none';
    this.isAddUser = false;
  }



  newUserCreated(event: any){
    this.loadAllUsers();
  }


  viewOwner(id){
    this._router.navigate([`/admin/view_owner/${id}`])

  }

  editOwner(id){

  }

  


  deleteOwner(id: Number){
    let data = {
      module: 'user',
      id
    }
    const dialogRef = this.dialog.open(DeleteItemComponent, {
      width: '550px',
      height: '180px',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.event){
        this._snackBar.open("Owner Deleted 🙂  ", "", {
          duration: 2000,
        });
       this.loadAllUsers()

      }else{

        this._toastr.error("Oops an error. 🥺","",{
          timeOut:2000
        })
      }
    });
  }


}
