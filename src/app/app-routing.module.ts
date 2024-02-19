import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServiceComponent } from './service/service.component';
import { ArticleComponent } from './article/article.component';
import { CollectDataComponent } from './collect-data/collect-data.component';
import { ViewComponent } from './article/view/view.component';
import { EditComponent } from './article/edit/edit.component';
import { DeleteComponent } from './article/delete/delete.component';

const routes: Routes = [
  {path:'', redirectTo:'/home' ,pathMatch:'full'},
  {path:'home' ,component: HomeComponent},
  {path:'about-us', component: AboutUsComponent},
  {path:'service', component: ServiceComponent},
  {path:'article', children:[
    {path:'',component:ArticleComponent},
    {path:'data/:id',component: ViewComponent} ,
    {path:'edit/:id',component:EditComponent},
    {path:'delete/:id',component:DeleteComponent},
  ]},
 
  {path:'collect-data', component: CollectDataComponent},
  
  
    
  
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
