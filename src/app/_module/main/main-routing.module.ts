import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/_core/guards/auth.guars';
import { MainComponent } from './main.component';


const routes: Routes = [
  {
     path: '',
     component: MainComponent,
     children: [
        { 
           path: '', redirectTo: 'dashboard', pathMatch: 'prefix' 
        },
        { 
           path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule), 
           data: {
              functionCode: 'BYPASS'
           },
           canActivate: [AuthGuard]
        },
       
     ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
