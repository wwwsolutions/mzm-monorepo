import { Component } from '@angular/core';

// xplat
import { AppBaseComponent } from '@mzm/web';

@Component({
  selector: 'mzm-root',
  templateUrl: './app.component.html'
})
export class AppComponent extends AppBaseComponent {
  constructor() {
    super();
  }
}
