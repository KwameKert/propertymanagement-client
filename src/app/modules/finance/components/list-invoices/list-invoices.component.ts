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

  constructor() { }

  ngOnInit(): void {
  }

}
