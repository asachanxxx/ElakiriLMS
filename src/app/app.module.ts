import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './spabase/content/content.component';
import { FooterComponent } from './spabase/footer/footer.component';
import { HeaderComponent } from './spabase/header/header.component';
import { LeftnavComponent } from './spabase/leftnav/leftnav.component';
import { PilotcompComponent } from './pilotcomp/pilotcomp.component';
import { MaincompComponent } from './maincomp/maincomp.component';


@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    HeaderComponent,
    FooterComponent,
    LeftnavComponent,
    PilotcompComponent,
    MaincompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
