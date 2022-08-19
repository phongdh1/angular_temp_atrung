import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './_core/guards/auth.guars';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./_module/main/main.module').then(m => m.MainModule),
    data: {
      functionCode: "BYPASS"
    },
    canActivate: [AuthGuard]

  },
  {
    path: 'main',
    loadChildren: () => import('./_module/main/main.module').then(m => m.MainModule),
    data: {
      functionCode: "BYPASS"
    },
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./_module/login/login.module').then(m => m.LoginModule)

  },
  {
    path: 'callback',
    loadChildren: () => import('./_module/auth-callback/auth-callback.module').then(m => m.AuthCallbackModule)

  },
  {
    path: 'page-not-found',
    loadChildren: () => import('./_module/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
