import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { PostListComponent } from './post/post-list/post-list.component';
import { SuffixAndPrefixCurrencyPipe } from './pipes/suffix-and-prefix-currency.pipe';


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
    PostListComponent,
    SuffixAndPrefixCurrencyPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
