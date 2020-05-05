import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {

  sideBarOpen = true;

  links: Array<object> = [
    {name: 'dashboard',url: '/admin/dashboard', icon: 'home'},
    {name: 'Owner', url: '/user/list_owner',  icon: 'supervised_user_circle'},
    {name: 'Property', url: '/admin/list_property', icon: 'widgets'},
    {name: 'Location', url: '/admin/list_property', icon: 'pin_drop'},
    {name: 'user', url: '/admin/list_user', icon: 'account_box'},
    {name: 'leader', url: '/leaders/list',icon: 'supervised_user_circle'},
  ]
    


 
  constructor() { }


  ngOnInit(): void {

  }

  toggleSidebar(){
    this.sideBarOpen = !this.sideBarOpen;
  }

  

  

}
