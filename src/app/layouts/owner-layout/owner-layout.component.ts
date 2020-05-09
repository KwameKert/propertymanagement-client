import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-owner-layout',
  templateUrl: './owner-layout.component.html',
  styleUrls: ['./owner-layout.component.scss']
})
export class OwnerLayoutComponent implements OnInit {

  sideBarOpen = true;

  links: Array<object> = [
    {name: 'dashboard',url: '/owner/dashboard', icon: 'home'},
    {name: 'payments', url: '/owner/payments',  icon: 'credit_card'}
  ]
    


 
  constructor() { }


  ngOnInit(): void {

  }

  toggleSidebar(){
    this.sideBarOpen = !this.sideBarOpen;
  }

  

}
