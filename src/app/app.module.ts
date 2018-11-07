import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component'

import { DataService } from './data.service';
import { ProductsComponentComponent } from './products-component/products-component.component'

import { SafePipe } from './pipes/safeHtml'

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ProductsComponentComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
