import { Component, OnInit, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { CrudService } from 'src/app/modules/shared/service';
import { ActivatedRoute } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-view-property',
  templateUrl: './view-property.component.html',
  styleUrls: ['./view-property.component.scss']
})
export class ViewPropertyComponent implements OnInit {

 
  @ViewChild(MapInfoWindow, {static: false}) infoWindow: MapInfoWindow;

  property : any;
  center = {lat: 5.559459, lng: -0.215029};
  markerOptions = {draggable: false};
  markers: Array<any> = [];
  zoom = 10;
  display?: google.maps.LatLngLiteral;
  propertyId: any;
  infoContent: any;
  isLoaded: boolean = false;

  constructor(private _crudService: CrudService, private _route: ActivatedRoute, private ngxService: NgxUiLoaderService, private _toastr: ToastrService,) { }

  ngOnInit(): void {
    this.propertyId = this._route.snapshot.paramMap.get('id');
     this.loadProperty();
    
  }


    loadProperty(){

   // this.ngxService.start()
    this._crudService.fetchItem({id: this.propertyId, module:"property"}).subscribe(data=>{
     
      if(data.status != 200){

        this._toastr.info("An error occured", "Oops 🥺", {  timeOut:4000});
        }else{
          let result = data.data
          this.property = result;
          this.addMarker(result)

          this._toastr.success(data.message, "Success  😊", {  timeOut:2000});
          this.isLoaded = true;
        }
 
    }, error=>{
      this._toastr.info("An error occured", "Oops 🥺", {  timeOut:4000});
    })

    //this.ngxService.stop()
    
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
        propCat: data.propCat,
        value: data.value,
        rate: data.rate
      },
      options: {
      },
    })
    //console.log(this.markers)
  }
 

  openInfoWindow(marker: MapMarker, content) {
    console.log(this.isLoaded)
    this.infoContent = content
    this.infoWindow.open(marker);
  }





}
