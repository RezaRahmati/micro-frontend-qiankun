import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SingleSpaProps, singleSpaPropsSubject } from './../single-spa/single-spa-props';

@Component({
  selector: 'sales-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'sales';

  singleSpaProps!: SingleSpaProps;
  subscription!: Subscription;

  ngOnInit(): void {
    this.subscription = singleSpaPropsSubject.subscribe(
      props => (this.singleSpaProps = props),
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  // OR if you don't need to access `singleSpaProps` inside the component
  // then create `Observable` property and use it in template with `async` pipe.
  singleSpaProps$ = singleSpaPropsSubject.asObservable();
}
