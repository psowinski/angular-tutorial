import { appRoutes } from './routes';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import {
  DokiListComponent,
  DokiThumbinalComponent,
  DokiDetailsComponent,
  NavbarComponent,
  DokiListResolver
} from './component.index'

@NgModule({
  declarations: [
    AppComponent,
    DokiListComponent,
    DokiThumbinalComponent,
    NavbarComponent,
    DokiDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    })
  ],
  providers: [DokiListResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
