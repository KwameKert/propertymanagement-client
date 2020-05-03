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
  displayedColumns: string[] = ['id','username', 'full name', 'email', 'role', 'actions'];

  constructor(private _crudService: CrudService) { }
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  

  ngOnInit(): void {
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

}
