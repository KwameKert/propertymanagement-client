import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse, HttpErrorResponse }   from '@angular/common/http';
import { Injectable } from "@angular/core"
import { Observable, of } from "rxjs";
import { tap, catchError } from "rxjs/operators";
import { ToastrService } from 'ngx-toastr';
import {Router} from '@angular/router';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(public _toastr: ToastrService, private _router: Router) {}
intercept(
        req: HttpRequest<any>,
        next: HttpHandler
      ): Observable<HttpEvent<any>> {
    
        return next.handle(req).pipe(
         
            catchError((err: any) => {
                if(err instanceof HttpErrorResponse) {
                    
                    if(err.status == 403){
                        this._toastr.error("Please authenticate", "Oops 🥺", {  timeOut:4000});
                        this._router.navigate(['/login']);
                    }
                }
                return of(err);
            }));
    
      }
      
}