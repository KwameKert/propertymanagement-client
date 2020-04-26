import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collector-layout',
  templateUrl: './collector-layout.component.html',
  styleUrls: ['./collector-layout.component.scss']
})
export class CollectorLayoutComponent implements OnInit {

  sideBarOpen = true;
  constructor() { }

  ngOnInit(): void{
  }

  toggleSidebar(){
    this.sideBarOpen = !this.sideBarOpen;
  }
}
