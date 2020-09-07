import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription, Observable, observable  } from 'rxjs';
import { map, filter } from 'rxjs/operators'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private firstObSubscription: Subscription;
  constructor() { }

  ngOnInit() {
    // this.firstObSubscription = interval(1000).subscribe(count => {console.log(count)});
    const customObservable = Observable.create(
      observer => {
        let count = 0;
        setInterval(
          () => {
            observer.next(count);
            if(count === 2){
              observer.complete();
            }
            if(count > 3){
              observer.error(new Error('count is greater than 3!'));
            }
            count++;
          }, 1000);
      });

      const operatorObservable = customObservable.pipe(
        filter(data => {
          return data > 0;
        }),
        map((data: number) => {
          return 'Round: ' + (data + 1);
        })
      );

      this.firstObSubscription = operatorObservable.subscribe(
        data => {
          console.log(data);
        },
        error => {
          console.log(error);
          alert(error.message);
        },
        () => {
          console.log('Completed.');
        })
  }

  ngOnDestroy(): void {
    this.firstObSubscription.unsubscribe();
  }

}
