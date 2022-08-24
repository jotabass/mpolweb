import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler)
        : Observable<HttpEvent<any>> {

        if (req.url.includes(environment.apiMpol)) {

            var accessToken = localStorage.getItem("access_token");
            req = req.clone({
                setHeaders: {
                    Authorization: 'Bearer ' + accessToken
                }
            });
        }

        return next.handle(req);
    }
}
