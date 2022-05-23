import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './spabase/content/content.component';
import { FooterComponent } from './spabase/footer/footer.component';
import { HeaderComponent } from './spabase/header/header.component';
import { LeftnavComponent } from './spabase/leftnav/leftnav.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    HeaderComponent,
    FooterComponent,
    LeftnavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
