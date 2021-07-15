import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PhotosComponent } from './photos/photos-components';
import { PhotoComponent } from './photo/photo-component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { OnmouseoverImgDirective } from './onmouseover-img.directive';
import { OnmouseoverRowDirective } from './onmouseover-row.directive';
import { AppRoutingModule } from './app-routing.module';
import { DatailsComponent } from './user/datails/datails.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumComponent } from './album/album.component';
import { AlbumDetailsComponent } from './album/album-details/album-details.component';


@NgModule({
  declarations: [
    AppComponent,
    PhotosComponent,
    PhotoComponent,
    UsersComponent,
    UserComponent,
    OnmouseoverImgDirective,
    OnmouseoverRowDirective,
    DatailsComponent,
    AlbumsComponent,
    AlbumComponent,
    AlbumDetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
