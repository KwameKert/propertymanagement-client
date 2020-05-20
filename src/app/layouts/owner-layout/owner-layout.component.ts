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
   {name: 'property', url: '/owner/properties',  icon: 'widgets'},
   {name: 'Invoice', url: '/owner/invoices', icon: 'send'},
  ]
    


 
  constructor() { }


  ngOnInit(): void {

  }

  toggleSidebar(){
    this.sideBarOpen = !this.sideBarOpen;
  }

  

}
