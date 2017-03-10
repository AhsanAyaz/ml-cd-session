
import { Routes } from "@angular/router";

import {AppComponent} from "./app.component";
import {ZoneDemoComponent} from "./zone-demo/zone-demo.component";
import {CdDetachDemoComponent} from "./cd-detach-demo/cd-detach-demo.component";
export const ROUTES:Routes = [
  
  // App views
  {
    path: '', component: ZoneDemoComponent
  },{
    path: 'cd-ref-demo', component: CdDetachDemoComponent
  }
];
