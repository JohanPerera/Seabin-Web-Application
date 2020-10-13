import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/boards/home',
    pathMatch: "full"
  },
  {
    path: 'boards',
    loadChildren: () => import('./boards/boards.module').then(module => module.BoardsModule)
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
