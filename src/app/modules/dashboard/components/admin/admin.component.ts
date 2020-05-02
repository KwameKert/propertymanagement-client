import { Component, OnInit, ViewChild } from '@angular/core';
import {MapInfoWindow, MapMarker} from '@angular/google-maps';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  @ViewChild(MapInfoWindow, {static: false}) infoWindow: MapInfoWindow;

  center = {lat: 5.559459, lng: -0.215029};
  markerOptions = {draggable: false};
  markers: Array<any> = [];
  markerPositions: google.maps.LatLngLiteral[] = [
    {lat: 5.597509500000001, lng:-0.2355881000000001}
  ];
  zoom = 10;
  display?: google.maps.LatLngLiteral;
  infoContent = 'Hello'

  constructor() { }

  ngOnInit(): void {
    this.markers.push({
      position: {
        lat:  5.597509500000001,
        lng: -0.2355881000000001,
      },
      label: {
        color: 'red',
        text: 'Marker label ' + (this.markers.length + 1),
      },
      title: 'Marker title ' + (this.markers.length + 1),
      info: 'Marker info ' + (this.markers.length + 1),
      options: {
      //  animation: google.maps.Animation.BOUNCE,
      },
    })
  }



 

  openInfoWindow(marker: MapMarker, content) {
    
    this.infoContent = content
    this.infoWindow.open(marker);
  }



}
