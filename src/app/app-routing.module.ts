import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { DetailsComponent } from './details/details.component';
import { PostsComponent } from './posts/posts.component';
import { TformComponent } from './tform/tform.component';
import { MformComponent } from './mform/mform.component';




const routes: Routes = [

{
  path:'',
  component: UsersComponent
},
{
  path:'details/:id',
  component: DetailsComponent
},
{
  path:'posts',
  component: PostsComponent
},
{
  path:'tform',
  component: TformComponent
}
,
{
  path:'mform',
  component: MformComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
