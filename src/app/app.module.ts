import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PhotosComponent } from './photos/photos-components.component';
import { PhotoComponent } from './photo/photo-component.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { OnmouseoverImgDirective } from './onmouseover-img.directive';
import { OnmouseoverRowDirective } from './onmouseover-row.directive';


@NgModule({
  declarations: [
    AppComponent,
    PhotosComponent,
    PhotoComponent,
    UsersComponent,
    UserComponent,
    OnmouseoverImgDirective,
    OnmouseoverRowDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
