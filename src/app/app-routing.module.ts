import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumDetailsResolver } from './album/album-details.resolver';
import { AlbumDetailsComponent } from './album/album-details/album-details.component';
import { AlbumsResolver } from './albums.resolver';
import { AlbumsComponent } from './albums/albums.component';
import { PhotosComponent } from './photos/photos-components';
import { PhotosResolver } from './photos/photos.resolver';
import { UserResolver } from './user.resolver';
import { DatailsComponent } from './user/datails/datails.component';
import { UsersResolver } from './users.resolver';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'photos', component: PhotosComponent },
  { path: 'albums', component: AlbumsComponent, resolve: { usersFromResolver: UsersResolver, albumsFromResolver: AlbumsResolver } },
  { path: 'user/details/:id', component: DatailsComponent, resolve: { userFromResolver: UserResolver } },
  { path: 'album/details/:id', component: AlbumDetailsComponent, resolve: { albumDetailsFromResolver: AlbumDetailsResolver, userFromResolver: UserResolver, photosFromResolver: PhotosResolver } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
