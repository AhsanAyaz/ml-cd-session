import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule , Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ZoneDemoComponent } from './zone-demo/zone-demo.component';
import { ROUTES } from "./app.routes";
import { MiniBoxComponent } from './mini-box/mini-box.component';
import { CdDetachDemoComponent } from './cd-detach-demo/cd-detach-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    ZoneDemoComponent,
    MiniBoxComponent,
    CdDetachDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
