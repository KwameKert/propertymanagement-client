import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {

  currentLink: string = 'dashboard';
  sideBarOpen = true;

  links: Array<object> = [
    {name: 'dashboard',url: '/dashboard', icon: 'home'},
    {name: 'Owner', url: '/owners/list',  icon: 'supervised_user_circle'},
    {name: 'event', url: '/events/list', icon: 'event'},
    {name: 'property', url: '/departments/list', icon: 'business'},
    {name: 'leader', url: '/leaders/list',icon: 'supervised_user_circle'},
  ]
    


 
  constructor(private _router: Router) { }


  ngOnInit(): void {
  }

  toggleSidebar(){
    this.sideBarOpen = !this.sideBarOpen;
  }


  setLinkName(name: string){

    this.currentLink = name;

  }


}
