import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListstudentComponent } from './liststudent/liststudent.component';
import { DetailsComponent } from './details/details.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ListstudentComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
      RouterModule.forRoot(
        [
          {path:'',component:ListstudentComponent},
          {path:'liststudent',component:ListstudentComponent},
          {path:'liststudent/:ID',component:DetailsComponent},
          {path:'**',redirectTo:'liststudent',pathMatch:'full'}
        ]
      ),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
