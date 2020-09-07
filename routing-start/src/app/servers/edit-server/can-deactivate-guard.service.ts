import { Observable } from "rxjs";
import { RouterStateSnapshot, ActivatedRouteSnapshot, CanDeactivate } from "@angular/router";

export interface CanCompomentDeactivate {
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

export class CanDeactivateGuard implements CanDeactivate<CanCompomentDeactivate> {
    canDeactivate(compoment: CanCompomentDeactivate, 
        currentRoute: ActivatedRouteSnapshot, 
        currentState: RouterStateSnapshot,
        nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
            return compoment.canDeactivate();
        }
}