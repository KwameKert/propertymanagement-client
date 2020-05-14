import { Component, OnInit, ViewChild } from '@angular/core';
import { CrudService } from 'src/app/modules/shared/service';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-list-invoices',
  templateUrl: './list-invoices.component.html',
  styleUrls: ['./list-invoices.component.css']
})
export class ListInvoicesComponent implements OnInit {

  isLoading: boolean = true;
  dataSource: any = null;


  displayedColumns: Array<string> = ['propNo', 'invoiceId', 'amount', 'status', 'actions'] ;

  constructor(private _crudService: CrudService, public dialog: MatDialog, private _router: Router) { }


  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  

  ngOnInit(): void {
    this.loadInvoice();
  }



  loadInvoice(){
    this._crudService.fetchAll("invoice").subscribe(data=>{
      this.dataSource =  new MatTableDataSource(data.data);
      this.dataSource.paginator = this.paginator;
      this.isLoading = false;
    }, error=>{

    })
  }

  viewInvoice(){

  }

}
