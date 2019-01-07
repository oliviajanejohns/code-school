import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// Import your required language in main.ts or at the root of your application
// see https://codemirror.net/mode/index.html
import 'codemirror/mode/python/python';
import 'codemirror/mode/markdown/markdown';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
