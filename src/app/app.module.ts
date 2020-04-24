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
import { DokiListComponent } from './doki-list/doki-list.component';
import { DokiThumbinalComponent } from './doki-thumbinal/doki-thumbinal.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DokiDetailsComponent } from './doki-details/doki-details.component';
import { DokiListResolver } from './services/doki-list.resolver';

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
