import { Component, OnInit, ViewChild } from '@angular/core';
import { CrudService } from 'src/app/modules/shared/service';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { ToastrService } from 'ngx-toastr';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-owner-invoice',
  templateUrl: './owner-invoice.component.html',
  styleUrls: ['./owner-invoice.component.css']
})
export class OwnerInvoiceComponent implements OnInit {


  isLoading: boolean = true;
  dataSource: any = null;

  displayedColumns: Array<string> = ['propNo', 'amount','status', 'dueDate','actions'] ;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  
  constructor(private _crudService: CrudService, private _router: Router) { }

  ngOnInit(): void {
    this.loadInvoices();
  }

  loadInvoices(){
    this._crudService.fetchAll("invoice/owner").subscribe(data=>{
      
    
      this.dataSource =  new MatTableDataSource(data.data);
      this.dataSource.paginator = this.paginator;
      this.isLoading = false;
    }, error=>{

    })
  }


  viewInvoice(id: number){

    this._router.navigate([`/owner/make-deposit/${id}`])
  }

}
