import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export class AuthInterceptorService implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // throw new Error('Method not implemented.');
        // console.log('request is on its way');
        const newReq = req.clone({
            headers: req.headers.append('Auth', 'xyz')
        });
        return next.handle(newReq).pipe(tap(event => {
            if(event.type === HttpEventType.Response) {
                console.log('response arrvied, body data: ', event.body);
            }
        }));
    }

}