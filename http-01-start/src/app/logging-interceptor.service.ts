import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export class LoggingInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // throw new Error('Method not implemented.');
        console.log('Outgoing request');
        console.log(req.url);
        return next.handle(req).pipe(tap(event => {
            if(event.type === HttpEventType.Response){
                console.log("respinse is arriving: ", event.body);
            }
        }));
    }
    
}