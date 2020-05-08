import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { CrudService } from 'src/app/modules/shared/service';

@Component({
  selector: 'app-property-locations',
  templateUrl: './property-locations.component.html',
  styleUrls: ['./property-locations.component.css']
})
export class PropertyLocationsComponent implements OnInit, OnDestroy {

 
  @ViewChild(MapInfoWindow, {static: false}) infoWindow: MapInfoWindow;

  center = {lat: 5.559459, lng: -0.215029};
  markerOptions = {draggable: false};
  markers: Array<any> = [];
  markerPositions: google.maps.LatLngLiteral[] ;
  zoom = 10;
  display?: google.maps.LatLngLiteral;
  infoContent : any;
  isLoaded: boolean = false;

  constructor(private _crudService: CrudService) { }

  ngOnInit(): void {
    console.log("Im called")
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
      this.isLoaded = true;

      
    }, error=>{

    })

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
  }
 

  openInfoWindow(marker: MapMarker, content) {
    
    this.infoContent = content
    this.infoWindow.open(marker);
  }

  ngOnDestroy(){
    console.log("Im destroyed")
    this.markers = [];
  }
  


}
