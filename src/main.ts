import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/container/app.component';
import { appConfig } from './app/container/config/app.config';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
