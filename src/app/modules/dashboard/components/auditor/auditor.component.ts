import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { CrudService } from 'src/app/modules/shared/service';
import { NgxUiLoaderService } from 'ngx-ui-loader';


@Component({
  selector: 'app-auditor',
  templateUrl: './auditor.component.html',
  styleUrls: ['./auditor.component.css']
})
export class AuditorComponent implements OnInit {

  receivables: number;
  transaction: number;
  revenue: number;
  
  public lineChartData: ChartDataSets[];

  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: ChartOptions  = {
    responsive: true,
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: '#f767c461',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];
constructor(private _crudService: CrudService,  private ngxService: NgxUiLoaderService){}


ngOnInit(): void{

  this.ngxService.start();
  this.fetchData();
  this.ngxService.stop();
  

}


fetchData(){
    this._crudService.fetchAll("dashboard/auditor").subscribe(data =>{

      this.receivables = data.data.receivables
      this.transaction = data.data.transaction
      this.revenue = data.data.revenue  
      this.monthlyTransactions(data.data.month);
    
    }, error=>{

    })
}


monthlyTransactions(month: Array<Array<number>>){

    let vals = month.map(item=> item[1]);
    this.lineChartData = [{data: vals, label: 'Monthly Transactions '}]
    console.log(this.lineChartData)

}





}
