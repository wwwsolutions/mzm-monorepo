import { NgModule, Optional, SkipSelf } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { throwIfAlreadyLoaded } from '@mzm/utils';
import { MzmCoreModule } from '@mzm/web';

@NgModule({
  imports: [MzmCoreModule, IonicModule.forRoot()],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ]
})
export class MzmIonicCoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: MzmIonicCoreModule
  ) {
    throwIfAlreadyLoaded(parentModule, 'MzmIonicCoreModule');
  }
}
