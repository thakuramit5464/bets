import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material-module';
import { AppComponent } from './app.component';


import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ArticleComponent } from './article/article.component';
import { ServiceComponent } from './service/service.component';
import { HeaderComponent } from './header/header.component';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClientModule } from '@angular/common/http';
import { CollectDataComponent } from './collect-data/collect-data.component';
import { ViewComponent } from './article/view/view.component';

import { DeleteComponent } from './article/delete/delete.component';
import { ImageSliderComponent } from './image-slider/image-slider.component';



@NgModule({
  declarations: [
    AppComponent,
  
    HomeComponent,
    AboutUsComponent,
    ArticleComponent,
    ServiceComponent,
    HeaderComponent,
    CollectDataComponent,
    ViewComponent,
  
    DeleteComponent,
       ImageSliderComponent,
   
    
  ],
    
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,FormsModule

    
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
