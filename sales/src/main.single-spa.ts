import { enableProdMode, NgZone } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NavigationStart, Router } from '@angular/router';
import { getSingleSpaExtraProviders, singleSpaAngular } from 'single-spa-angular';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { singleSpaPropsSubject } from './single-spa/single-spa-props';

if (environment.production) {
  enableProdMode();
}

if (!(window as any).__POWERED_BY_QIANKUN__) {
  console.log('__POWERED_BY_QIANKUN__')
  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch(err => console.error(err));
}

const lifeCycles = singleSpaAngular({
  bootstrapFunction: singleSpaProps => {
    console.log(singleSpaProps)
    singleSpaPropsSubject.next(singleSpaProps);
    return platformBrowserDynamic(getSingleSpaExtraProviders()).bootstrapModule(AppModule);
  },
  template: '<sales-app-root/>',
  Router,
  NavigationStart,
  NgZone,
});

export const bootstrap = lifeCycles.bootstrap;
export const mount = lifeCycles.mount;
export const unmount = lifeCycles.unmount;
