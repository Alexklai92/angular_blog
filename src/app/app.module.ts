import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { PostItemComponent } from './post-item/post-item.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { EditComponent } from './admin/edit/edit.component';
import { CreateComponent } from './admin/create/create.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    PostItemComponent,
    DashboardComponent,
    EditComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
