import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {

  sideBarOpen = true;

  links: Array<object> = [
    {name: 'dashboard',url: '/admin-dashboard', icon: 'home'},
    {name: 'User', url: '/user/list',  icon: 'supervised_user_circle'},
    {name: 'event', url: '/events/list', icon: 'event'},
    {name: 'property', url: '/departments/list', icon: 'business'},
    {name: 'leader', url: '/leaders/list',icon: 'supervised_user_circle'},
  ]
    


 
  constructor() { }


  ngOnInit(): void {

  }

  toggleSidebar(){
    this.sideBarOpen = !this.sideBarOpen;
  }

  

  

}
