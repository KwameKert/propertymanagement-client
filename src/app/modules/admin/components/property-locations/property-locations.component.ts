import { Component, OnInit, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { CrudService } from 'src/app/modules/shared/service';
import { MAR } from '@angular/material/core';

@Component({
  selector: 'app-property-locations',
  templateUrl: './property-locations.component.html',
  styleUrls: ['./property-locations.component.css']
})
export class PropertyLocationsComponent implements OnInit {

 
  @ViewChild(MapInfoWindow, {static: false}) infoWindow: MapInfoWindow;

  center = {lat: 5.559459, lng: -0.215029};
  markerOptions = {draggable: false};
  markers: Array<any> = [];
  markerPositions: google.maps.LatLngLiteral[] ;
  zoom = 10;
  display?: google.maps.LatLngLiteral;
  infoContent = 'Hello'

  constructor(private _crudService: CrudService) { }

  ngOnInit(): void {
    this.loadProperties();
    
  }


  loadProperties(){
    this._crudService.fetchAll("property").subscribe(data=>{
      
      let result = data.data
    
      let arr = [];
      for(let item of result){
          this.addMarker(item);
          //arr.push({lat: item.latitude, lng:item.longitude})
      }

      
    }, error=>{

    })

    console.log(this.markers)
  }


  addMarker(data: any){
    this.markers.push({
      position: {
        lat:  data.latitude,
        lng: data.longitude,
      },
      label: {
        color: 'red',
        text: 'Marker label ' + (this.markers.length + 1),
      },
      title: 'Marker title ' + (this.markers.length + 1),
      info: {
        propNo: data.propNo,
        owner: data.owner,
        value: data.value,
        rate: data.rate
      },
      options: {
      },
    })
    console.log(this.markers)
  }
 

  openInfoWindow(marker: MapMarker, content) {
    
    this.infoContent = content
    this.infoWindow.open(marker);
  }



}
