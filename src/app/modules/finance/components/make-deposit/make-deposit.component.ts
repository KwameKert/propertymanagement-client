import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CrudService } from 'src/app/modules/shared/service';
import { CardDetailsComponent } from '../card-details/card-details.component';
import { MomoComponent } from '../momo/momo.component';

@Component({
  selector: 'app-make-deposit',
  templateUrl: './make-deposit.component.html',
  styleUrls: ['./make-deposit.component.css']
})
export class MakeDepositComponent implements OnInit {

  invoiceId: any;
  invoice: any;
  card: boolean ;
  momo: boolean;

  constructor(public dialog: MatDialog, private _crudService: CrudService, private _route: ActivatedRoute, private _router: Router){}
  ngOnInit(): void {

    this.invoiceId = this._route.snapshot.paramMap.get('id');
    this.getProgram();
    //throw new Error("Method not implemented.");
  }


  getProgram() {
    this._crudService.fetchItem({id: this.invoiceId, module: 'invoice'}).subscribe(data=>{
      this.invoice = data.data;
    //  console.log(this.invoice)
    }, error =>{
      console.error(error);
    })
  }


  cardForm(){
    const dialogRef = this.dialog.open(CardDetailsComponent, {
      width: '800px',
      data: this.invoice
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.saved){
        this._router.navigate(['/owner/invoices'])
        console.log(result)
      }
    
    });
  }

  momoDetails(){

    const dialogRef = this.dialog.open(MomoComponent, {
      width: '650px',
      height:'450px',
      data: this.invoice
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    
    });
  }


  makePayment(data){
    this._crudService.addItem(data, "transaction").subscribe(data=>{

    }, error=>{
      
    })
  }


}
