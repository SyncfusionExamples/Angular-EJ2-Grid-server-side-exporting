import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { HomeComponent } from './app/home/home.component';
import { CounterComponent } from './app/counter/counter.component';
import { FetchDataComponent } from './app/fetch-data/fetch-data.component';

export function getBaseUrl() {
  return document.getElementsByTagName('base')[0].href;
}

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'counter', component: CounterComponent },
  { path: 'fetch-data', component: FetchDataComponent },
];

const providers = [
  { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] },
  provideRouter(routes),
  provideHttpClient()
];

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, { providers })
  .catch(err => console.log(err));
