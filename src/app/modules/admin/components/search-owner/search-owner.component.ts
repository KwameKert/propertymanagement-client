import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { CrudService } from 'src/app/modules/shared/service';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-search-owner',
  templateUrl: './search-owner.component.html',
  styleUrls: ['./search-owner.component.css']
})
export class SearchOwnerComponent implements OnInit {

 
  @Output() ownerSelected: EventEmitter<any> = new EventEmitter();
  isLoading: boolean = true;
  dataSource: any = null;
  slide: boolean = false;

  isAddUser: boolean = false;

  displayedColumns: Array<string> = [
    'id','username','full name','email','actions'
  ];
  listUserColumn: string = 'col-md-12';
  addUserColumn: string = 'd-none'




  constructor(private _crudService: CrudService) { }


  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  

  ngOnInit(): void {
    this.loadAllUsers();
  }


  loadAllUsers(){
    this._crudService.fetchAll("user/owners").subscribe(data=>{
      
     
      this.dataSource =  new MatTableDataSource(data.data);
      this.dataSource.paginator = this.paginator;
      this.isLoading = false;
    }, error=>{

    })
  }

 
 applyFilter(event: Event) {
   
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    console.log(filterValue)
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  selectOwner(id: number){
      this.ownerSelected.emit(id);
  }

}
