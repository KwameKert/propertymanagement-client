import { Component, OnInit, ViewChild } from '@angular/core';
import { CrudService } from 'src/app/modules/shared/service';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

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

  constructor(private _crudService: CrudService) { }


  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  

  ngOnInit(): void {
    this.getCollumnDefinitions();
    this.loadAllUsers();
  }


  loadAllUsers(){
    this._crudService.fetchAll("user").subscribe(data=>{
      
    
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

}
