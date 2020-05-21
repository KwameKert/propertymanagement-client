import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { CrudService } from 'src/app/modules/shared/service';
import { NgxUiLoaderService } from 'ngx-ui-loader';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  property: number;
  user: number;
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
    this._crudService.fetchAll("dashboard/admin").subscribe(data =>{

      this.property = data.data.property
      this.transaction = data.data.transaction
      this.revenue = data.data.revenue
      this.user  = data.data.user
      
      this.monthlyTransactions(data.data.month);
    //  console.log(month)


    }, error=>{

    })
}


monthlyTransactions(month: Array<Array<number>>){

    let vals = month.map(item=> item[1]);
    this.lineChartData = [{data: vals, label: 'Monthly Transactions '}]

    console.log(this.lineChartData);

    //{ data: [65, 59, 80888], label: 'Series A' },
    console.log(vals)

}





}
