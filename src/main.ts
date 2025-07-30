import { platformBrowser } from '@angular/platform-browser';
import { AppModule } from './app/app.module';

import { Component } from '@angular/core';
import 'zone.js';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AppModule],
  template: `
    Test
  `,
})
export class MainComponent {
}

platformBrowser().bootstrapModule(AppModule)
  .catch(err => console.error(err));