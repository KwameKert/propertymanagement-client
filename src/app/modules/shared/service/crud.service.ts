import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment} from '../../../../environments/environment';
import { Observable } from 'rxjs';


export interface User {
  fullName: string;
  username: string;
  role: string;
  email: string;
}



@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private _baseUrl :String = environment.api_host;
  constructor(private _httpClient: HttpClient) { }





  deleteItem({id, module}){
    return this._httpClient.delete(`${this._baseUrl}/${module}/${id}`);
   }


   
  public fetchItem({id, module}): Observable<any>{
    return this._httpClient.get(`${this._baseUrl}/${module}/${id}`)
  }


  public fetchAll(module: any):  Observable<any> {
    return this._httpClient.get(`${this._baseUrl}/${module}/`)
  }




  public addItem(data, module): Observable<any>{
    return this._httpClient.post(`${this._baseUrl}/${module}/`, data);
  }


  public updateItem({data, module}): Observable<any>{
    return this._httpClient.put(`${this._baseUrl}/${module}/`, data);
  }






}
