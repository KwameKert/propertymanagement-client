import { Component, OnInit, ViewChild } from '@angular/core';
import { CrudService } from 'src/app/modules/shared/service';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-all-transactions',
  templateUrl: './all-transactions.component.html',
  styleUrls: ['./all-transactions.component.css']
})
export class AllTransactionsComponent implements OnInit {

  isLoading: boolean = true;
  dataSource: any = null;


  displayedColumns: Array<string> = ['id', 'amount', 'method', 'date'] ;

  constructor(private _crudService: CrudService, public dialog: MatDialog, private _router: Router) { }


  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  

  ngOnInit(): void {
    this.loadInvoice();
  }



  loadInvoice(){
    this._crudService.fetchAll("transaction").subscribe(data=>{
      this.dataSource =  new MatTableDataSource(data.data);
      this.dataSource.paginator = this.paginator;
      this.isLoading = false;
    }, error=>{

    })
  }

  viewTransaction(data: any){

    // const dialogRef = this.dialog.open(ViewInoviceComponent, {
    //   width: '550px',
    //   data
    // });

    // dialogRef.afterClosed().subscribe(result => {
     
    // });

  }
}
