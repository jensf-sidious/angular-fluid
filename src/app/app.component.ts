import {
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';

import { getFluidContainer } from './fluid/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'angular-fluid';


  constructor() {}

  async ngOnInit() {
    let { container, services } = await getFluidContainer(); 
    if (!container.connected) {
      await new Promise<void>((resolve) => {
        container.once("connected", () => {
          resolve();
        });
      });
    }
  }
  ngOnDestroy(): void {}
}
