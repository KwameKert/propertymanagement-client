import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auditor-layout',
  templateUrl: './auditor-layout.component.html',
  styleUrls: ['./auditor-layout.component.scss']
})
export class AuditorLayoutComponent implements OnInit {

  sideBarOpen = true;

  links: Array<object> = [
    {name: 'dashboard',url: '/auditor/dashboard', icon: 'home'},
    {name: 'transaction', url: '/auditor/all_transaction',  icon: 'credit_card'}
  ]
    


 
  constructor() { }


  ngOnInit(): void {

  }

  toggleSidebar(){
    this.sideBarOpen = !this.sideBarOpen;
  }

  

}
