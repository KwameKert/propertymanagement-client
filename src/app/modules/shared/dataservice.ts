import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class DataService {


 
private _baseUrl :String = environment.api_host;    

private messageSource = new BehaviorSubject('Dashboard');

private counter: number = 0;

constructor(private _httpClient: HttpClient){}


get CountDown(): number{
    return this.counter
}


 setCountDown(){
    return new Promise((resolve,reject)=>{
        this.getNextEvent().subscribe(data=>{
            this.counter = data.data
            resolve(true)
        })
    })
        
}


getLink(): Observable<any> {
    return this.messageSource.asObservable();
}

setLink(linkName: string){
    this.messageSource.next(linkName)
}

public getNextEvent(): Observable<any>{
    return this._httpClient.get(`${this._baseUrl}/dashboard/nextEvent`);
}



public resetCounter(){
    console.log("Reset")
    this.setCountDown();
}


} 